"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "approaching" | "revealing";

const FALLBACK_SNEAKER = "/sneaker-transition-fallback.svg";

function imageFromAnchor(anchor: HTMLAnchorElement) {
  const image = anchor.querySelector<HTMLImageElement>("img");
  return image?.currentSrc || image?.src || FALLBACK_SNEAKER;
}

export function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [imageSrc, setImageSrc] = useState(FALLBACK_SNEAKER);
  const phaseRef = useRef<Phase>("idle");
  const sourceElement = useRef<HTMLElement | null>(null);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recoveryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    if (phaseRef.current === "approaching") {
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
      if (recoveryTimer.current) clearTimeout(recoveryTimer.current);
      navigationTimer.current = null;
      recoveryTimer.current = null;
      phaseRef.current = "revealing";
      setPhase("revealing");
      const timer = setTimeout(() => {
        sourceElement.current?.classList.remove("sneaker-transition-source");
        sourceElement.current = null;
        phaseRef.current = "idle";
        setPhase("idle");
      }, 520);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

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

      if (reducedMotion) {
        return;
      }

      event.preventDefault();
      sourceElement.current =
        anchor.closest<HTMLElement>("[data-transition-source]") ||
        anchor.closest<HTMLElement>(".editorial-card, .product-card") ||
        anchor;
      sourceElement.current.classList.add("sneaker-transition-source");
      setImageSrc(imageFromAnchor(anchor));
      phaseRef.current = "approaching";
      setPhase("approaching");

      navigationTimer.current = setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, 500);

      recoveryTimer.current = setTimeout(() => {
        sourceElement.current?.classList.remove("sneaker-transition-source");
        sourceElement.current = null;
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
      sourceElement.current?.classList.remove("sneaker-transition-source");
    };
  }, [reducedMotion, router]);

  return (
    <AnimatePresence>
      {phase !== "idle" ? (
        <motion.div
          className="sneaker-transition-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "revealing" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: phase === "revealing" ? 0.48 : 0.16 }}
          aria-hidden="true"
        >
          <motion.div
            className="sneaker-transition-veil"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "approaching" ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
          <div className="sneaker-transition-light sneaker-transition-light-one" />
          <div className="sneaker-transition-light sneaker-transition-light-two" />
          <motion.div
            className="sneaker-transition-stage"
            initial={{
              opacity: 0,
              x: "-34vw",
              y: "16vh",
              scale: 0.42,
              rotateX: 18,
              rotateY: -32,
              rotateZ: -13
            }}
            animate={
              phase === "approaching"
                ? {
                    opacity: 1,
                    x: "0vw",
                    y: "0vh",
                    scale: 1.62,
                    rotateX: -4,
                    rotateY: 8,
                    rotateZ: 5
                  }
                : {
                    opacity: 0,
                    x: "38vw",
                    y: "-12vh",
                    scale: 0.72,
                    rotateX: -15,
                    rotateY: 36,
                    rotateZ: 14
                  }
            }
            transition={{ duration: phase === "approaching" ? 0.68 : 0.48, ease: [0.2, 0.82, 0.24, 1] }}
          >
            <motion.div
              className="sneaker-transition-shadow"
              animate={{
                opacity: phase === "approaching" ? [0.15, 0.52, 0.32] : 0,
                scaleX: phase === "approaching" ? [0.7, 1.15, 0.9] : 0.6
              }}
              transition={{ duration: 0.68 }}
            />
            <div className="sneaker-transition-frame">
              <img
                src={imageSrc}
                alt=""
                className="sneaker-transition-image"
                onError={(event) => {
                  if (!event.currentTarget.src.endsWith(FALLBACK_SNEAKER)) {
                    event.currentTarget.src = FALLBACK_SNEAKER;
                  }
                }}
              />
              <span className="sneaker-transition-reflection" />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
