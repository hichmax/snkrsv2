"use client";

import { useEffect, useState } from "react";
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

type ImagePreview = {
  src: string;
  title: string;
};

const statuses = ["NEW", "REVIEWING", "CONTACTED", "CLOSED"];

export function OrdersManager({ orders }: { orders: Order[] }) {
  const [preview, setPreview] = useState<ImagePreview | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPreview(null);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

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

  async function deleteOrder(id: string) {
    const confirmed = window.confirm(
      "Supprimer cette commande ? Cette action est définitive."
    );

    if (!confirmed) return;

    setDeletingId(id);

    const res = await fetch(`/api/admin/orders/${id}`, {
      method: "DELETE"
    });

    setDeletingId(null);

    if (!res.ok) {
      alert("Impossible de supprimer la commande.");
      return;
    }

    window.location.reload();
  }

  return (
    <>
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

              <div className="flex flex-col gap-3 sm:items-end">
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

                <button
                  onClick={() => deleteOrder(order.id)}
                  disabled={deletingId === order.id}
                  className="w-fit rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-200 transition hover:bg-red-500/20 disabled:opacity-50"
                >
                  {deletingId === order.id ? "Suppression..." : "Supprimer la commande"}
                </button>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {order.items.map((item) => (
                <div key={item.id} className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                  <div className="flex gap-3">
                    {item.imageUrl ? (
                      <button
                        type="button"
                        onClick={() =>
                          setPreview({
                            src: item.imageUrl as string,
                            title: item.modelName
                          })
                        }
                        className="group shrink-0 overflow-hidden rounded-2xl outline-none ring-0 transition focus-visible:ring-2 focus-visible:ring-lime-300"
                        aria-label={`Agrandir l'image ${item.modelName}`}
                      >
                        <img
                          src={item.imageUrl}
                          alt=""
                          className="h-20 w-20 object-cover transition duration-300 group-hover:scale-105"
                        />
                      </button>
                    ) : null}
                    <div>
                      <p className="text-sm font-medium">{item.modelName}</p>
                      <p className="mt-1 text-xs text-white/45">
                        Taille : {item.sizeLabel || "à préciser"} · Qté : {item.quantity}
                      </p>
                      {item.imageUrl ? (
                        <p className="mt-2 text-[11px] text-white/35">
                          Clique sur l’image pour l’agrandir
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      {preview ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setPreview(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/70 text-2xl leading-none text-white backdrop-blur transition hover:bg-white hover:text-black"
              aria-label="Fermer l'image"
            >
              ×
            </button>

            <img
              src={preview.src}
              alt={preview.title}
              className="max-h-[92vh] w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
