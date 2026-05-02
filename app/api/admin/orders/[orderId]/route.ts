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

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    await assertAdminApi();
    const { orderId } = await params;

    await prisma.orderRequest.delete({
      where: { id: orderId }
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur suppression commande." },
      { status: 500 }
    );
  }
}
