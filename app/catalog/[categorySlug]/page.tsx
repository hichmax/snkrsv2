import { notFound } from "next/navigation";
import { CatalogHero } from "@/components/site/catalog-hero";
import { EditorialCard } from "@/components/site/editorial-card";
import { MotionReveal } from "@/components/site/motion-reveal";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getCatalogStaticParams, getCategoryPage, getPublicNav } from "@/lib/queries";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const categories = await getCatalogStaticParams();
  return categories.map((category) => ({ categorySlug: category.slug }));
}

const fallback =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=85";

export default async function CategoryPage({
  params
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const [category, catalog] = await Promise.all([
    getCategoryPage(categorySlug),
    getPublicNav()
  ]);

  if (!category) notFound();

  const nav = catalog.map((item) => ({
    label: item.name,
    href: `/catalog/${item.slug}`
  }));
  const productCount = category.brands.reduce(
    (sum, brand) =>
      sum + brand.models.reduce((modelSum, model) => modelSum + model._count.products, 0),
    0
  );

  return (
    <main>
      <SiteHeader nav={nav} />
      <CatalogHero
        eyebrow="Collection / 01"
        title={category.name}
        description={
          category.description ||
          "Une sélection structurée par marques, pensée comme un lookbook rapide à explorer."
        }
        image={category.heroImage || fallback}
        stats={[
          { label: "marques", value: category.brands.length },
          { label: "pièces", value: productCount }
        ]}
      />

      <section id="collection" className="section-shell">
        <div className="section-heading">
          <MotionReveal>
            <p className="eyebrow">Select your label</p>
            <h2 className="section-title">Les marques.</h2>
          </MotionReveal>
          <MotionReveal delay={0.1} className="max-w-sm text-sm leading-6 text-white/45">
            Entrez dans un univers, choisissez un modèle, puis parcourez toutes ses variations.
          </MotionReveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {category.brands.map((brand, index) => (
            <EditorialCard
              key={brand.id}
              href={`/catalog/${category.slug}/${brand.slug}`}
              image={brand.imageUrl || category.heroImage || fallback}
              eyebrow={category.name}
              title={brand.name}
              meta={`${brand.models.length} modèles visibles`}
              index={index}
            />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
