"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ResilientImage } from "@/components/site/resilient-image";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false
});

export const HERO_SPLINE_SCENE =
  "https://prod.spline.design/J4FvIupVaA8W0mzd/scene.splinecode";

export function HeroSplineScene({ fallbackImage }: { fallbackImage: string }) {
  const reducedMotion = useReducedMotion();
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const delay = window.matchMedia("(max-width: 767px)").matches ? 650 : 120;
    const timer = window.setTimeout(() => setShouldLoad(true), delay);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="sa-hero-spline-stage absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="sa-hero-spline-fallback absolute inset-0"
        animate={{ opacity: isReady ? 0.18 : 1, scale: isReady ? 1.02 : 1.06 }}
        transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <ResilientImage
          src={fallbackImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {shouldLoad ? (
        <div className="sa-hero-spline-crop absolute">
          <motion.div
            className="sa-hero-spline-canvas absolute inset-0"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: isReady ? 1 : 0, scale: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Spline
              scene={HERO_SPLINE_SCENE}
              renderOnDemand
              onLoad={() => setIsReady(true)}
            />
          </motion.div>
        </div>
      ) : null}

      <div className="sa-hero-spline-vignette absolute inset-0 z-[2]" />
    </div>
  );
}
