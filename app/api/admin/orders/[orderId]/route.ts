import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { assertAdminApi } from "@/lib/auth";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    await assertAdminApi();
    const { orderId } = await params;
    const body = await request.json();
    const status = String(body.status || "NEW");

    await prisma.orderRequest.update({
      where: { id: orderId },
      data: { status: status as any }
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur commande." },
      { status: 500 }
    );
  }
}
