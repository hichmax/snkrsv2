import "server-only";

import crypto from "node:crypto";
import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { createClient } from "@supabase/supabase-js";
import { v2 as cloudinary } from "cloudinary";
import { prisma } from "@/lib/prisma";
import {
  STORAGE_PROVIDERS,
  type PreparedUpload,
  type StorageProviderId,
  type StorageProviderStatus
} from "@/lib/storage-types";

const labels: Record<StorageProviderId, string> = {
  CLOUDINARY: "Cloudinary",
  CLOUDFLARE_R2: "Cloudflare R2",
  SUPABASE: "Supabase Storage"
};

const notes: Record<StorageProviderId, string> = {
  CLOUDINARY: "Transformations d'images intégrées et CDN mondial.",
  CLOUDFLARE_R2: "Stockage économique, sans frais de sortie vers le CDN Cloudflare.",
  SUPABASE: "Stockage lié à votre projet Supabase et servi par CDN."
};

function parseLimit(value: string | undefined) {
  if (!value) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function providerLimit(provider: StorageProviderId) {
  return parseLimit(
    {
      CLOUDINARY: process.env.CLOUDINARY_STORAGE_LIMIT_BYTES,
      CLOUDFLARE_R2: process.env.R2_STORAGE_LIMIT_BYTES,
      SUPABASE: process.env.SUPABASE_STORAGE_LIMIT_BYTES
    }[provider]
  );
}

function r2Bucket() {
  return process.env.R2_BUCKET || process.env.R2_BUCKET_NAME || "";
}

function r2Endpoint() {
  return (
    process.env.R2_ENDPOINT ||
    (process.env.R2_ACCOUNT_ID
      ? `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`
      : "")
  );
}

export function isProviderConfigured(provider: StorageProviderId) {
  if (provider === "CLOUDINARY") {
    return Boolean(
      process.env.CLOUDINARY_CLOUD_NAME &&
        process.env.CLOUDINARY_API_KEY &&
        process.env.CLOUDINARY_API_SECRET
    );
  }

  if (provider === "CLOUDFLARE_R2") {
    return Boolean(
      process.env.R2_ACCOUNT_ID &&
        process.env.R2_ACCESS_KEY_ID &&
        process.env.R2_SECRET_ACCESS_KEY &&
        r2Bucket() &&
        r2Endpoint() &&
        process.env.R2_PUBLIC_BASE_URL
    );
  }

  return Boolean(
    process.env.SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY &&
      process.env.SUPABASE_STORAGE_BUCKET &&
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

function configureCloudinary() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });
}

function r2Client() {
  return new S3Client({
    region: "auto",
    endpoint: r2Endpoint(),
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || ""
    }
  });
}

function supabaseAdmin() {
  return createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || "",
    {
      auth: { autoRefreshToken: false, persistSession: false }
    }
  );
}

