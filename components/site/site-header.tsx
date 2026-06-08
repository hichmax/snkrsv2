"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Grid2X2, Home, Menu, Sparkles, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

export function SiteHeader({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeDock, setActiveDock] = useState<"home" | "catalogue" | "drop" | "snap">("home");
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (pathname.startsWith("/catalog")) {
      setActiveDock("catalogue");
      return;
    }

    setActiveDock(
      window.location.hash === "#nouveautes"
        ? "drop"
        : window.location.hash === "#catalogue"
          ? "catalogue"
          : "home"
    );
  }, [pathname]);

  async function copySnap() {
    await navigator.clipboard?.writeText("snkrsaddct");
    navigator.vibrate?.(10);
    setCopied(true);
    setActiveDock("snap");
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <>
      <header className="sticky top-0 z-40 px-3 pt-3 md:px-6">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: -18 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="site-nav liquid-glass mx-auto max-w-[1500px]"
        >
          <Link href="/" className="flex items-center gap-3" aria-label="Sneakers Addict, accueil">
            <span className="brand-mark">SA</span>
            <span className="hidden sm:block">
              <span className="block text-xs font-semibold uppercase tracking-[0.22em]">
                Sneakers Addict
              </span>
              <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-white/35">
                Private catalogue
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={copySnap} className="snap-copy-button hidden md:flex">
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copié" : "snkrsaddct"}
            </button>
            <button
              onClick={() => setOpen((value) => !value)}
              className="menu-button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      <nav className="mobile-bottom-nav" aria-label="Navigation mobile">
        <Link
          href="/"
          onClick={() => setActiveDock("home")}
          className={`mobile-bottom-item ${activeDock === "home" ? "mobile-bottom-item-active" : ""}`}
        >
          <span className="mobile-bottom-icon"><Home /></span>
          <span className="mobile-bottom-label">Accueil</span>
        </Link>
        <Link
          href="/#catalogue"
          onClick={() => setActiveDock("catalogue")}
          className={`mobile-bottom-item ${activeDock === "catalogue" ? "mobile-bottom-item-active" : ""}`}
        >
          <span className="mobile-bottom-icon"><Grid2X2 /></span>
          <span className="mobile-bottom-label">Catalogue</span>
        </Link>
        <Link
          href="/#nouveautes"
          onClick={() => setActiveDock("drop")}
          className={`mobile-bottom-item ${activeDock === "drop" ? "mobile-bottom-item-active" : ""}`}
        >
          <span className="mobile-bottom-icon"><Sparkles /></span>
          <span className="mobile-bottom-label">Drop</span>
        </Link>
        <button
          onClick={copySnap}
          className={`mobile-bottom-item ${activeDock === "snap" ? "mobile-bottom-item-active" : ""}`}
        >
          <span className="mobile-bottom-icon">{copied ? <Check /> : <Copy />}</span>
          <span className="mobile-bottom-label">{copied ? "Copié" : "Snap"}</span>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/60 px-3 pb-24 pt-24 backdrop-blur-2xl md:px-6 md:pb-3"
          >
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? {} : { opacity: 0, y: 20, scale: 0.98 }}
              className="liquid-menu mx-auto flex h-full max-w-[1500px] flex-col justify-between overflow-hidden p-6 md:p-10"
            >
              <nav className="grid">
                {nav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={reducedMotion ? false : { opacity: 0, x: -24, filter: "blur(12px)" }}
                    animate={reducedMotion ? {} : { opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="menu-link group"
                    >
                      <span className="text-xs tabular-nums text-white/25">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span>{item.label}</span>
                      <ArrowUpRight className="ml-auto h-5 w-5 text-white/25 transition group-hover:text-[var(--electric)]" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.2em] text-white/35 sm:flex-row sm:justify-between">
                <span>Snap : snkrsaddct</span>
                <span>France · Private catalogue</span>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
