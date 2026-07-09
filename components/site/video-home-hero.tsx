"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Copy, Grid2X2, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { playSnapCopyClick } from "@/components/site/snap-click-sound";

const HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";

export function VideoHomeHero({
  productCount,
  categoryCount
}: {
  productCount: number;
  categoryCount: number;
}) {
  const reducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  async function copySnap() {
    void playSnapCopyClick();
    await navigator.clipboard?.writeText("snkrsaddct");
    navigator.vibrate?.(10);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="video-home-hero" aria-labelledby="video-home-title">
      <video
        className="video-home-media"
        src={HERO_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="video-home-scrim" />
      <div className="video-home-ui-pill video-home-ui-pill-top" aria-hidden="true">
        <span className="video-home-pill-light" />
        <span>Acces prive</span>
      </div>

      <div className="video-home-content">
        <motion.p
          className="video-home-kicker"
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          Private sneakers catalogue
        </motion.p>

        <motion.h1
          id="video-home-title"
          className="video-home-title"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
          animate={reducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Sneakers</span>
          <span>Addict</span>
        </motion.h1>

        <motion.div
          className="video-home-actions"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="#catalogue" className="video-home-action video-home-action-primary">
            <Grid2X2 className="h-4 w-4" />
            Catalogue
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="#nouveautes" className="video-home-action">
            <Sparkles className="h-4 w-4" />
            Nouveautes
          </Link>
        </motion.div>
      </div>

      <button onClick={copySnap} className="video-home-ui-pill video-home-ui-pill-bottom" type="button">
        <span className="video-home-pill-light" />
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span>{copied ? "Snap copie" : "Snap snkrsaddct"}</span>
      </button>

      <div className="video-home-meta" aria-hidden="true">
        <span>{categoryCount.toString().padStart(2, "0")} univers</span>
        <span>{productCount.toString().padStart(2, "0")} pieces</span>
      </div>
    </section>
  );
}
