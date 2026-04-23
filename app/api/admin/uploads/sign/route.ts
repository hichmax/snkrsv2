import { NextResponse } from "next/server";
import { assertAdminApi } from "@/lib/auth";
import { cloudinaryEnv, signCloudinaryParams } from "@/lib/cloudinary";

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

    const tags = tagsArray.join(",");
    const timestamp = Math.floor(Date.now() / 1000).toString();

    const paramsToSign: Record<string, string> = {
      folder,
      source: "uw",
      timestamp,
    };

    if (tags) {
      paramsToSign.tags = tags;
    }

    const signature = signCloudinaryParams(paramsToSign);
    const env = cloudinaryEnv();

    return NextResponse.json({
      signature,
      timestamp,
      apiKey: env.apiKey,
      cloudName: env.cloudName,
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