import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardList,
  Layers3,
  LayoutDashboard,
  LogOut,
  Package2,
  Upload
} from "lucide-react";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/structure", label: "Structure", icon: Layers3 },
  { href: "/admin/products", label: "Produits", icon: Package2 },
  { href: "/admin/uploads", label: "Studio upload", icon: Upload },
  { href: "/admin/orders", label: "Commandes", icon: ClipboardList }
];

export function AdminShell({
  title,
  eyebrow,
  children
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto grid min-h-screen max-w-[1800px] lg:grid-cols-[250px_1fr]">
        <aside className="border-b border-white/8 bg-black/40 p-3 backdrop-blur-xl lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:p-4">
          <div className="flex items-center justify-between gap-3 rounded-[24px] border border-white/10 bg-white/[0.035] p-3 lg:block lg:p-5">
            <div className="flex items-center gap-3">
              <span className="brand-mark">SA</span>
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">Control room</p>
                <h1 className="mt-1 text-sm font-semibold lg:text-lg">Sneakers Addict</h1>
              </div>
            </div>
            <Link
              href="/"
              target="_blank"
              className="menu-button lg:mt-5 lg:w-full lg:rounded-full"
              aria-label="Ouvrir le site"
            >
              <ArrowUpRight className="h-4 w-4" />
              <span className="hidden text-xs lg:inline">Voir le site</span>
            </Link>
          </div>

          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:mt-6 lg:grid lg:overflow-visible">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3 text-xs text-white/60 transition hover:border-lime-300/25 hover:bg-lime-300/[0.05] hover:text-white lg:text-sm"
                >
                  <Icon className="h-4 w-4 text-lime-300/75" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <form action="/api/admin/logout" method="post" className="mt-3 hidden lg:block">
            <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-xs text-white/55 transition hover:border-red-400/20 hover:bg-red-400/[0.06] hover:text-red-200">
              <LogOut className="h-4 w-4" />
              Déconnexion
            </button>
          </form>
        </aside>

        <section className="min-w-0 p-3 md:p-6 lg:p-8">
          <div className="mx-auto max-w-[1380px] space-y-6 md:space-y-8">
            <header className="admin-panel relative overflow-hidden p-5 md:p-7">
              <div className="absolute -right-20 -top-24 h-52 w-52 rounded-full bg-lime-300/[0.08] blur-3xl" />
              <div className="relative">
                <p className="admin-eyebrow">{eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                  {title}
                </h2>
              </div>
            </header>
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
