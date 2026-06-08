"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

export function SiteHeader({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <>
      <header className="sticky top-0 z-40 px-3 pt-3 md:px-6">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: -18 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="site-nav mx-auto max-w-[1500px]"
        >
          <Link href="/" className="flex items-center gap-3" aria-label="Sneakers Addict, accueil">
            <span className="brand-mark">SA</span>
            <span className="hidden sm:block">
              <span className="block text-xs font-semibold uppercase tracking-[0.22em]">
                Sneakers Addict
              </span>
              <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-white/35">
                Curated streetwear
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
            <a href="/#nouveautes" className="hidden items-center gap-2 text-xs text-white/55 md:flex">
              <span className="status-dot" />
              Drop actif
            </a>
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

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/80 px-3 pb-3 pt-24 backdrop-blur-2xl md:px-6"
          >
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? {} : { opacity: 0, y: 20, scale: 0.98 }}
              className="mx-auto flex h-full max-w-[1500px] flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-[#0a0a0a] p-6 md:p-10"
            >
              <nav className="grid">
                {nav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={reducedMotion ? false : { opacity: 0, x: -24 }}
                    animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
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
                      <ArrowUpRight className="ml-auto h-5 w-5 text-white/25 transition group-hover:text-lime-300" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.2em] text-white/35 sm:flex-row sm:justify-between">
                <span>New drops regularly</span>
                <span>France · Worldwide attitude</span>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
