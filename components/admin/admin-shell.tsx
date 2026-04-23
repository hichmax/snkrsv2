import Link from "next/link";
import { LayoutDashboard, Layers3, Package2, Upload, ClipboardList, LogOut } from "lucide-react";
import { siteContent } from "@/content/site-content";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/structure", label: "Structure", icon: Layers3 },
  { href: "/admin/products", label: "Produits", icon: Package2 },
  { href: "/admin/uploads", label: "Uploads", icon: Upload },
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
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-white/8 bg-black/45 p-5 backdrop-blur-xl">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
              {siteContent.brand.name}
            </p>
            <h1 className="mt-2 text-2xl font-semibold">{siteContent.admin.shellTitle}</h1>
            <p className="mt-2 text-sm text-white/50">{siteContent.admin.shellDescription}</p>
          </div>

          <nav className="mt-6 grid gap-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 text-sm text-white/75 transition hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <form action="/api/admin/logout" method="post" className="mt-6">
            <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-white/75">
              <LogOut className="h-4 w-4" />
              Déconnexion
            </button>
          </form>
        </aside>

        <section className="p-4 md:p-8">
          <div className="mx-auto max-w-7xl space-y-8">
            <header className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
                {eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-semibold">{title}</h2>
            </header>
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
