export const dynamic = "force-dynamic";

import Link from "next/link";
import { AdminShell } from "@/components/admin/admin-shell";
import { getAdminDashboardStats } from "@/lib/queries";
import { requireAdmin } from "@/lib/auth";
import { siteContent } from "@/content/site-content";

export default async function AdminDashboardPage() {
  await requireAdmin();
  const data = await getAdminDashboardStats();

  const cards = [
    { label: "Catégories", value: data.categories, href: "/admin/structure" },
    { label: "Marques", value: data.brands, href: "/admin/structure" },
    { label: "Modèles", value: data.models, href: "/admin/structure" },
    { label: "Produits", value: data.products, href: "/admin/products" },
    { label: "Commandes", value: data.orders, href: "/admin/orders" }
  ];

  return (
    <AdminShell eyebrow="dashboard" title={siteContent.admin.dashboardTitle}>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">
              {card.label}
            </p>
            <p className="mt-4 text-4xl font-semibold">{card.value}</p>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            {siteContent.admin.dashboardChecklistTitle}
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-white/65">
            {siteContent.admin.dashboardChecklist.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            {siteContent.admin.shortcutsTitle}
          </p>
          <div className="mt-4 grid gap-3">
            <Link
              href="/admin/uploads"
              className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm"
            >
              Ouvrir les uploads
            </Link>
            <Link
              href="/admin/structure"
              className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm"
            >
              Gérer la structure
            </Link>
            <Link
              href="/admin/products"
              className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm"
            >
              Gérer les produits
            </Link>
          </div>
        </div>
      </section>
    </AdminShell>
  );
}
