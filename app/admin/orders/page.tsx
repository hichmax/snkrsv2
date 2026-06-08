export const dynamic = "force-dynamic";

import { AdminShell } from "@/components/admin/admin-shell";
import { OrdersManager } from "@/components/admin/orders-manager";
import { getAdminOrders } from "@/lib/queries";
import { requireAdmin } from "@/lib/auth";

export default async function AdminOrdersPage() {
  await requireAdmin();
  const orders = await getAdminOrders();

  return (
    <AdminShell eyebrow="orders" title="Commandes reçues">
      <OrdersManager
        orders={orders.map((order) => ({
          ...order,
          createdAt: order.createdAt.toISOString()
        }))}
      />
    </AdminShell>
  );
}
