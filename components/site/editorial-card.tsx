"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ResilientImage } from "@/components/site/resilient-image";

export function EditorialCard({
  href,
  image,
  eyebrow,
  title,
  meta,
  index = 0,
  aspect = "portrait"
}: {
  href: string;
  image: string;
  eyebrow: string;
  title: string;
  meta: string;
  index?: number;
  aspect?: "portrait" | "landscape";
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.07, 0.28) }}
      whileHover={reducedMotion ? undefined : { y: -8 }}
      className="group"
    >
      <Link href={href} className="editorial-card">
        <div
          className={`relative overflow-hidden ${
            aspect === "portrait" ? "aspect-[4/5]" : "aspect-[16/11]"
          }`}
        >
          <ResilientImage
            src={image}
            alt={title}
            fill
            sizes={
              aspect === "portrait"
                ? "(max-width: 768px) 100vw, 33vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
          <div className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/15 bg-black/35 opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="eyebrow">{eyebrow}</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              {title}
            </h3>
            <p className="mt-2 text-sm text-white/55">{meta}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
