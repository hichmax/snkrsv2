export const dynamic = "force-dynamic";

import { AdminShell } from "@/components/admin/admin-shell";
import { ProductsManager } from "@/components/admin/products-manager";
import { getAdminProducts } from "@/lib/queries";
import { requireAdmin } from "@/lib/auth";

export default async function AdminProductsPage() {
  await requireAdmin();
  const products = await getAdminProducts();

  return (
    <AdminShell eyebrow="products" title="Produits">
      <ProductsManager products={products} />
    </AdminShell>
  );
}
