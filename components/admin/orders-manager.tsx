"use client";

import { formatDate } from "@/lib/utils";

type Order = {
  id: string;
  customerName: string;
  phone?: string | null;
  snapchat?: string | null;
  city?: string | null;
  note?: string | null;
  status: "NEW" | "REVIEWING" | "CONTACTED" | "CLOSED";
  createdAt: string;
  items: Array<{
    id: string;
    modelName: string;
    productName: string;
    sizeLabel?: string | null;
    quantity: number;
    imageUrl?: string | null;
  }>;
};

const statuses = ["NEW", "REVIEWING", "CONTACTED", "CLOSED"];

export function OrdersManager({ orders }: { orders: Order[] }) {
  async function updateStatus(id: string, status: string) {
    const res = await fetch(`/api/admin/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status })
    });

    if (!res.ok) {
      alert("Impossible de mettre à jour le statut.");
      return;
    }

    window.location.reload();
  }

  return (
    <div className="grid gap-4">
      {orders.map((order) => (
        <article key={order.id} className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Commande · {formatDate(order.createdAt)}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{order.customerName}</h3>
              <div className="mt-3 grid gap-1 text-sm text-white/65">
                {order.phone ? <p>Téléphone : {order.phone}</p> : null}
                {order.snapchat ? <p>Snapchat / Insta : {order.snapchat}</p> : null}
                {order.city ? <p>Ville : {order.city}</p> : null}
                {order.note ? <p>Note : {order.note}</p> : null}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => updateStatus(order.id, status)}
                  className={`rounded-full px-4 py-2 text-sm ${
                    order.status === status
                      ? "bg-lime-300 font-semibold text-black"
                      : "border border-white/10 text-white/75"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {order.items.map((item) => (
              <div key={item.id} className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <div className="flex gap-3">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="h-20 w-20 rounded-2xl object-cover"
                    />
                  ) : null}
                  <div>
                    <p className="text-sm font-medium">{item.modelName}</p>
                    <p className="mt-1 text-xs text-white/45">
                      Taille : {item.sizeLabel || "à préciser"} · Qté : {item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
