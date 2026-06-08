import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { assertAdminApi } from "@/lib/auth";
import { ProductStatus } from "@/generated/prisma";
import { revalidatePath } from "next/cache";
import { deleteStoredAssets } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    await assertAdminApi();
    const body = await request.json();
    const ids = Array.isArray(body.ids) ? body.ids : [];
    const action = String(body.action || "");

    if (!ids.length) {
      return NextResponse.json({ error: "Aucun produit sélectionné." }, { status: 400 });
    }

    if (action === "publish") {
      await prisma.product.updateMany({
        where: { id: { in: ids } },
        data: { status: ProductStatus.PUBLISHED }
      });
    }

    if (action === "hide") {
      await prisma.product.updateMany({
        where: { id: { in: ids } },
        data: { status: ProductStatus.HIDDEN }
      });
    }

    if (action === "feature") {
      await prisma.product.updateMany({
        where: { id: { in: ids } },
        data: { isFeatured: true }
      });
    }

    if (action === "unfeature") {
      await prisma.product.updateMany({
        where: { id: { in: ids } },
        data: { isFeatured: false }
      });
    }

    if (action === "delete") {
      const assets = await prisma.product.findMany({
        where: { id: { in: ids } },
        select: { storageProvider: true, storageKey: true }
      });
      await deleteStoredAssets(assets);
      await prisma.product.deleteMany({
        where: { id: { in: ids } }
      });
    }

    revalidatePath("/", "layout");
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur bulk." },
      { status: 500 }
    );
  }
}
