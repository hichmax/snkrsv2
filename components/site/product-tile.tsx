"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/site/cart-provider";

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
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes.find((size) => size.isAvailable)?.sizeLabel
  );
  const { addItem } = useCart();

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.imageAlt || product.modelName}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/70 backdrop-blur-md">
          {product.priceText || "Prix sur demande"}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.id}
                onClick={() => size.isAvailable && setSelectedSize(size.sizeLabel)}
                className={`rounded-full px-3 py-1.5 text-xs ${
                  selectedSize === size.sizeLabel
                    ? "bg-lime-300 text-black"
                    : size.isAvailable
                    ? "border border-white/10 bg-white/10 text-white"
                    : "cursor-not-allowed border border-white/5 bg-white/5 text-white/25"
                }`}
              >
                {size.sizeLabel}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              addItem({
                productId: product.id,
                modelName: product.modelName,
                productName: "",
                sizeLabel: selectedSize,
                quantity: 1,
                imageUrl: product.imageUrl
              })
            }
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
          >
            <ShoppingBag className="h-4 w-4" />
            Ajouter
          </button>
        </div>
      </div>
    </motion.article>
  );
}
