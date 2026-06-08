import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/site/motion-reveal";
import { ResilientImage } from "@/components/site/resilient-image";

export function CatalogHero({
  eyebrow,
  title,
  description,
  image,
  backHref = "/",
  backLabel = "Accueil",
  stats = []
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  backHref?: string;
  backLabel?: string;
  stats?: Array<{ label: string; value: string | number }>;
}) {
  return (
    <section className="px-3 pb-10 pt-3 md:px-6">
      <div className="catalog-hero mx-auto max-w-[1500px]">
        <div className="relative z-10 flex min-h-[540px] flex-col justify-between p-6 md:p-10 lg:p-14">
          <Link href={backHref} className="hero-chip w-fit">
            <ArrowLeft className="h-3.5 w-3.5" />
            {backLabel}
          </Link>
          <MotionReveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="catalog-title mt-4">{title}</h1>
            <div className="mt-7 flex flex-col gap-6 border-t border-white/20 pt-5 md:flex-row md:items-end md:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-white/65 md:text-base">{description}</p>
              <div className="flex flex-wrap gap-2">
                {stats.map((stat) => (
                  <span key={stat.label} className="hero-chip">
                    <strong className="text-white">{stat.value}</strong>
                    {stat.label}
                  </span>
                ))}
                <a href="#collection" className="primary-pill">
                  Découvrir <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
        <ResilientImage
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.9),rgba(0,0,0,.35))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>
    </section>
  );
}
