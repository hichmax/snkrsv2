"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "covering" | "revealing";

const segmentColors = ["ribbon-segment-blue", "ribbon-segment-pink", "ribbon-segment-violet", "ribbon-segment-silver"];

const segments = Array.from({ length: 42 }, (_, index) => {
  const progress = index / 41;
  const centerBoost = Math.exp(-Math.pow((progress - 0.5) / 0.14, 2));
  const wave = Math.sin(progress * Math.PI * 4.2);
  const twist = Math.cos(progress * Math.PI * 5.4);

  return {
    index,
    className: segmentColors[index % segmentColors.length],
    left: `${progress * 100}%`,
    top: `${50 + wave * (9 + centerBoost * 17)}%`,
    width: `${4.1 + centerBoost * 2.4}%`,
    height: `${28 + centerBoost * 22}%`,
    depth: Math.round(twist * 90 + centerBoost * 210),
    rotateX: Math.round(wave * 22 + centerBoost * (progress < 0.5 ? 32 : -32)),
    rotateY: Math.round(-58 + twist * 22),
    rotateZ: Math.round(twist * 15),
    float: Math.round(8 + centerBoost * 18 + (index % 4) * 3),
    sway: Math.round(5 + centerBoost * 13 + (index % 3) * 2),
    duration: 0.86 + (index % 7) * 0.08
  };
});

const fragments = [
  { left: "8%", top: "18%", width: 110, height: 54, x: "-118vw", y: -80, rotate: -42, delay: 0 },
  { left: "20%", top: "66%", width: 82, height: 118, x: "-132vw", y: 65, rotate: 35, delay: 0.03 },
  { left: "35%", top: "30%", width: 150, height: 72, x: "-146vw", y: -25, rotate: -28, delay: 0.06 },
  { left: "46%", top: "76%", width: 94, height: 62, x: "-125vw", y: 85, rotate: 48, delay: 0.02 },
  { left: "58%", top: "12%", width: 74, height: 128, x: "-154vw", y: -95, rotate: -38, delay: 0.08 },
  { left: "69%", top: "52%", width: 138, height: 76, x: "-136vw", y: 36, rotate: 31, delay: 0.04 },
  { left: "82%", top: "24%", width: 96, height: 48, x: "-162vw", y: -55, rotate: -52, delay: 0.1 },
  { left: "90%", top: "72%", width: 72, height: 102, x: "-142vw", y: 72, rotate: 44, delay: 0.07 }
];

function normalizeImageUrl(value: string | null | undefined) {
  if (!value || value.startsWith("data:") || value.startsWith("blob:")) return null;

  try {
    return new URL(value, window.location.href).href;
  } catch {
    return null;
  }
}

function extractBackgroundImageUrl(element: Element) {
  const backgroundImage = window.getComputedStyle(element).backgroundImage;
  const match = backgroundImage.match(/url\(["']?([^"')]+)["']?\)/);
  return normalizeImageUrl(match?.[1]);
}

function collectTransitionImages(source: HTMLElement | null) {
  const images = new Set<string>();

  function addFrom(root: ParentNode | null) {
    if (!root) return;

    root.querySelectorAll<HTMLImageElement>("img").forEach((image) => {
      const url = normalizeImageUrl(image.currentSrc || image.src);
      if (url) images.add(url);
    });

    if (root instanceof Element) {
      const backgroundUrl = extractBackgroundImageUrl(root);
      if (backgroundUrl) images.add(backgroundUrl);
    }
  }

  addFrom(source);

  if (images.size < 3) {
    document
      .querySelectorAll<HTMLElement>(
        ".editorial-card, .product-card, .mobile-product-thumb, .catalog-hero, .hero-shell"
      )
      .forEach((element) => addFrom(element));
  }

  return Array.from(images).slice(0, 8);
}

function imageBackground(imageUrl: string) {
  return { backgroundImage: `url("${imageUrl.replace(/"/g, "%22")}")` };
}

