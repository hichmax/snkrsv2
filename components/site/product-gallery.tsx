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
  const hoveringRef = useRef(false);
  const draggingRef = useRef(false);
  const settlingRef = useRef(false);
  const velocityRef = useRef(AUTO_SCROLL_VELOCITY);
  const positionRef = useRef(0);
  const loopWidthRef = useRef(0);
  const suppressClickRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const dragRef = useRef({
    lastTime: 0,
    lastX: 0,
    moved: false,
    startX: 0
  });
  const [isDragging, setIsDragging] = useState(false);

  const loopedProducts = useMemo(
    () => (products.length > 1 ? [...products, ...products] : products),
    [products]
  );

  useEffect(() => {
    if (reducedMotion || products.length < 2) return;

    let frame = 0;
    let last = window.performance.now();
    velocityRef.current = AUTO_SCROLL_VELOCITY;

    const tick = (time: number) => {
      const track = trackRef.current;
      const delta = Math.min(time - last, 100);
      last = time;

      if (track && !draggingRef.current && document.visibilityState !== "hidden") {
        const isHovered = hoveringRef.current;
        const targetVelocity = isHovered ? 0 : AUTO_SCROLL_VELOCITY;
        const response = settlingRef.current
          ? INERTIA_RESPONSE_MS
          : isHovered
            ? HOVER_STOP_RESPONSE_MS
            : AUTO_RESUME_RESPONSE_MS;

        velocityRef.current = dampVelocity(
          velocityRef.current,
          targetVelocity,
          delta,
          response
        );

        if (settlingRef.current && Math.abs(velocityRef.current - targetVelocity) < 0.008) {
          settlingRef.current = false;
        }

        if (Math.abs(velocityRef.current) > 0.0005) {
          positionRef.current = normalizeCarouselPosition(
            positionRef.current + velocityRef.current * delta,
            loopWidthRef.current
          );
          track.scrollLeft = positionRef.current;
        }
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [products.length, reducedMotion]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || products.length < 2) return;

    const syncCarouselMetrics = () => {
      loopWidthRef.current = getCarouselLoopWidth(track, products.length);
      positionRef.current = normalizeCarouselPosition(
        track.scrollLeft,
        loopWidthRef.current
      );
      track.scrollLeft = positionRef.current;
    };

    syncCarouselMetrics();

    const resizeObserver = new ResizeObserver(syncCarouselMetrics);
    resizeObserver.observe(track);

    return () => {
      resizeObserver.disconnect();
    };
  }, [products.length]);

  if (!products.length) return null;

  function handleMouseEnter() {
    hoveringRef.current = true;
  }

  function handleMouseLeave() {
    hoveringRef.current = false;
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const track = trackRef.current;
    if (!track) return;

    if (event.pointerType === "touch") {
      hoveringRef.current = false;
    }

    draggingRef.current = true;
    settlingRef.current = false;
    pointerIdRef.current = event.pointerId;
    suppressClickRef.current = false;
    velocityRef.current = 0;
    positionRef.current = track.scrollLeft;
    dragRef.current = {
      lastTime: event.timeStamp,
      lastX: event.clientX,
      moved: false,
      startX: event.clientX
    };
    setIsDragging(true);

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

    const drag = dragRef.current;
    const pointerDelta = drag.lastX - event.clientX;
    const elapsed = Math.max(event.timeStamp - drag.lastTime, 1);

    if (Math.abs(event.clientX - drag.startX) > 5) {
      dragRef.current.moved = true;
      suppressClickRef.current = true;
    }

    positionRef.current = normalizeCarouselPosition(
      positionRef.current + pointerDelta,
      loopWidthRef.current
    );
    track.scrollLeft = positionRef.current;

    const sampledVelocity = clamp(
      pointerDelta / elapsed,
      -MAX_FLING_VELOCITY,
      MAX_FLING_VELOCITY
    );
    velocityRef.current = velocityRef.current * 0.3 + sampledVelocity * 0.7;
    dragRef.current.lastX = event.clientX;
    dragRef.current.lastTime = event.timeStamp;
  }

  function finishDrag(event?: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;

    const track = trackRef.current;
    const pointerId = pointerIdRef.current;

    draggingRef.current = false;
    pointerIdRef.current = null;
    setIsDragging(false);

    if (event && dragRef.current.moved) {
      const idleTime = Math.max(event.timeStamp - dragRef.current.lastTime, 0);
      velocityRef.current *= Math.exp(-idleTime / 110);
      settlingRef.current = true;
    } else {
      velocityRef.current = hoveringRef.current ? 0 : AUTO_SCROLL_VELOCITY;
      settlingRef.current = false;
    }

    if (track && pointerId !== null) {
      try {
        track.releasePointerCapture(pointerId);
      } catch {
        // Capture may already be released by the browser.
      }
    }

    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 140);
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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

const AUTO_SCROLL_VELOCITY = 0.048;
const MAX_FLING_VELOCITY = 1.35;
const INERTIA_RESPONSE_MS = 620;
const HOVER_STOP_RESPONSE_MS = 130;
const AUTO_RESUME_RESPONSE_MS = 420;

function dampVelocity(current: number, target: number, delta: number, response: number) {
  return current + (target - current) * (1 - Math.exp(-delta / response));
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getCarouselLoopWidth(track: HTMLDivElement, productCount: number) {
  const slides = track.querySelectorAll<HTMLElement>(".featured-carousel-slide");
  const firstSlide = slides[0];
  const duplicateStart = slides[productCount];

  if (!firstSlide || !duplicateStart) return track.scrollWidth / 2;
  return duplicateStart.offsetLeft - firstSlide.offsetLeft;
}

function normalizeCarouselPosition(position: number, loopWidth: number) {
  if (!loopWidth) return Math.max(position, 0);
  return ((position % loopWidth) + loopWidth) % loopWidth;
}
