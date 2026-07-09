"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "covering" | "revealing";

const panels = [
  {
    key: "media",
    className: "card-transition-panel-media",
    initial: { x: "-42vw", y: "108vh", rotate: -9, scale: 0.94 },
    cover: { x: "-19vw", y: "9vh", rotate: -2, scale: 1 },
    reveal: { x: "-68vw", y: "-96vh", rotate: -12, scale: 0.96 },
    delay: 0
  },
  {
    key: "acid",
    className: "card-transition-panel-acid",
    initial: { x: "52vw", y: "102vh", rotate: 10, scale: 0.96 },
    cover: { x: "18vw", y: "7vh", rotate: 3, scale: 1 },
    reveal: { x: "72vw", y: "-102vh", rotate: 14, scale: 0.98 },
    delay: 0.04
  },
  {
    key: "dark",
    className: "card-transition-panel-dark",
    initial: { x: "0vw", y: "114vh", rotate: 0, scale: 0.9 },
    cover: { x: "0vw", y: "2vh", rotate: 0, scale: 1 },
    reveal: { x: "0vw", y: "-116vh", rotate: -3, scale: 1 },
    delay: 0.08
  },
  {
    key: "ice",
    className: "card-transition-panel-ice",
    initial: { x: "-56vw", y: "122vh", rotate: 12, scale: 0.9 },
    cover: { x: "-28vw", y: "54vh", rotate: 4, scale: 1 },
    reveal: { x: "-82vw", y: "-72vh", rotate: 18, scale: 0.98 },
    delay: 0.1
  },
  {
    key: "violet",
    className: "card-transition-panel-violet",
    initial: { x: "60vw", y: "118vh", rotate: -12, scale: 0.92 },
    cover: { x: "28vw", y: "58vh", rotate: -5, scale: 1 },
    reveal: { x: "84vw", y: "-74vh", rotate: -20, scale: 0.98 },
    delay: 0.12
  }
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

function collectTransitionImage(source: HTMLElement | null) {
  const roots: ParentNode[] = [];

  if (source) roots.push(source);

  document
    .querySelectorAll<HTMLElement>(
      ".editorial-card, .product-card, .mobile-product-thumb, .catalog-hero, .video-home-hero"
    )
    .forEach((element) => roots.push(element));

  for (const root of roots) {
    const image = root.querySelector<HTMLImageElement>("img");
    const imageUrl = normalizeImageUrl(image?.currentSrc || image?.src);
    if (imageUrl) return imageUrl;

    if (root instanceof Element) {
      const backgroundUrl = extractBackgroundImageUrl(root);
      if (backgroundUrl) return backgroundUrl;
    }
  }

  return null;
}

function getSourceElement(anchor: HTMLAnchorElement) {
  return (
    anchor.closest<HTMLElement>("[data-transition-source]") ||
    anchor.closest<HTMLElement>(".editorial-card, .product-card, .mobile-product-thumb, .video-home-action") ||
    anchor
  );
}

export function CardPageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [compactMotion, setCompactMotion] = useState(false);
  const phaseRef = useRef<Phase>("idle");
  const previousPathname = useRef(pathname);
  const sourceElement = useRef<HTMLElement | null>(null);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recoveryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    root.classList.add("card-page-entering");
    const entranceTimer = setTimeout(() => root.classList.remove("card-page-entering"), 640);

    if (phaseRef.current === "covering") {
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
      if (recoveryTimer.current) clearTimeout(recoveryTimer.current);
      navigationTimer.current = null;
      recoveryTimer.current = null;
      phaseRef.current = "revealing";
      setPhase("revealing");

      const revealTimer = setTimeout(() => {
        sourceElement.current?.classList.remove("card-transition-source");
        sourceElement.current = null;
        setImageUrl(null);
        phaseRef.current = "idle";
        setPhase("idle");
      }, compactMotion ? 420 : 560);

      return () => {
        clearTimeout(entranceTimer);
        clearTimeout(revealTimer);
        root.classList.remove("card-page-entering");
      };
    }

    return () => {
      clearTimeout(entranceTimer);
      root.classList.remove("card-page-entering");
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
      const samePath = url.pathname === window.location.pathname;
      const sameHashNavigation = samePath && url.hash;
      if (url.origin !== window.location.origin || url.pathname.startsWith("/admin")) return;
      if (samePath && (!url.hash || sameHashNavigation)) return;
      if (reducedMotion) return;

      event.preventDefault();
      sourceElement.current = getSourceElement(anchor);
      sourceElement.current.classList.add("card-transition-source");
      setImageUrl(collectTransitionImage(sourceElement.current));
      phaseRef.current = "covering";
      setPhase("covering");

      navigationTimer.current = setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, compactMotion ? 330 : 430);

      recoveryTimer.current = setTimeout(() => {
        sourceElement.current?.classList.remove("card-transition-source");
        sourceElement.current = null;
        setImageUrl(null);
        navigationTimer.current = null;
        recoveryTimer.current = null;
        phaseRef.current = "idle";
        setPhase("idle");
      }, 1900);
    }

    document.addEventListener("click", handleNavigation, true);
    return () => {
      document.removeEventListener("click", handleNavigation, true);
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
      if (recoveryTimer.current) clearTimeout(recoveryTimer.current);
      navigationTimer.current = null;
      recoveryTimer.current = null;
      sourceElement.current?.classList.remove("card-transition-source");
    };
  }, [compactMotion, reducedMotion, router]);

  const coverDuration = compactMotion ? 0.4 : 0.52;
  const revealDuration = compactMotion ? 0.32 : 0.46;

  return (
    <AnimatePresence>
      {phase !== "idle" ? (
        <motion.div
          className="card-transition-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: phase === "revealing" ? 0.14 : 0.12 }}
          aria-hidden="true"
        >
          <motion.div
            className="card-transition-scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "covering" ? 1 : 0.22 }}
            transition={{ duration: 0.28 }}
          />

          <div className="card-transition-stage">
            {panels.map((panel) => {
              const isMedia = panel.key === "media" && imageUrl;

              return (
                <motion.div
                  key={panel.key}
                  className={`card-transition-panel ${panel.className} ${isMedia ? "card-transition-panel-has-image" : ""}`}
                  initial={panel.initial}
                  animate={phase === "covering" ? panel.cover : panel.reveal}
                  transition={{
                    duration: phase === "covering" ? coverDuration : revealDuration,
                    delay: phase === "covering" ? panel.delay : Math.max(0, 0.12 - panel.delay),
                    ease: [0.2, 0.82, 0.24, 1]
                  }}
                >
                  {isMedia ? (
                    <span
                      className="card-transition-image"
                      style={{ backgroundImage: `url("${imageUrl.replace(/"/g, "%22")}")` }}
                    />
                  ) : null}
                </motion.div>
              );
            })}

            <div className="card-transition-brand-anchor">
              <motion.div
                className="card-transition-brand"
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={
                  phase === "covering"
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: -22, scale: 0.98 }
                }
                transition={{
                  duration: phase === "covering" ? 0.34 : 0.2,
                  delay: phase === "covering" ? 0.13 : 0,
                  ease: [0.2, 0.82, 0.24, 1]
                }}
              >
                <span>SA</span>
                <strong>Sneakers Addict</strong>
                <small>Private catalogue</small>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
