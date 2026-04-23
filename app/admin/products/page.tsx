export const dynamic = "force-dynamic";

import { AdminShell } from "@/components/admin/admin-shell";
import { ProductsManager } from "@/components/admin/products-manager";
import { getAdminSnapshot } from "@/lib/queries";
import { requireAdmin } from "@/lib/auth";

export default async function AdminProductsPage() {
  await requireAdmin();
  const data = await getAdminSnapshot();

  return (
    <AdminShell eyebrow="products" title="Produits">
      <ProductsManager products={data.products} />
    </AdminShell>
  );
}
