UPDATE "Product"
SET color = NULL,
    "imageAlt" = name;

UPDATE "OrderRequestItem"
SET "productName" = 'Variation'
WHERE "productName" IS NOT NULL;
