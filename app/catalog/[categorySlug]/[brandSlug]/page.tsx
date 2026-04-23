export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { getBrandPage, getVisibleCatalog } from "@/lib/queries";

export default async function BrandPage({
  params
}: {
  params: Promise<{ categorySlug: string; brandSlug: string }>;
}) {
  const { categorySlug, brandSlug } = await params;
  const [brand, catalog] = await Promise.all([
    getBrandPage(categorySlug, brandSlug),
    getVisibleCatalog()
  ]);

  if (!brand) {
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
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
                {brand.category.name}
              </p>
              <h1 className="mt-3 text-5xl font-semibold">{brand.name}</h1>
              <p className="mt-4 max-w-2xl text-white/60">
                {brand.description || "Sélection brandée, lecture mode, visuels assumés et tri par modèle."}
              </p>
            </div>
            <div className="min-h-[320px]">
              <img
                src={
                  brand.imageUrl ||
                  brand.category.heroImage ||
                  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1400&q=80"
                }
                alt={brand.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {brand.models.map((model) => (
            <Link
              key={model.id}
              href={`/catalog/${brand.category.slug}/${brand.slug}/${model.slug}`}
              className="group overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={
                    model.heroImage ||
                    model.products[0]?.imageUrl ||
                    brand.imageUrl ||
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1400&q=80"
                  }
                  alt={model.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                    {brand.name}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold">{model.name}</h2>
                  <p className="mt-2 text-sm text-white/60">
                    {model._count.products} visuels
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
