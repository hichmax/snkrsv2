import Link from "next/link";
import { ArrowUpRight, MoveRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { EditorialCard } from "@/components/site/editorial-card";
import { HomeHero } from "@/components/site/home-hero";
import { Marquee } from "@/components/site/marquee";
import { MotionReveal } from "@/components/site/motion-reveal";
import { ProductGallery } from "@/components/site/product-gallery";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
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
      <HomeHero
        image={featured[0]?.imageUrl || categories[0]?.heroImage || fallback}
        categoryCount={categories.length}
        productCount={productCount}
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

      <section className="px-3 py-10 md:px-6 md:py-20">
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
                  Le catalogue change, l'attitude reste.
                </p>
                <Link href="#nouveautes" className="dark-pill">
                  Voir le dernier drop <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </section>

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

      <section className="section-shell !pb-24">
        <div className="grid gap-px overflow-hidden rounded-[30px] border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Navigation instantanée",
              text: "Pages mises en cache, préchargement intelligent et visuels optimisés."
            },
            {
              icon: Sparkles,
              title: "Sélection vivante",
              text: "Des nouveautés et pièces fortes ajoutées directement depuis notre studio."
            },
            {
              icon: ShieldCheck,
              title: "Commande humaine",
              text: "Envoyez votre sélection, puis recevez disponibilité et livraison."
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionReveal key={item.title} delay={index * 0.08} className="h-full">
                <div className="h-full bg-[#0a0a0a] p-6 md:p-8">
                  <Icon className="h-5 w-5 text-[var(--electric)]" />
                  <h3 className="mt-10 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/45">{item.text}</p>
                  <MoveRight className="mt-8 h-5 w-5 text-white/30" />
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
