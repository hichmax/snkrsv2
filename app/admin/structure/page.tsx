export const dynamic = "force-dynamic";

import { AdminShell } from "@/components/admin/admin-shell";
import { StructureManager } from "@/components/admin/structure-manager";
import { getAdminSnapshot } from "@/lib/queries";
import { requireAdmin } from "@/lib/auth";

export default async function AdminStructurePage() {
  await requireAdmin();
  const data = await getAdminSnapshot();

  return (
    <AdminShell eyebrow="structure" title="Catégories, marques, modèles">
      <StructureManager
        categories={data.categories}
        brands={data.brands}
        models={data.models}
      />
    </AdminShell>
  );
}
