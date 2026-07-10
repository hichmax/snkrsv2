"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, CircleDot, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LiquidGlassBackground } from "@/components/site/liquid-glass-background";
import { SplineSneakerHero } from "@/components/site/spline-sneaker-hero";
import { TiltCard } from "@/components/site/tilt-card";

export type LiquidHomeCategory = {
  id: string;
  name: string;
  slug: string;
  accent: string | null;
  heroImage: string | null;
  brandCount: number;
  modelCount: number;
};

export function LiquidSneakersHome({
  categories,
  productCount,
  dateLabel
}: {
  categories: LiquidHomeCategory[];
  productCount: number;
  dateLabel: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [compactMotion, setCompactMotion] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setCompactMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const shoeX = useTransform(scrollYProgress, [0, 0.72], compactMotion ? ["0vw", "0vw"] : ["0vw", "28vw"]);
  const shoeY = useTransform(scrollYProgress, [0, 0.72], compactMotion ? ["0vh", "-12vh"] : ["0vh", "-2vh"]);
  const shoeScale = useTransform(scrollYProgress, [0, 0.72], compactMotion ? [0.98, 0.72] : [1.06, 0.86]);
  const shoeRotate = useTransform(scrollYProgress, [0, 0.72], compactMotion ? [0, -4] : [0, -10]);
  const panelOpacity = useTransform(scrollYProgress, compactMotion ? [0.28, 0.48] : [0.22, 0.5], [0, 1]);
  const panelX = useTransform(scrollYProgress, compactMotion ? [0.28, 0.54] : [0.22, 0.58], compactMotion ? [0, 0] : [-56, 0]);
  const panelBlur = useTransform(scrollYProgress, compactMotion ? [0.28, 0.54] : [0.22, 0.58], ["blur(18px)", "blur(0px)"]);
  const brandOpacity = useTransform(scrollYProgress, [0, 0.62], [1, 0.2]);
  const brandY = useTransform(scrollYProgress, [0, 0.62], [0, 34]);
  const backgroundBoost = useTransform(scrollYProgress, [0, 0.75], [0.95, 1.14]);

  return (
    <section ref={sectionRef} className="liquid-home-scroll" id="top">
      <div className="liquid-home-sticky">
        <motion.div
          className="absolute inset-0"
          style={reducedMotion ? undefined : { scale: backgroundBoost }}
        >
          <LiquidGlassBackground />
        </motion.div>

        <div className="liquid-home-topline">
          <div className="liquid-home-chip">
            <Sparkles className="h-3.5 w-3.5" />
            Private sneakers catalogue
          </div>
          <a href="#catalogue" className="liquid-home-chip liquid-home-chip-soft">
            Scroll to unlock
            <ArrowDownRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="liquid-home-shoe">
          <motion.div
            className="liquid-home-shoe-motion"
            style={
              reducedMotion
                ? undefined
                : { x: shoeX, y: shoeY, scale: shoeScale, rotateZ: shoeRotate }
            }
          >
            <SplineSneakerHero />
          </motion.div>
        </div>

        <motion.div
          className="liquid-home-brand"
          style={reducedMotion ? undefined : { opacity: brandOpacity, y: brandY }}
        >
          <p className="liquid-home-date">{dateLabel}</p>
          <h1>
            <span>SNEAKERS</span>
            <span>ADDICT</span>
          </h1>
        </motion.div>

        <motion.aside
          className="liquid-home-category-panel"
          style={
            reducedMotion
              ? undefined
              : { opacity: panelOpacity, x: panelX, filter: panelBlur }
          }
        >
          <div className="liquid-home-panel-head">
            <p className="eyebrow">Catalogue access</p>
            <h2>Choisis ton univers.</h2>
            <p>
              Navigation directe vers les vraies catégories. Chaque carte garde le style
              liquid-glass, sans ralentir le parcours.
            </p>
          </div>

          <div className="liquid-home-category-list">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.48, delay: Math.min(index * 0.06, 0.3) }}
              >
                <Link
                  href={`/catalog/${category.slug}`}
                  className="liquid-home-category-link block"
                  data-transition-source
                >
                  <TiltCard intensity={6} lift={-5} scale={1.012}>
                    <div className="liquid-home-category-card">
                      <span className="liquid-home-category-index">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span className="liquid-home-category-name">{category.name}</span>
                        <span className="liquid-home-category-meta">
                          {category.brandCount} marques · {category.modelCount} modèles
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.aside>

        <div className="liquid-home-metrics">
          <span>
            <CircleDot className="h-3.5 w-3.5" />
            {categories.length.toString().padStart(2, "0")} univers
          </span>
          <span>{productCount.toString().padStart(2, "0")} pièces</span>
          <span>SNKRSADDCT</span>
        </div>
      </div>
    </section>
  );
}
