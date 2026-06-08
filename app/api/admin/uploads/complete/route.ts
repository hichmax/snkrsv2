import { NextResponse } from "next/server";
import { ProductStatus } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { assertAdminApi } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { STORAGE_PROVIDERS, type StorageProviderId } from "@/lib/storage-types";

function cleanImageFilename(value: unknown) {
  const raw = typeof value === "string" ? value.trim() : "";
  if (!raw) return "";

  return raw
    .split("/")
    .pop()!
    .replace(/\.[a-zA-Z0-9]+$/, "")
    .trim();
}

export async function POST(request: Request) {
  try {
    await assertAdminApi();
    const body = await request.json();
    const modelId = String(body.modelId || "");
    const secureUrl = String(body.secureUrl || "");
    const storageKey = String(body.storageKey || body.publicId || "");
    const provider = String(body.provider || "CLOUDINARY") as StorageProviderId;
    const priceText = String(body.priceText || "Prix sur demande");
    const originalFilename = cleanImageFilename(body.originalFilename) || cleanImageFilename(storageKey);
    const mediaBytes = Number(body.mediaBytes || 0);
    const mediaMimeType = String(body.mediaMimeType || "");
    const sizes = String(body.sizes || "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);

    if (!modelId || !secureUrl || !storageKey || !STORAGE_PROVIDERS.includes(provider)) {
      return NextResponse.json({ error: "Payload incomplet." }, { status: 400 });
    }

    const model = await prisma.productModel.findUnique({
      where: { id: modelId },
      include: {
        products: true
      }
    });

    if (!model) {
      return NextResponse.json({ error: "Modèle introuvable." }, { status: 404 });
    }

    const currentCount = model.products.length;
    const internalProductName = originalFilename || model.name;

    const existing = await prisma.product.findFirst({
      where: { storageProvider: provider, storageKey }
    });

    const data = {
      name: internalProductName,
      imageUrl: secureUrl,
      priceText,
      status: ProductStatus.PUBLISHED,
      color: null,
      imageAlt: model.name,
      storageProvider: provider,
      storageKey,
      mediaBytes: mediaBytes > 0 ? BigInt(mediaBytes) : null,
      mediaMimeType: mediaMimeType || null,
      cloudinaryPublicId: provider === "CLOUDINARY" ? storageKey : null
    };

    const created = existing
      ? await prisma.product.update({
          where: { id: existing.id },
          data
        })
      : await prisma.product.create({
          data: {
            ...data,
            modelId,
            sortOrder: currentCount + 1
          }
        });

    if (sizes.length) {
      await prisma.productSize.deleteMany({ where: { productId: created.id } });
      await prisma.productSize.createMany({
        data: sizes.map((sizeLabel) => ({
          productId: created.id,
          sizeLabel,
          isAvailable: true
        }))
      });
    }

    revalidatePath("/", "layout");
    return NextResponse.json({ ok: true, productId: created.id });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur upload." },
      { status: 500 }
    );
  }
}
