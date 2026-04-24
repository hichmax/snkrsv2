import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { assertAdminApi } from "@/lib/auth";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    await assertAdminApi();

    const body = await request.json();
    const rawParams = body?.paramsToSign;

    if (!rawParams || typeof rawParams !== "object") {
      return NextResponse.json(
        { error: "paramsToSign manquant." },
        { status: 400 }
      );
    }

    const allowedKeys = [
      "folder",
      "source",
      "tags",
      "timestamp",
      "context",
      "public_id",
      "use_filename",
      "unique_filename",
      "overwrite",
      "invalidate",
      "resource_type",
      "metadata",
      "audit_context",
      "quality_analysis",
    ];

    const paramsToSign: Record<string, string> = {};

    for (const key of allowedKeys) {
      const value = rawParams[key];

      if (value === undefined || value === null || value === "") continue;

      if (Array.isArray(value)) {
        paramsToSign[key] = value.join(",");
      } else {
        paramsToSign[key] = String(value);
      }
    }

    if (!paramsToSign.timestamp) {
      return NextResponse.json(
        { error: "timestamp manquant dans paramsToSign." },
        { status: 400 }
      );
    }

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET as string
    );

    return NextResponse.json({
      signature,
      apiKey: process.env.CLOUDINARY_API_KEY,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    });
  } catch (error) {
    console.error("Cloudinary sign error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Erreur signature Cloudinary.",
      },
      { status: 500 }
    );
  }
}