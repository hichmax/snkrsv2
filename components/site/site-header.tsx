"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import { siteContent } from "@/content/site-content";

type NavItem = {
  label: string;
  href: string;
};

export function SiteHeader({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-4 pb-4 pt-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-xl"
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-sm font-semibold">
            {siteContent.brand.shortName}
          </span>
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/40">
              {siteContent.brand.headerLabel}
            </p>
            <p className="text-sm font-medium text-white">{siteContent.brand.headerTagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/admin"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80"
          >
            Admin
          </Link>
        </nav>

        <button
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
        >
          <Menu className="h-4 w-4" />
        </button>
      </motion.div>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/10 bg-black/80 p-3 backdrop-blur-xl md:hidden">
          <div className="grid gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-4 py-3 text-sm"
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 text-white/50" />
              </Link>
            ))}
            <Link
              href="/admin"
              className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/80"
            >
              Admin
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
