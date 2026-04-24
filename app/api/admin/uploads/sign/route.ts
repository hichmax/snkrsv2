import { NextResponse } from "next/server";
import { assertAdminApi } from "@/lib/auth";
import crypto from "node:crypto";

function signCloudinaryParams(params: Record<string, string>) {
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!apiSecret) {
    throw new Error("CLOUDINARY_API_SECRET manquant.");
  }

  const stringToSign = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return crypto
    .createHash("sha1")
    .update(stringToSign + apiSecret)
    .digest("hex");
}

export async function POST(request: Request) {
  try {
    await assertAdminApi();

    const body = await request.json();

    const folder =
      typeof body.folder === "string" && body.folder.trim().length > 0
        ? body.folder.trim()
        : "sneakers-addict/uploads";

    const tagsArray = Array.isArray(body.tags)
      ? body.tags
          .filter((tag: unknown) => typeof tag === "string")
          .map((tag: string) => tag.trim())
          .filter(Boolean)
      : [];

    const timestamp = Math.floor(Date.now() / 1000).toString();

    const paramsToSign: Record<string, string> = {
      folder,
      source: "uw",
      timestamp,
    };

    if (tagsArray.length > 0) {
      paramsToSign.tags = tagsArray.join(",");
    }

    const signature = signCloudinaryParams(paramsToSign);

    return NextResponse.json({
      apiKey: process.env.CLOUDINARY_API_KEY,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      signature,
      timestamp,
      folder,
      tags: tagsArray,
    });
  } catch (error) {
    console.error("Cloudinary sign error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur signature." },
      { status: 500 }
    );
  }
}