export function RibbonPageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [compactMotion, setCompactMotion] = useState(false);
  const [transitionImages, setTransitionImages] = useState<string[]>([]);
  const phaseRef = useRef<Phase>("idle");
  const sourceElement = useRef<HTMLElement | null>(null);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recoveryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setCompactMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    const root = document.documentElement;
    root.classList.add("ribbon-page-entering");
    const entranceTimer = setTimeout(() => root.classList.remove("ribbon-page-entering"), 720);

    if (phaseRef.current === "covering") {
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
      if (recoveryTimer.current) clearTimeout(recoveryTimer.current);
      navigationTimer.current = null;
      recoveryTimer.current = null;
      phaseRef.current = "revealing";
      setPhase("revealing");
      const revealTimer = setTimeout(() => {
        sourceElement.current?.classList.remove("ribbon-transition-source");
        sourceElement.current = null;
        setTransitionImages([]);
        phaseRef.current = "idle";
        setPhase("idle");
      }, compactMotion ? 420 : 580);

      return () => {
        clearTimeout(entranceTimer);
        clearTimeout(revealTimer);
        root.classList.remove("ribbon-page-entering");
      };
    }

    return () => {
      clearTimeout(entranceTimer);
      root.classList.remove("ribbon-page-entering");
    };
  }, [compactMotion, pathname]);

  useEffect(() => {
    function handleNavigation(event: MouseEvent) {
      if (
        phaseRef.current !== "idle" ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname.startsWith("/admin")) return;
      if (url.pathname === window.location.pathname) return;
      if (reducedMotion) return;

      event.preventDefault();
      sourceElement.current =
        anchor.closest<HTMLElement>("[data-transition-source]") ||
        anchor.closest<HTMLElement>(".editorial-card, .product-card") ||
        anchor;
      sourceElement.current.classList.add("ribbon-transition-source");
      setTransitionImages(collectTransitionImages(sourceElement.current));
      phaseRef.current = "covering";
      setPhase("covering");

      navigationTimer.current = setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, compactMotion ? 340 : 520);

      recoveryTimer.current = setTimeout(() => {
        sourceElement.current?.classList.remove("ribbon-transition-source");
        sourceElement.current = null;
        setTransitionImages([]);
        navigationTimer.current = null;
        recoveryTimer.current = null;
        phaseRef.current = "idle";
        setPhase("idle");
      }, 2200);
    }

    document.addEventListener("click", handleNavigation, true);
    return () => {
      document.removeEventListener("click", handleNavigation, true);
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
      if (recoveryTimer.current) clearTimeout(recoveryTimer.current);
      navigationTimer.current = null;
      recoveryTimer.current = null;
      sourceElement.current?.classList.remove("ribbon-transition-source");
    };
  }, [compactMotion, reducedMotion, router]);

  const coveringDuration = compactMotion ? 0.42 : 0.6;
  const revealingDuration = compactMotion ? 0.36 : 0.5;

  return (
    <AnimatePresence>
      {phase !== "idle" ? (
        <motion.div
          className="ribbon-transition-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: phase === "revealing" ? 0.18 : 0.12 }}
          aria-hidden="true"
        >
          <motion.div
            className="ribbon-transition-veil"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "covering" ? 1 : 0 }}
            transition={{ duration: compactMotion ? 0.28 : 0.42 }}
          />
          <motion.div
            className="ribbon-transition-stage"
            initial={{ opacity: 0, x: "88vw", scale: 0.86, rotateX: 7, rotateY: -19, rotateZ: -7 }}
            animate={
              phase === "covering"
                ? { opacity: 1, x: "-16vw", scale: 1.04, rotateX: 1, rotateY: -4, rotateZ: -2 }
                : { opacity: 0.88, x: "-165vw", scale: 1.08, rotateX: -5, rotateY: 16, rotateZ: 5 }
            }
            transition={{
              duration: phase === "covering" ? coveringDuration : revealingDuration,
              ease: [0.2, 0.82, 0.24, 1]
            }}
          >
            <div className="ribbon-transition-trail" />
            {segments
              .filter((segment) => !compactMotion || segment.index % 2 === 0)
              .map((segment) => {
                const imageUrl =
                  transitionImages.length &&
                  (segment.index % 2 === 0 || (segment.index > 15 && segment.index < 28))
                    ? transitionImages[segment.index % transitionImages.length]
                    : null;

                return (
                  <motion.span
                    key={segment.index}
                    className={`ribbon-transition-segment ${imageUrl ? "ribbon-transition-segment-media" : ""} ${segment.className}`}
                    style={{
                      left: segment.left,
                      top: segment.top,
                      width: segment.width,
                      height: segment.height
                    }}
                    initial={{
                      opacity: 0,
                      x: "-50%",
                      y: "-50%",
                      z: segment.depth - 110,
                      rotateX: segment.rotateX - 18,
                      rotateY: segment.rotateY - 16,
                      rotateZ: segment.rotateZ
                    }}
                    animate={
                      phase === "covering"
                        ? {
                            opacity: 1,
                            x: [
                              "-50%",
                              `calc(-50% + ${segment.sway}px)`,
                              `calc(-50% - ${Math.round(segment.sway * 0.7)}px)`,
                              "-50%"
                            ],
                            y: [
                              "-50%",
                              `calc(-50% - ${segment.float}px)`,
                              `calc(-50% + ${Math.round(segment.float * 0.6)}px)`,
                              "-50%"
                            ],
                            z: [
                              segment.depth - 24,
                              segment.depth + 54,
                              segment.depth - 8,
                              segment.depth - 24
                            ],
                            rotateX: [
                              segment.rotateX - 8,
                              segment.rotateX + 13,
                              segment.rotateX - 5,
                              segment.rotateX - 8
                            ],
                            rotateY: [
                              segment.rotateY - 16,
                              segment.rotateY + 22,
                              segment.rotateY - 12,
                              segment.rotateY - 16
                            ],
                            rotateZ: [
                              segment.rotateZ - 4,
                              segment.rotateZ + 6,
                              segment.rotateZ - 2,
                              segment.rotateZ - 4
                            ]
                          }
                        : {
                            opacity: 0.78,
                            x: "-50%",
                            y: `calc(-50% + ${(segment.index % 2 === 0 ? -1 : 1) * segment.float * 2}px)`,
                            z: segment.depth + 90,
                            rotateX: segment.rotateX + (segment.index % 2 === 0 ? -24 : 24),
                            rotateY: segment.rotateY + (segment.index % 3 === 0 ? 36 : -28),
                            rotateZ: segment.rotateZ + (segment.index % 2 === 0 ? -18 : 18)
                          }
                    }
                    transition={
                      phase === "covering"
                        ? {
                            duration: segment.duration,
                            delay: segment.index * 0.008,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        : {
                            duration: compactMotion ? 0.28 : 0.42,
                            delay: compactMotion ? 0 : (segment.index % 6) * 0.012,
                            ease: [0.2, 0.82, 0.24, 1]
                          }
                    }
                  >
                    {imageUrl ? (
                      <span className="ribbon-transition-image" style={imageBackground(imageUrl)} />
                    ) : null}
                  </motion.span>
                );
              })}
            <span className="ribbon-transition-glint" />
          </motion.div>

          {fragments.map((fragment, index) => (
            <motion.span
              key={`${fragment.left}-${fragment.top}`}
              className={`ribbon-transition-fragment ${
                transitionImages.length ? "ribbon-transition-fragment-media" : ""
              } ribbon-transition-fragment-${(index % 4) + 1}`}
              style={{
                left: fragment.left,
                top: fragment.top,
                width: fragment.width,
                height: fragment.height
              }}
              initial={{ opacity: 0, x: "24vw", scale: 0.72, rotate: 0 }}
              animate={
                phase === "revealing"
                  ? {
                      opacity: [0, 0.96, 0],
                      x: fragment.x,
                      y: fragment.y,
                      scale: [0.72, 1, 0.58],
                      rotate: fragment.rotate
                    }
                  : { opacity: 0, x: "24vw", scale: 0.72, rotate: 0 }
              }
              transition={{
                duration: compactMotion ? 0.34 : 0.52,
                delay: compactMotion ? 0 : fragment.delay,
                ease: [0.2, 0.82, 0.24, 1]
              }}
            >
              {transitionImages.length ? (
                <span
                  className="ribbon-transition-image"
                  style={imageBackground(transitionImages[index % transitionImages.length])}
                />
              ) : null}
            </motion.span>
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
