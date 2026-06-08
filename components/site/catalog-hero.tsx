import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/site/motion-reveal";
import { ResilientImage } from "@/components/site/resilient-image";
import { AutoFitText } from "@/components/site/auto-fit-text";

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
            <AutoFitText as="h1" className="catalog-title mt-4" maxLines={3} minFontSize={38}>
              {title}
            </AutoFitText>
            <div className="catalog-hero-panel mt-7 flex flex-col gap-6 pt-5 md:flex-row md:items-end md:justify-between">
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
          className="scale-[1.08] object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,12,.94),rgba(13,22,46,.34))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03050a]/80 via-transparent to-[#24365b]/15" />
      </div>
    </section>
  );
}
