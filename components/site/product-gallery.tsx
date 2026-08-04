"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ShoppingBag, X } from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent,
  type WheelEvent
} from "react";
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
  mode?: "responsive" | "modal" | "cards" | "carousel";
}) {
  const reducedMotion = useReducedMotion();
  const { addItem } = useCart();
  const [selected, setSelected] = useState<GalleryProduct | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const modalOnly = mode === "modal";
  const cardsOnly = mode === "cards";
  const carouselOnly = mode === "carousel";

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
      {!cardsOnly && !carouselOnly ? (
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
      ) : null}

      {carouselOnly ? (
        <FeaturedProductsCarousel products={products} />
      ) : !modalOnly ? (
        <div
          className={`${cardsOnly ? "grid" : "hidden md:grid"} gap-4 ${
            desktopColumns === 4
              ? "sm:grid-cols-2 xl:grid-cols-4"
              : "sm:grid-cols-2 xl:grid-cols-3"
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

function FeaturedProductsCarousel({ products }: { products: GalleryProduct[] }) {
  const reducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const hoveringRef = useRef(false);
  const draggingRef = useRef(false);
  const suppressClickRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const dragRef = useRef({ moved: false, scrollLeft: 0, x: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const loopedProducts = useMemo(
    () => (products.length > 1 ? [...products, ...products] : products),
    [products]
  );

  useEffect(() => {
    pausedRef.current = Boolean(reducedMotion) || products.length < 2;
  }, [products.length, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || products.length < 2) return;

    let frame = 0;
    let last = window.performance.now();

    const tick = (time: number) => {
      const track = trackRef.current;
      const delta = Math.min(time - last, 42);
      last = time;

      if (track && !pausedRef.current && document.visibilityState !== "hidden") {
        track.scrollLeft += delta * 0.048;
        normalizeLoop(track, products.length);
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [products.length, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || products.length < 2) return;

    function handleWindowPointerMove(event: globalThis.PointerEvent) {
      const track = trackRef.current;
      if (!track || draggingRef.current || !hoveringRef.current) return;

      const rect = track.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!isInside) {
        hoveringRef.current = false;
        updatePaused(false);
      }
    }

    window.addEventListener("pointermove", handleWindowPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleWindowPointerMove);
    };
  }, [products.length, reducedMotion]);

  if (!products.length) return null;

  function updatePaused(nextPaused: boolean) {
    pausedRef.current = nextPaused || Boolean(reducedMotion) || products.length < 2;
  }

  function handlePointerEnter() {
    hoveringRef.current = true;
    updatePaused(true);
  }

  function handlePointerLeave() {
    hoveringRef.current = false;
    if (!draggingRef.current) updatePaused(false);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const track = trackRef.current;
    if (!track) return;

    draggingRef.current = true;
    pointerIdRef.current = event.pointerId;
    suppressClickRef.current = false;
    dragRef.current = { moved: false, scrollLeft: track.scrollLeft, x: event.clientX };
    setIsDragging(true);
    updatePaused(true);

    try {
      track.setPointerCapture(event.pointerId);
    } catch {
      pointerIdRef.current = null;
    }
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;

    const track = trackRef.current;
    if (!track) return;

    const delta = event.clientX - dragRef.current.x;
    if (Math.abs(delta) > 5) {
      dragRef.current.moved = true;
      suppressClickRef.current = true;
    }

    track.scrollLeft = dragRef.current.scrollLeft - delta;
    normalizeLoop(track, products.length);
  }

  function finishDrag(event?: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;

    const track = trackRef.current;
    const pointerId = pointerIdRef.current;

    draggingRef.current = false;
    pointerIdRef.current = null;
    setIsDragging(false);

    if (track && pointerId !== null) {
      try {
        track.releasePointerCapture(pointerId);
      } catch {
        // Capture may already be released by the browser.
      }
    }

    if (track && event) {
      const rect = track.getBoundingClientRect();
      hoveringRef.current =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
    }

    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 140);

    updatePaused(hoveringRef.current);
  }

  function handleClickCapture(event: ReactMouseEvent<HTMLDivElement>) {
    if (!suppressClickRef.current) return;
    event.preventDefault();
    event.stopPropagation();
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      event.preventDefault();
    }
  }

  return (
    <div className="featured-carousel-shell">
      <div
        ref={trackRef}
        className="featured-carousel-track"
        data-dragging={isDragging ? "true" : undefined}
        role="region"
        aria-label="Articles du drop du moment"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onClickCapture={handleClickCapture}
        onWheel={handleWheel}
      >
        {loopedProducts.map((product, index) => (
          <div className="featured-carousel-slide" key={`${product.id}-${index}`}>
            <ProductTile product={product} index={index % products.length} />
          </div>
        ))}
      </div>
    </div>
  );
}

function normalizeLoop(track: HTMLDivElement, productCount: number) {
  if (productCount < 2) return;

  const loopWidth = track.scrollWidth / 2;
  if (!loopWidth) return;

  if (track.scrollLeft >= loopWidth) {
    track.scrollLeft -= loopWidth;
  } else if (track.scrollLeft <= 0) {
    track.scrollLeft += loopWidth;
  }
}
