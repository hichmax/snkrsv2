"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
  id: string;
  name: string;
  color?: string | null;
  priceText?: string | null;
  imageUrl: string;
  status: "DRAFT" | "PUBLISHED" | "HIDDEN";
  isFeatured: boolean;
  storageProvider: "CLOUDINARY" | "CLOUDFLARE_R2" | "SUPABASE" | "EXTERNAL";
  mediaBytes?: number | null;
  model: {
    name: string;
    slug: string;
    brand: {
      name: string;
      slug: string;
      category: {
        name: string;
        slug: string;
      };
    };
  };
  sizes: Array<{
    id: string;
    sizeLabel: string;
    isAvailable: boolean;
  }>;
};

export function ProductsManager({ products }: { products: Product[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);

  const filtered = useMemo(() => {
    const needle = query.toLowerCase();
    return products.filter((product) => {
      const hay = [
        product.name,
        product.model.name,
        product.model.brand.name,
        product.model.brand.category.name,
        product.storageProvider
      ]
        .join(" ")
        .toLowerCase();

      return hay.includes(needle);
    });
  }, [products, query]);

  useEffect(() => {
    setVisibleCount(24);
  }, [query]);

  const toggleOne = (id: string) => {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]
    );
  };

  async function bulk(action: string, ids = selectedIds) {
    if (!ids.length) return;
    setLoading(true);
    const res = await fetch("/api/admin/products/bulk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ action, ids })
    });
    setLoading(false);

    if (!res.ok) {
      alert("Action bulk impossible.");
      return;
    }

    setSelectedIds([]);
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher marque / modèle..."
            className="w-full max-w-xl rounded-full border border-white/10 bg-black/40 px-5 py-3 outline-none"
          />
          <div className="flex flex-wrap gap-2">
            <button
              disabled={loading}
              onClick={() => bulk("publish")}
              className="rounded-full border border-white/10 px-4 py-3 text-sm"
            >
              Publier
            </button>
            <button
              disabled={loading}
              onClick={() => bulk("hide")}
              className="rounded-full border border-white/10 px-4 py-3 text-sm"
            >
              Masquer
            </button>
            <button
              disabled={loading}
              onClick={() => bulk("feature")}
              className="rounded-full border border-white/10 px-4 py-3 text-sm"
            >
              Feature
            </button>
            <button
              disabled={loading}
              onClick={() => bulk("delete")}
              className="rounded-full border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-100"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {filtered.slice(0, visibleCount).map((product) => (
          <div key={product.id} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4">
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src={product.imageUrl}
                alt=""
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <label className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs backdrop-blur-md">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(product.id)}
                  onChange={() => toggleOne(product.id)}
                />
                Select
              </label>
            </div>
            <div className="mt-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                {product.model.brand.category.name} · {product.model.brand.name}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{product.model.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                  {product.priceText || "Prix sur demande"}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                  {product.status}
                </span>
                <span className="rounded-full border border-sky-300/15 bg-sky-300/[0.06] px-3 py-1 text-xs text-sky-100/80">
                  {product.storageProvider.replace("CLOUDFLARE_", "")}
                </span>
                {product.isFeatured ? (
                  <span className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-black">
                    Featured
                  </span>
                ) : null}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size.id}
                    className={`rounded-full px-3 py-1 text-xs ${
                      size.isAvailable
                        ? "border border-white/10 bg-white/[0.06] text-white/70"
                        : "border border-white/5 bg-white/[0.03] text-white/25"
                    }`}
                  >
                    {size.sizeLabel}
                  </span>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  onClick={() =>
                    bulk(product.status === "PUBLISHED" ? "hide" : "publish", [product.id])
                  }
                  className="rounded-full border border-white/10 px-3 py-2 text-sm"
                >
                  {product.status === "PUBLISHED" ? "Masquer" : "Publier"}
                </button>
                <button
                  onClick={() => bulk(product.isFeatured ? "unfeature" : "feature", [product.id])}
                  className="rounded-full border border-white/10 px-3 py-2 text-sm"
                >
                  {product.isFeatured ? "Retirer feature" : "Mettre feature"}
                </button>
                <button
                  onClick={() => bulk("delete", [product.id])}
                  className="col-span-2 rounded-full border border-red-400/20 bg-red-400/10 px-3 py-2 text-sm text-red-100"
                >
                  Supprimer ce produit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < filtered.length ? (
        <button
          onClick={() => setVisibleCount((count) => count + 24)}
          className="admin-secondary-button mx-auto"
        >
          Afficher 24 produits de plus
        </button>
      ) : null}
    </div>
  );
}
