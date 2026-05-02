import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { emailClient } from "@/lib/email";

function cleanName(value: unknown) {
  const raw = typeof value === "string" ? value.trim() : "";
  if (!raw) return "";

  return decodeURIComponent(raw)
    .split("/")
    .pop()!
    .split("?")[0]
    .replace(/\.[a-zA-Z0-9]+$/, "")
    .trim();
}

function getAdminImageName(input: {
  modelName: string;
  productName?: string | null;
  productDbName?: string | null;
  cloudinaryPublicId?: string | null;
  imageUrl?: string | null;
}) {
  const modelName = cleanName(input.modelName).toLowerCase();
  const candidates = [
    cleanName(input.productDbName),
    cleanName(input.cloudinaryPublicId),
    cleanName(input.productName),
    cleanName(input.imageUrl)
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;
    const normalized = candidate.toLowerCase();
    if (normalized === modelName) continue;
    if (normalized === "variation" || normalized === "variation photo") continue;
    return candidate;
  }

  return cleanName(input.productName) || "Nom image non récupéré";
}

async function sendOrderNotificationEmail(order: {
  id: string;
  customerName: string;
  phone?: string | null;
  snapchat?: string | null;
  city?: string | null;
  note?: string | null;
  items: Array<{
    modelName: string;
    sizeLabel?: string | null;
    quantity: number;
  }>;
}) {
  if (!emailClient || !process.env.ORDER_NOTIFICATION_EMAIL) return;

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6">
      <h2>Nouvelle commande #${order.id}</h2>
      <p><strong>Client :</strong> ${order.customerName}</p>
      <p><strong>Téléphone :</strong> ${order.phone || "-"}</p>
      <p><strong>Snapchat / Insta :</strong> ${order.snapchat || "-"}</p>
      <p><strong>Ville :</strong> ${order.city || "-"}</p>
      <p><strong>Note :</strong> ${order.note || "-"}</p>
      <hr />
      <h3>Articles</h3>
      <ul>
        ${order.items
          .map(
            (item) =>
              `<li>${item.modelName} — Taille : ${item.sizeLabel || "-"} — Qté : ${item.quantity}</li>`
          )
          .join("")}
      </ul>
    </div>
  `;

  await emailClient.emails.send({
    from: process.env.ORDER_FROM_EMAIL || "SNKRS <onboarding@resend.dev>",
    to: [process.env.ORDER_NOTIFICATION_EMAIL],
    subject: `Nouvelle commande #${order.id}`,
    html
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const customerName = String(body.customerName || "");
    const items = Array.isArray(body.items) ? body.items : [];

    if (!customerName.trim() || !items.length) {
      return NextResponse.json({ error: "Nom et panier requis." }, { status: 400 });
    }

    const productIds = items
      .map((item: any) => (typeof item.productId === "string" ? item.productId : ""))
      .filter(Boolean);

    const products = productIds.length
      ? await prisma.product.findMany({
          where: { id: { in: productIds } },
          select: {
            id: true,
            name: true,
            cloudinaryPublicId: true,
            imageUrl: true
          }
        })
      : [];

    const productById = new Map(products.map((product) => [product.id, product]));

    const createdOrder = await prisma.orderRequest.create({
      data: {
        customerName,
        phone: body.phone || null,
        snapchat: body.snapchat || null,
        city: body.city || null,
        note: body.note || null,
        items: {
          create: items.map((item: any) => {
            const product = item.productId ? productById.get(item.productId) : null;
            const modelName = item.modelName || "Modèle";

            return {
              productId: item.productId || null,
              modelName,
              productName: getAdminImageName({
                modelName,
                productName: item.productName,
                productDbName: product?.name,
                cloudinaryPublicId: product?.cloudinaryPublicId,
                imageUrl: product?.imageUrl || item.imageUrl
              }),
              sizeLabel: item.sizeLabel || null,
              quantity: Number(item.quantity || 1),
              imageUrl: item.imageUrl || product?.imageUrl || null
            };
          })
        }
      },
      include: {
        items: true
      }
    });

    try {
      await sendOrderNotificationEmail({
        id: createdOrder.id,
        customerName: createdOrder.customerName,
        phone: createdOrder.phone,
        snapchat: createdOrder.snapchat,
        city: createdOrder.city,
        note: createdOrder.note,
        items: createdOrder.items.map((item) => ({
          modelName: item.modelName,
          sizeLabel: item.sizeLabel,
          quantity: item.quantity
        }))
      });
    } catch (emailError) {
      console.error("Email order notification failed", emailError);
    }

    return NextResponse.json({ ok: true, orderId: createdOrder.id });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur panier." },
      { status: 500 }
    );
  }
}
