export const dynamic = "force-dynamic";

import { AdminShell } from "@/components/admin/admin-shell";
import { UploadStudio } from "@/components/admin/upload-studio";
import { getAdminSnapshot } from "@/lib/queries";
import { requireAdmin } from "@/lib/auth";

export default async function AdminUploadsPage() {
  await requireAdmin();
  const data = await getAdminSnapshot();

  return (
    <AdminShell eyebrow="uploads" title="Importer des produits">
      <UploadStudio
        categories={data.categories.map((item) => ({ id: item.id, name: item.name }))}
        brands={data.brands.map((item) => ({
          id: item.id,
          name: item.name,
          categoryId: item.categoryId
        }))}
        models={data.models.map((item) => ({
          id: item.id,
          name: item.name,
          brandId: item.brandId
        }))}
      />
    </AdminShell>
  );
}
