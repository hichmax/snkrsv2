import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const folder =
      typeof body.folder === "string" && body.folder.trim().length > 0
        ? body.folder.trim()
        : undefined;

    const tagsInput = body.tags;
    const tags =
      Array.isArray(tagsInput)
        ? tagsInput.filter((tag: unknown) => typeof tag === "string" && tag.trim().length > 0)
        : typeof tagsInput === "string" && tagsInput.trim().length > 0
        ? tagsInput
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [];

    const timestamp = Math.round(Date.now() / 1000);

    const paramsToSign: Record<string, string | number> = {
      timestamp,
      source: "uw",
    };

    if (folder) {
      paramsToSign.folder = folder;
    }

    if (tags.length > 0) {
      paramsToSign.tags = tags.join(",");
    }

    if (process.env.CLOUDINARY_UPLOAD_PRESET) {
      paramsToSign.upload_preset = process.env.CLOUDINARY_UPLOAD_PRESET;
    }

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET as string
    );

    return NextResponse.json({
      success: true,
      signature,
      timestamp,
      apiKey: process.env.CLOUDINARY_API_KEY,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET || null,
      folder: folder || null,
      tags,
    });
  } catch (error) {
    console.error("Cloudinary signature error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Impossible de générer la signature Cloudinary.",
      },
      { status: 500 }
    );
  }
}