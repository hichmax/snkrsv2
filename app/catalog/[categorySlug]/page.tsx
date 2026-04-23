export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { getCategoryPage, getVisibleCatalog } from "@/lib/queries";

export default async function CategoryPage({
  params
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const [category, catalog] = await Promise.all([
    getCategoryPage(categorySlug),
    getVisibleCatalog()
  ]);

  if (!category) {
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
        <div className="mx-auto max-w-7xl rounded-[40px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            catégorie
          </p>
          <h1 className="mt-3 text-5xl font-semibold">{category.name}</h1>
          <p className="mt-4 max-w-3xl text-white/60">
            {category.description || "Sélection structurée par marques, lecture éditoriale et photo-first."}
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {category.brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/catalog/${category.slug}/${brand.slug}`}
              className="group overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={
                    brand.imageUrl ||
                    category.heroImage ||
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80"
                  }
                  alt={brand.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                    {category.name}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold">{brand.name}</h2>
                  <p className="mt-2 text-sm text-white/60">
                    {brand.models.length} modèles visibles
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
