import { notFound } from "next/navigation";
import { CatalogHero } from "@/components/site/catalog-hero";
import { EditorialCard } from "@/components/site/editorial-card";
import { MotionReveal } from "@/components/site/motion-reveal";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getBrandPage, getCatalogStaticParams, getPublicNav } from "@/lib/queries";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const categories = await getCatalogStaticParams();
  return categories.flatMap((category) =>
    category.brands.map((brand) => ({
      categorySlug: category.slug,
      brandSlug: brand.slug
    }))
  );
}

const fallback =
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1800&q=85";

export default async function BrandPage({
  params
}: {
  params: Promise<{ categorySlug: string; brandSlug: string }>;
}) {
  const { categorySlug, brandSlug } = await params;
  const [brand, catalog] = await Promise.all([
    getBrandPage(categorySlug, brandSlug),
    getPublicNav()
  ]);

  if (!brand) notFound();

  const nav = catalog.map((item) => ({
    label: item.name,
    href: `/catalog/${item.slug}`
  }));
  const productCount = brand.models.reduce((sum, model) => sum + model._count.products, 0);

  return (
    <main>
      <SiteHeader nav={nav} />
      <CatalogHero
        eyebrow={`${brand.category.name} / label`}
        title={brand.name}
        description={
          brand.description ||
          "Des silhouettes fortes, classées par modèle pour aller droit à la bonne pièce."
        }
        image={brand.imageUrl || brand.category.heroImage || fallback}
        backHref={`/catalog/${brand.category.slug}`}
        backLabel={brand.category.name}
        stats={[
          { label: "modèles", value: brand.models.length },
          { label: "pièces", value: productCount }
        ]}
      />

      <section id="collection" className="section-shell">
        <div className="section-heading">
          <MotionReveal>
            <p className="eyebrow">Choose the silhouette</p>
            <h2 className="section-title">Les modèles.</h2>
          </MotionReveal>
          <MotionReveal delay={0.1} className="max-w-sm text-sm leading-6 text-white/45">
            Chaque modèle ouvre une galerie complète de visuels, tailles et disponibilités.
          </MotionReveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {brand.models.map((model, index) => (
            <EditorialCard
              key={model.id}
              href={`/catalog/${brand.category.slug}/${brand.slug}/${model.slug}`}
              image={model.heroImage || model.products[0]?.imageUrl || brand.imageUrl || fallback}
              eyebrow={brand.name}
              title={model.name}
              meta={`${model._count.products} visuels disponibles`}
              index={index}
            />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
