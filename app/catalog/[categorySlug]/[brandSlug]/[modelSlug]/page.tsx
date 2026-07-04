import { notFound } from "next/navigation";
import { CatalogHero } from "@/components/site/catalog-hero";
import { MotionReveal } from "@/components/site/motion-reveal";
import { ProductGallery } from "@/components/site/product-gallery";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getCatalogStaticParams, getModelPage, getPublicNav } from "@/lib/queries";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const categories = await getCatalogStaticParams();
  return categories.flatMap((category) =>
    category.brands.flatMap((brand) =>
      brand.models.map((model) => ({
        categorySlug: category.slug,
        brandSlug: brand.slug,
        modelSlug: model.slug
      }))
    )
  );
}

const fallback =
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1800&q=85";

export default async function ModelPage({
  params
}: {
  params: Promise<{ categorySlug: string; brandSlug: string; modelSlug: string }>;
}) {
  const { categorySlug, brandSlug, modelSlug } = await params;
  const [model, catalog] = await Promise.all([
    getModelPage(categorySlug, brandSlug, modelSlug),
    getPublicNav()
  ]);

  if (!model) notFound();

  const nav = catalog.map((item) => ({
    label: item.name,
    href: `/catalog/${item.slug}`
  }));

  return (
    <main>
      <SiteHeader nav={nav} />
      <CatalogHero
        eyebrow={`${model.brand.category.name} / ${model.brand.name}`}
        title={model.name}
        description={
          model.story ||
          "Toutes les variations disponibles pour ce modèle, présentées en galerie."
        }
        image={model.heroImage || model.products[0]?.imageUrl || fallback}
        backHref={`/catalog/${model.brand.category.slug}/${model.brand.slug}`}
        backLabel={model.brand.name}
        stats={[
          { label: "variations", value: model.products.length },
          { label: "", value: model.priceHint || "Prix sur demande" }
        ]}
      />

      <section id="collection" className="section-shell">
        <div className="section-heading">
          <MotionReveal>
            <p className="eyebrow">Select your pair</p>
            <h2 className="section-title">Toutes les variations.</h2>
          </MotionReveal>
          <MotionReveal delay={0.1} className="max-w-sm text-sm leading-6 text-white/45">
            Survolez une pièce pour choisir votre taille, puis ajoutez-la à votre demande.
          </MotionReveal>
        </div>
        <div className="mt-8 md:mt-10">
          <ProductGallery
            mode="modal"
            products={model.products.map((product) => ({
              id: product.id,
              name: product.name,
              color: product.color,
              priceText: product.priceText,
              imageUrl: product.imageUrl,
              imageAlt: product.imageAlt,
              modelName: model.name,
              sizes: product.sizes
            }))}
          />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
