import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="px-3 pb-3 md:px-6 md:pb-6">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[30px] border border-white/10 bg-[#0a0a0a]">
        <div className="grid gap-8 p-6 md:grid-cols-[1.4fr_0.6fr] md:p-10 lg:p-14">
          <div>
            <p className="eyebrow">Keep in touch</p>
            <h2 className="mt-4 max-w-4xl text-[clamp(3rem,8vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.08em]">
              FIND IT.
              <br />
              <span className="text-lime-300">WEAR IT.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-3">
            <p className="mb-4 text-sm leading-6 text-white/45">
              Nouveautés régulières, commande rapide et disponibilité confirmée directement.
            </p>
            <a href="https://www.snapchat.com/" className="footer-link">
              Snapchat <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/" className="footer-link">
              Instagram <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/admin" className="footer-link text-white/35">
              Administration <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-white/30 sm:flex-row sm:justify-between md:px-10">
          <span>© 2026 Sneakers Addict</span>
          <span>Curated streetwear · Built for speed</span>
        </div>
      </div>
    </footer>
  );
}
