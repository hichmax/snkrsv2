import { NextResponse } from "next/server";
import { assertAdminApi } from "@/lib/auth";
import { cloudinaryEnv, signCloudinaryParams } from "@/lib/cloudinary";

export async function POST(request: Request) {
  try {
    await assertAdminApi();
    const body = await request.json();
    const folder = String(body.folder || "sneakers-addict/uploads");
    const tags = Array.isArray(body.tags) ? body.tags.join(",") : "sneakers-addict";
    const timestamp = Math.floor(Date.now() / 1000).toString();

    const paramsToSign: Record<string, string> = {
      folder,
      source: "uw",
      tags,
      timestamp
    };

    if (process.env.CLOUDINARY_UPLOAD_PRESET) {
      paramsToSign.upload_preset = process.env.CLOUDINARY_UPLOAD_PRESET;
    }

    const signature = signCloudinaryParams(paramsToSign);
    const env = cloudinaryEnv();

    return NextResponse.json({
      signature,
      timestamp,
      apiKey: env.apiKey,
      cloudName: env.cloudName,
      folder,
      tags: tags.split(","),
      uploadPreset: env.uploadPreset
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur signature." },
      { status: 500 }
    );
  }
}
