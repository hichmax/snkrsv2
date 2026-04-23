export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { ProductTile } from "@/components/site/product-tile";
import { getModelPage, getVisibleCatalog } from "@/lib/queries";

export default async function ModelPage({
  params
}: {
  params: Promise<{ categorySlug: string; brandSlug: string; modelSlug: string }>;
}) {
  const { categorySlug, brandSlug, modelSlug } = await params;
  const [model, catalog] = await Promise.all([
    getModelPage(categorySlug, brandSlug, modelSlug),
    getVisibleCatalog()
  ]);

  if (!model) {
    notFound();
  }

  const nav = catalog.slice(0, 4).map((item) => ({
    label: item.name,
    href: `/catalog/${item.slug}`
  }));

  return (
    <main>
      <SiteHeader nav={nav} />
      <section className="px-4 pb-12 pt-6 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04]">
          <div className="grid md:grid-cols-[1fr_1fr]">
            <div className="min-h-[360px]">
              <img
                src={
                  model.heroImage ||
                  model.products[0]?.imageUrl ||
                  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1400&q=80"
                }
                alt={model.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
                {model.brand.category.name} · {model.brand.name}
              </p>
              <h1 className="mt-3 text-5xl font-semibold">{model.name}</h1>
              <p className="mt-4 max-w-2xl text-white/60">
                {model.story || "Retrouvez toutes les photos disponibles pour ce modèle."}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/75">
                  {model.products.length} visuels disponibles
                </span>
                <span className="rounded-full bg-lime-300 px-3 py-2 text-sm font-semibold text-black">
                  {model.priceHint || "Prix sur demande"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
                galerie
              </p>
              <h2 className="mt-3 text-4xl font-semibold">Toutes les photos</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {model.products.map((product) => (
              <ProductTile
                key={product.id}
                product={{
                  id: product.id,
                  name: product.name,
                  color: product.color,
                  priceText: product.priceText,
                  imageUrl: product.imageUrl,
                  imageAlt: product.imageAlt,
                  modelName: model.name,
                  sizes: product.sizes
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
