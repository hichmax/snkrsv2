import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EditorialCard } from "@/components/site/editorial-card";
import { Marquee } from "@/components/site/marquee";
import { MotionReveal } from "@/components/site/motion-reveal";
import { ProductGallery } from "@/components/site/product-gallery";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { VideoHomeHero } from "@/components/site/video-home-hero";
import { getHomeData } from "@/lib/queries";

export const revalidate = 300;

const fallback =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=85";

export default async function HomePage() {
  const { categories, featured, productCount } = await getHomeData();
  const nav = categories.slice(0, 5).map((category) => ({
    label: category.name,
    href: `/catalog/${category.slug}`
  }));

  return (
    <main>
      <SiteHeader nav={nav} />
      <VideoHomeHero
        productCount={productCount}
        categoryCount={categories.length}
      />

      <Marquee />

      <section id="catalogue" className="section-shell">
        <div className="section-heading">
          <MotionReveal>
            <p className="eyebrow">Shop by universe</p>
            <h2 className="section-title">
              Trouvez votre
              <br />
              <span className="liquid-gradient-text">prochaine pièce.</span>
            </h2>
          </MotionReveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <EditorialCard
              key={category.id}
              href={`/catalog/${category.slug}`}
              image={category.heroImage || fallback}
              eyebrow={category.accent || "Collection"}
              title={category.name}
              meta={`${category.brands.length} marques à découvrir`}
              index={index}
            />
          ))}
        </div>
      </section>

      {false ? (
        <section className="hidden">
          <MotionReveal className="mx-auto max-w-[1500px]">
          <div className="statement-panel">
            <div className="statement-orbit" />
            <div className="relative z-10">
              <p className="eyebrow">Sneakers Addict manifesto</p>
              <h2 className="statement-title">
                PAS BESOIN DE
                <br />
                <span>SE FONDRE</span> DANS
                <br />
                LA MASSE.
              </h2>
              <div className="mt-8 flex flex-col gap-5 border-t border-white/15 pt-5 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-sm leading-6 text-white/55">
                  Des pièces fortes, des visuels nets et une commande sans friction.
                  Le catalogue change, l&apos;attitude reste.
                </p>
                <Link href="#nouveautes" className="dark-pill">
                  Voir le dernier drop <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          </MotionReveal>
        </section>
      ) : null}

      <section id="nouveautes" className="section-shell">
        <div className="section-heading">
          <MotionReveal>
            <p className="eyebrow">Fresh arrivals</p>
            <h2 className="section-title">
              Le drop
              <br />
              <span className="liquid-gradient-text">du moment.</span>
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="flex items-center gap-3 text-sm text-white/45">
              <span className="status-dot" />
              Catalogue mis à jour régulièrement
            </div>
          </MotionReveal>
        </div>

        <div className="mt-8 md:mt-10">
          <ProductGallery
            desktopColumns={4}
            products={featured.map((product) => ({
              id: product.id,
              name: product.name,
              color: product.color,
              priceText: product.priceText,
              imageUrl: product.imageUrl,
              imageAlt: product.imageAlt,
              modelName: product.model.name,
              sizes: product.sizes
            }))}
          />
        </div>
      </section>

      <section className="px-3 pb-10 pt-0 md:px-6 md:pb-20">
        <MotionReveal className="mx-auto max-w-[1500px]">
          <div className="statement-panel">
            <div className="statement-orbit" />
            <div className="relative z-10">
              <p className="eyebrow">Sneakers Addict manifesto</p>
              <h2 className="statement-title">
                PAS BESOIN DE
                <br />
                <span>SE FONDRE</span> DANS
                <br />
                LA MASSE.
              </h2>
              <div className="mt-8 flex flex-col gap-5 border-t border-white/15 pt-5 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-sm leading-6 text-white/55">
                  Des pieces fortes, des visuels nets et une commande sans friction.
                  Le catalogue change, l&apos;attitude reste.
                </p>
                <Link href="#catalogue" className="dark-pill">
                  Revenir au catalogue <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </section>

      <SiteFooter />
    </main>
  );
}
