import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { assertAdminApi } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    await assertAdminApi();
    const body = await request.json();
    const { entity, action, data, id } = body;

    if (entity === "category" && action === "create") {
      await prisma.category.create({ data });
    }

    if (entity === "category" && action === "update" && id) {
      await prisma.category.update({ where: { id }, data });
    }

    if (entity === "brand" && action === "create") {
      await prisma.brand.create({ data });
    }

    if (entity === "brand" && action === "update" && id) {
      await prisma.brand.update({ where: { id }, data });
    }

    if (entity === "model" && action === "create") {
      await prisma.productModel.create({ data });
    }

    if (entity === "model" && action === "update" && id) {
      await prisma.productModel.update({ where: { id }, data });
    }

    if (entity === "category" && action === "toggle" && id) {
      const current = await prisma.category.findUnique({ where: { id } });
      if (current) {
        await prisma.category.update({
          where: { id },
          data: { isVisible: !current.isVisible }
        });
      }
    }

    if (entity === "brand" && action === "toggle" && id) {
      const current = await prisma.brand.findUnique({ where: { id } });
      if (current) {
        await prisma.brand.update({
          where: { id },
          data: { isVisible: !current.isVisible }
        });
      }
    }

    if (entity === "model" && action === "toggle" && id) {
      const current = await prisma.productModel.findUnique({ where: { id } });
      if (current) {
        await prisma.productModel.update({
          where: { id },
          data: { isVisible: !current.isVisible }
        });
      }
    }

    if (entity === "category" && action === "delete" && id) {
      await prisma.category.delete({ where: { id } });
    }

    if (entity === "brand" && action === "delete" && id) {
      await prisma.brand.delete({ where: { id } });
    }

    if (entity === "model" && action === "delete" && id) {
      await prisma.productModel.delete({ where: { id } });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur structure." },
      { status: 500 }
    );
  }
}
