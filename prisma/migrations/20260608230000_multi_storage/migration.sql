CREATE TYPE "StorageProvider" AS ENUM ('CLOUDINARY', 'CLOUDFLARE_R2', 'SUPABASE', 'EXTERNAL');

ALTER TABLE "Product"
ADD COLUMN "storageProvider" "StorageProvider" NOT NULL DEFAULT 'EXTERNAL',
ADD COLUMN "storageKey" TEXT,
ADD COLUMN "mediaBytes" BIGINT,
ADD COLUMN "mediaMimeType" TEXT;

UPDATE "Product"
SET "storageProvider" = 'CLOUDINARY',
    "storageKey" = "cloudinaryPublicId"
WHERE "cloudinaryPublicId" IS NOT NULL;

CREATE UNIQUE INDEX "Product_storageProvider_storageKey_key"
ON "Product"("storageProvider", "storageKey");

CREATE INDEX "Product_storageProvider_idx"
ON "Product"("storageProvider");
