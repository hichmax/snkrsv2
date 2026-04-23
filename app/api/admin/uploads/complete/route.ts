import { NextResponse } from "next/server";
import { ProductStatus } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { assertAdminApi } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    await assertAdminApi();
    const body = await request.json();
    const modelId = String(body.modelId || "");
    const secureUrl = String(body.secureUrl || "");
    const publicId = String(body.publicId || "");
        const priceText = String(body.priceText || "Prix sur demande");
    const sizes = String(body.sizes || "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);

    if (!modelId || !secureUrl || !publicId) {
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

    const created = await prisma.product.upsert({
      where: { cloudinaryPublicId: publicId },
      update: {
        imageUrl: secureUrl,
        priceText,
        status: ProductStatus.PUBLISHED,
        color: null,
        imageAlt: model.name
      },
      create: {
        modelId,
        name: model.name,
        color: null,
        priceText,
        imageUrl: secureUrl,
        imageAlt: model.name,
        cloudinaryPublicId: publicId,
        status: ProductStatus.PUBLISHED,
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

    return NextResponse.json({ ok: true, productId: created.id });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur upload." },
      { status: 500 }
    );
  }
}
