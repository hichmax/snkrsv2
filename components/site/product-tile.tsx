"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/site/cart-provider";
import { ResilientImage } from "@/components/site/resilient-image";
import { AutoFitText } from "@/components/site/auto-fit-text";

type SizeItem = {
  id: string;
  sizeLabel: string;
  isAvailable: boolean;
};

type ProductTileProps = {
  product: {
    id: string;
    name: string;
    color?: string | null;
    priceText?: string | null;
    imageUrl: string;
    imageAlt?: string | null;
    modelName: string;
    sizes: SizeItem[];
  };
};

export function ProductTile({ product }: ProductTileProps) {
  const reducedMotion = useReducedMotion();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes.find((size) => size.isAvailable)?.sizeLabel
  );
  const { addItem } = useCart();

  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -7 }}
      transition={{ duration: 0.3 }}
      className="product-card group"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <ResilientImage
          src={product.imageUrl}
          alt={product.imageAlt || product.modelName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="scale-[1.1] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.16]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />
        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] backdrop-blur-xl">
          <span className="status-dot" />
          Disponible
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/45">
              Choisir une taille
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => size.isAvailable && setSelectedSize(size.sizeLabel)}
                  disabled={!size.isAvailable}
                  className={`size-chip ${
                    selectedSize === size.sizeLabel ? "size-chip-active" : ""
                  }`}
                >
                  {size.sizeLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between gap-4 p-4">
        <div className="min-w-0">
          <p className="truncate text-xs uppercase tracking-[0.2em] text-white/35">
            {product.color || product.name}
          </p>
          <AutoFitText
            as="h3"
            maxLines={2}
            minFontSize={13}
            className="mt-1 text-lg font-semibold tracking-[-0.03em]"
          >
            {product.modelName}
          </AutoFitText>
          <p className="mt-2 text-sm text-[var(--electric)]">
            {product.priceText || "Prix sur demande"}
          </p>
        </div>
        <button
          onClick={() =>
            addItem({
              productId: product.id,
              modelName: product.modelName,
              productName: product.name,
              sizeLabel: selectedSize,
              quantity: 1,
              imageUrl: product.imageUrl
            })
          }
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:rotate-90 hover:bg-[var(--electric)]"
          aria-label={`Ajouter ${product.modelName} au panier`}
        >
          {selectedSize ? <ShoppingBag className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </button>
      </div>
    </motion.article>
  );
}
