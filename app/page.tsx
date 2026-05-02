export const dynamic = "force-dynamic";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { getHomeData } from "@/lib/queries";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Marquee } from "@/components/site/marquee";
import { siteContent } from "@/content/site-content";

export default async function HomePage() {

  const { categories, featured } = await getHomeData();

  const nav = categories.slice(0, 4).map((category) => ({
    label: category.name,
    href: `/catalog/${category.slug}`
  }));


  return (
    <main>
      <SiteHeader nav={nav} />

      <section className="px-4 pb-12 pt-6 md:px-8">
        <div className="streetwear-grid shimmer-border mx-auto grid max-w-7xl gap-6 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[1.15fr_0.85fr] md:p-10">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/65 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-lime-300" />
              {siteContent.home.badge}
            </div>
            <h1 className="display-font mt-6 max-w-4xl text-5xl font-semibold leading-none tracking-tight md:text-7xl">
              {siteContent.home.titleLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < siteContent.home.titleLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/62 md:text-lg">
              {siteContent.home.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalogue"
                className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 font-semibold text-black"
              >
                {siteContent.home.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#nouveautes"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-white"
              >
                {siteContent.home.secondaryCta}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/35">
            <img
              src={
                featured[0]?.imageUrl ||
                "https://i.imgur.com/JWFWh03.jpeg"
              }
              alt="Sélection mise en avant"
              className="aspect-[4/5] h-full w-full object-cover md:aspect-auto"
            />
          </div>
        </div>
      </section>

      <Marquee />

      <section id="catalogue" className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
                {siteContent.home.categoriesEyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-semibold">{siteContent.home.categoriesTitle}</h2>
            </div>
            {categories[0] ? (
              <Link href={`/catalog/${categories[0].slug}`} className="text-sm text-white/60">
                {siteContent.home.categoriesManageLabel} →
              </Link>
            ) : null}
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/catalog/${category.slug}`}
                className="group overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={
                      category.heroImage ||
                      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80"
                    }
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                      {category.accent || "Collection"}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold">{category.name}</h3>
                    <p className="mt-2 text-sm text-white/60">
                      {category.brands.length} marques visibles
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="nouveautes" className="px-4 pb-16 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
                {siteContent.home.featuredEyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-semibold">{siteContent.home.featuredTitle}</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((product) => (
              <Link
                key={product.id}
                href={`/catalog/${product.model.brand.category.slug}/${product.model.brand.slug}/${product.model.slug}`}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-black/25"
              >
                <img src={product.imageUrl} alt="" className="aspect-[4/5] w-full object-cover" />
                <div className="p-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                    {product.model.brand.name}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{product.model.name}</h3>
                  <p className="mt-3 text-sm text-lime-300">{product.priceText || "Prix sur demande"}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
