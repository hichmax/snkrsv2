"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/components/site/cart-provider";
import { ProductTile } from "@/components/site/product-tile";
import { ResilientImage } from "@/components/site/resilient-image";
import { AutoFitText } from "@/components/site/auto-fit-text";
import { TiltCard } from "@/components/site/tilt-card";

type GalleryProduct = {
  id: string;
  name: string;
  color?: string | null;
  priceText?: string | null;
  imageUrl: string;
  imageAlt?: string | null;
  modelName: string;
  sizes: Array<{
    id: string;
    sizeLabel: string;
    isAvailable: boolean;
  }>;
};

export function ProductGallery({
  products,
  desktopColumns = 3,
  mode = "responsive"
}: {
  products: GalleryProduct[];
  desktopColumns?: 3 | 4;
  mode?: "responsive" | "modal";
}) {
  const reducedMotion = useReducedMotion();
  const { addItem } = useCart();
  const [selected, setSelected] = useState<GalleryProduct | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const modalOnly = mode === "modal";

  useEffect(() => {
    if (!selected) return;
    setSelectedSize(selected.sizes.find((size) => size.isAvailable)?.sizeLabel);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  function openProduct(product: GalleryProduct) {
    navigator.vibrate?.(10);
    setSelected(product);
  }

  function closeProduct() {
    navigator.vibrate?.(8);
    setSelected(null);
  }

  return (
    <>
      <div className={modalOnly ? "interactive-product-grid" : "mobile-product-grid md:hidden"}>
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={reducedMotion ? false : { opacity: 0, scale: 0.88, y: 14 }}
            whileInView={reducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: Math.min(index * 0.025, 0.24), duration: 0.42 }}
          >
            <TiltCard fallbackActionSelector="button.mobile-product-thumb" intensity={6} lift={-5} scale={1.012}>
              <motion.button
                layoutId={`product-shell-${product.id}`}
                whileTap={reducedMotion ? undefined : { scale: 0.93 }}
                onClick={() => openProduct(product)}
                className="mobile-product-thumb"
                aria-label={`Ouvrir ${product.modelName}`}
              >
                <motion.div layoutId={`product-image-${product.id}`} className="absolute inset-0">
                  <ResilientImage
                    src={product.imageUrl}
                    alt={product.imageAlt || product.modelName}
                    fill
                    sizes="33vw"
                    className="scale-[1.14] object-cover"
                  />
                </motion.div>
                <span className="mobile-product-thumb-glow" />
                <span className="mobile-product-thumb-index">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </motion.button>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {!modalOnly ? (
        <div
          className={`hidden gap-4 md:grid ${
            desktopColumns === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          {products.map((product, index) => (
            <ProductTile key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : null}

      <AnimatePresence>
        {selected ? (
          <motion.div
            className={`mobile-product-modal ${modalOnly ? "" : "md:hidden"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={closeProduct}
          >
            <div className="mobile-product-modal-orb mobile-product-modal-orb-one" />
            <div className="mobile-product-modal-orb mobile-product-modal-orb-two" />
            <motion.article
              layoutId={`product-shell-${selected.id}`}
              className="mobile-product-sheet"
              transition={{ type: "spring", stiffness: 230, damping: 25, mass: 0.85 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={closeProduct}
                className="mobile-product-close"
                aria-label="Fermer la paire"
              >
                <X className="h-4 w-4" />
              </button>

              <motion.button
                layoutId={`product-image-${selected.id}`}
                className="relative block aspect-[4/5] w-full overflow-hidden rounded-[30px]"
                onClick={closeProduct}
                aria-label="Réduire la paire"
              >
                <ResilientImage
                  src={selected.imageUrl}
                  alt={selected.imageAlt || selected.modelName}
                  fill
                  priority
                  sizes="92vw"
                  className="scale-[1.07] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-white/[0.08]" />
                <span className="premium-badge absolute left-4 top-4">
                  <span className="status-dot" />
                  Disponible
                </span>
                <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.22em] text-white/55">
                  Touchez l'image pour réduire
                </span>
              </motion.button>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="eyebrow">{selected.color || "Variation disponible"}</p>
                    <AutoFitText
                      as="h3"
                      maxLines={2}
                      minFontSize={17}
                      className="mt-2 text-2xl font-semibold tracking-[-0.05em]"
                    >
                      {selected.modelName}
                    </AutoFitText>
                  </div>
                  <p className="shrink-0 text-sm font-semibold text-[var(--electric)]">
                    {selected.priceText || "Prix sur demande"}
                  </p>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-white/42">
                    Choisir une taille
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={(event) => {
                          event.stopPropagation();
                          if (size.isAvailable) {
                            navigator.vibrate?.(6);
                            setSelectedSize(size.sizeLabel);
                          }
                        }}
                        disabled={!size.isAvailable}
                        className={`liquid-size-chip ${
                          selectedSize === size.sizeLabel ? "liquid-size-chip-active" : ""
                        }`}
                      >
                        {selectedSize === size.sizeLabel ? <Check className="h-3 w-3" /> : null}
                        {size.sizeLabel}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    addItem({
                      productId: selected.id,
                      modelName: selected.modelName,
                      productName: selected.name,
                      sizeLabel: selectedSize,
                      quantity: 1,
                      imageUrl: selected.imageUrl
                    });
                    closeProduct();
                    navigator.vibrate?.(14);
                  }}
                  className="liquid-action mt-5 w-full"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Ajouter à ma demande
                </button>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
