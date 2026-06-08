"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content/site-content";
import { ResilientImage } from "@/components/site/resilient-image";

export function HomeHero({
  image,
  productCount,
  categoryCount
}: {
  image: string;
  productCount: number;
  categoryCount: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative px-3 pb-8 pt-3 md:px-6 md:pt-5">
      <div className="hero-shell mx-auto max-w-[1500px]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 1.025 }}
          animate={reducedMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <ResilientImage
            src={image}
            alt="Sélection Sneakers Addict"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.9)_0%,rgba(0,0,0,.56)_48%,rgba(0,0,0,.15)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.75)_0%,transparent_55%)]" />
        </motion.div>

        <div className="relative z-10 flex min-h-[calc(100svh-110px)] flex-col justify-between p-5 md:p-10 lg:p-14">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex items-center justify-between gap-4"
          >
            <div className="hero-chip">
              <Sparkles className="h-3.5 w-3.5 text-lime-300" />
              {siteContent.home.badge}
            </div>
            <a href="#catalogue" className="hero-chip hidden sm:flex">
              Scroll to discover
              <ArrowDownRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <div className="max-w-6xl">
            <div className="overflow-hidden">
              <motion.p
                initial={reducedMotion ? false : { y: "110%" }}
                animate={reducedMotion ? {} : { y: 0 }}
                transition={{ delay: 0.22, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-5 text-xs uppercase tracking-[0.35em] text-white/55"
              >
                Curated streetwear · France
              </motion.p>
            </div>
            <h1 className="hero-title">
              {["THE", "NEXT", "OBSESSION"].map((line, index) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className={`block ${index === 1 ? "text-lime-300" : ""}`}
                    initial={reducedMotion ? false : { y: "110%" }}
                    animate={reducedMotion ? {} : { y: 0 }}
                    transition={{
                      delay: 0.28 + index * 0.08,
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.7 }}
              className="mt-7 flex flex-col gap-5 border-t border-white/20 pt-5 md:flex-row md:items-end md:justify-between"
            >
              <p className="max-w-xl text-sm leading-6 text-white/65 md:text-base">
                Sneakers, vêtements et pièces fortes sélectionnés pour sortir du lot.
                Explorez, choisissez votre taille et envoyez votre demande en quelques secondes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#catalogue" className="primary-pill">
                  Explorer le drop
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="#nouveautes" className="secondary-pill">
                  Nouveautés
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={reducedMotion ? {} : { opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute bottom-5 right-5 hidden gap-2 lg:flex"
          >
            <div className="hero-stat">
              <span>{categoryCount.toString().padStart(2, "0")}</span>
              <small>univers</small>
            </div>
            <div className="hero-stat">
              <span>{productCount.toString().padStart(2, "0")}</span>
              <small>pièces</small>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
