import { NextResponse } from "next/server";
import { assertAdminApi } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createStorageKey, prepareStorageUpload } from "@/lib/storage";
import { STORAGE_PROVIDERS, type StorageProviderId } from "@/lib/storage-types";

const MAX_FILE_BYTES = 20 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);

export async function POST(request: Request) {
  try {
    await assertAdminApi();
    const body = await request.json();
    const provider = String(body.provider || "") as StorageProviderId;
    const modelId = String(body.modelId || "");
    const fileName = String(body.fileName || "");
    const mimeType = String(body.mimeType || "");
    const size = Number(body.size || 0);

    if (!STORAGE_PROVIDERS.includes(provider)) {
      return NextResponse.json({ error: "Hébergeur invalide." }, { status: 400 });
    }

    if (!modelId || !fileName || !ALLOWED_TYPES.has(mimeType) || size <= 0 || size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: "Image invalide. Formats acceptés : JPG, PNG, WebP, AVIF, 20 Mo maximum." },
        { status: 400 }
      );
    }

    const model = await prisma.productModel.findUnique({
      where: { id: modelId },
      include: { brand: true }
    });

    if (!model) {
      return NextResponse.json({ error: "Modèle introuvable." }, { status: 404 });
    }

    const storageKey = createStorageKey({
      brandName: model.brand.name,
      modelName: model.name,
      fileName,
      mimeType
    });

    return NextResponse.json(
      await prepareStorageUpload({ provider, storageKey, mimeType })
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Préparation de l'upload impossible." },
      { status: 500 }
    );
  }
}
