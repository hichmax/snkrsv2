export const dynamic = "force-dynamic";

import { AdminShell } from "@/components/admin/admin-shell";
import { UploadStudio } from "@/components/admin/upload-studio";
import { getAdminUploadStructure } from "@/lib/queries";
import { requireAdmin } from "@/lib/auth";

export default async function AdminUploadsPage() {
  await requireAdmin();
  const data = await getAdminUploadStructure();

  return (
    <AdminShell eyebrow="uploads" title="Importer des produits">
      <UploadStudio
        categories={data.categories}
        brands={data.brands}
        models={data.models}
      />
    </AdminShell>
  );
}