function cleanPart(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

function extensionFor(fileName: string, mimeType: string) {
  const existing = fileName.split(".").pop()?.toLowerCase();
  if (existing && /^[a-z0-9]{2,5}$/.test(existing)) return existing;
  return mimeType.split("/")[1]?.replace("jpeg", "jpg") || "webp";
}

export function createStorageKey(input: {
  brandName: string;
  modelName: string;
  fileName: string;
  mimeType: string;
}) {
  const extension = extensionFor(input.fileName, input.mimeType);
  const fileStem = cleanPart(input.fileName.replace(/\.[^.]+$/, "")) || "image";
  return [
    "catalog",
    cleanPart(input.brandName) || "brand",
    cleanPart(input.modelName) || "model",
    `${Date.now()}-${crypto.randomUUID().slice(0, 8)}-${fileStem}.${extension}`
  ].join("/");
}

function publicObjectUrl(baseUrl: string, key: string) {
  return `${baseUrl.replace(/\/$/, "")}/${key
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
}

export async function prepareStorageUpload(input: {
  provider: StorageProviderId;
  storageKey: string;
  mimeType: string;
}): Promise<PreparedUpload> {
  if (!isProviderConfigured(input.provider)) {
    throw new Error(`${labels[input.provider]} n'est pas encore configuré.`);
  }

  if (input.provider === "CLOUDINARY") {
    configureCloudinary();
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const publicId = input.storageKey.replace(/\.[^.]+$/, "");
    const signature = cloudinary.utils.api_sign_request(
      { public_id: publicId, timestamp },
      process.env.CLOUDINARY_API_SECRET || ""
    );

    return {
      provider: input.provider,
      storageKey: publicId,
      uploadUrl: `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
      publicUrl: null,
      fields: {
        api_key: process.env.CLOUDINARY_API_KEY || "",
        public_id: publicId,
        timestamp,
        signature
      }
    };
  }

  if (input.provider === "CLOUDFLARE_R2") {
    const command = new PutObjectCommand({
      Bucket: r2Bucket(),
      Key: input.storageKey,
      ContentType: input.mimeType,
      CacheControl: "public, max-age=31536000, immutable"
    });

    return {
      provider: input.provider,
      storageKey: input.storageKey,
      uploadUrl: await getSignedUrl(r2Client(), command, { expiresIn: 600 }),
      publicUrl: publicObjectUrl(process.env.R2_PUBLIC_BASE_URL || "", input.storageKey),
      fields: null
    };
  }

  const bucket = process.env.SUPABASE_STORAGE_BUCKET || "";
  const client = supabaseAdmin();
  const { data, error } = await client.storage
    .from(bucket)
    .createSignedUploadUrl(input.storageKey, { upsert: false });

  if (error || !data?.token) {
    throw new Error(error?.message || "Impossible de préparer l'upload Supabase.");
  }

  const { data: publicData } = client.storage.from(bucket).getPublicUrl(input.storageKey);

  return {
    provider: input.provider,
    storageKey: input.storageKey,
    uploadUrl: null,
    publicUrl: publicData.publicUrl,
    fields: {
      token: data.token,
      bucket,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "",
      supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
    }
  };
}

export async function getStorageProviderStatuses(): Promise<StorageProviderStatus[]> {
  const tracked = await prisma.product.groupBy({
    by: ["storageProvider"],
    _count: { _all: true },
    _sum: { mediaBytes: true }
  });

  const trackedByProvider = new Map(
    tracked.map((item) => [
      item.storageProvider,
      {
        assetCount: item._count._all,
        usedBytes: Number(item._sum.mediaBytes || 0)
      }
    ])
  );

  const statuses = STORAGE_PROVIDERS.map((id) => ({
    id,
    label: labels[id],
    configured: isProviderConfigured(id),
    usedBytes: trackedByProvider.get(id)?.usedBytes || 0,
    limitBytes: providerLimit(id),
    assetCount: trackedByProvider.get(id)?.assetCount || 0,
    note: notes[id]
  }));

  const cloudinaryStatus = statuses.find((item) => item.id === "CLOUDINARY");
  if (cloudinaryStatus?.configured) {
    try {
      configureCloudinary();
      const usage = (await cloudinary.api.usage()) as {
        storage?: { usage?: number; limit?: number };
      };
      cloudinaryStatus.usedBytes = usage.storage?.usage || cloudinaryStatus.usedBytes;
      cloudinaryStatus.limitBytes = usage.storage?.limit || cloudinaryStatus.limitBytes;
    } catch {
      // The tracked database value remains useful if the Cloudinary Admin API is unavailable.
    }
  }

  return statuses;
}

export async function deleteStoredAssets(
  assets: Array<{
    storageProvider: "CLOUDINARY" | "CLOUDFLARE_R2" | "SUPABASE" | "EXTERNAL";
    storageKey: string | null;
  }>
) {
  const cloudinaryKeys = assets
    .filter((asset) => asset.storageProvider === "CLOUDINARY" && asset.storageKey)
    .map((asset) => asset.storageKey as string);
  const r2Keys = assets
    .filter((asset) => asset.storageProvider === "CLOUDFLARE_R2" && asset.storageKey)
    .map((asset) => asset.storageKey as string);
  const supabaseKeys = assets
    .filter((asset) => asset.storageProvider === "SUPABASE" && asset.storageKey)
    .map((asset) => asset.storageKey as string);

  const tasks: Promise<unknown>[] = [];

  if (cloudinaryKeys.length && isProviderConfigured("CLOUDINARY")) {
    configureCloudinary();
    tasks.push(
      Promise.all(
        cloudinaryKeys.map((key) => cloudinary.uploader.destroy(key, { invalidate: true }))
      )
    );
  }

  if (r2Keys.length && isProviderConfigured("CLOUDFLARE_R2")) {
    const client = r2Client();
    tasks.push(
      Promise.all(
        r2Keys.map((key) =>
          client.send(
            new DeleteObjectCommand({
              Bucket: r2Bucket(),
              Key: key
            })
          )
        )
      )
    );
  }

  if (supabaseKeys.length && isProviderConfigured("SUPABASE")) {
    tasks.push(
      supabaseAdmin()
        .storage.from(process.env.SUPABASE_STORAGE_BUCKET || "")
        .remove(supabaseKeys)
    );
  }

  await Promise.allSettled(tasks);
}
