"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "expanding" | "revealing";
type OriginRect = {
  left: number;
  top: number;
  width: number;
  height: number;
  scale: number;
  radius: string;
};

const fallbackOrigin: OriginRect = {
  left: 0,
  top: 0,
  width: 1,
  height: 1,
  scale: 220,
  radius: "32px"
};

export function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [origin, setOrigin] = useState<OriginRect>(fallbackOrigin);
  const phaseRef = useRef<Phase>("idle");
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recoveryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    if (phaseRef.current === "expanding") {
      phaseRef.current = "revealing";
      setPhase("revealing");
      const timer = setTimeout(() => {
        phaseRef.current = "idle";
        setPhase("idle");
      }, 560);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    function handleNavigation(event: MouseEvent) {
      if (
        reducedMotion ||
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
      const anchor = target?.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname.startsWith("/admin")) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) {
        return;
      }

      const originElement =
        anchor.closest<HTMLElement>("[data-liquid-origin]") ||
        anchor.closest<HTMLElement>(".editorial-card, .product-card, .primary-pill, .secondary-pill") ||
        anchor;
      const rect = originElement.getBoundingClientRect();
      const width = Math.max(rect.width, 44);
      const height = Math.max(rect.height, 44);
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const farthestX = Math.max(centerX, window.innerWidth - centerX);
      const farthestY = Math.max(centerY, window.innerHeight - centerY);
      const coverDiameter = Math.hypot(farthestX, farthestY) * 2.35;
      const computedRadius = window.getComputedStyle(originElement).borderRadius;

      event.preventDefault();
      setOrigin({
        left: rect.left,
        top: rect.top,
        width,
        height,
        scale: Math.max(coverDiameter / Math.min(width, height), 2),
        radius: computedRadius === "0px" ? "28px" : computedRadius
      });
      phaseRef.current = "expanding";
      setPhase("expanding");

      navigationTimer.current = setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, 430);

      recoveryTimer.current = setTimeout(() => {
        phaseRef.current = "idle";
        setPhase("idle");
      }, 2200);
    }

    document.addEventListener("click", handleNavigation, true);
    return () => {
      document.removeEventListener("click", handleNavigation, true);
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
      if (recoveryTimer.current) clearTimeout(recoveryTimer.current);
    };
  }, [reducedMotion, router]);

  return (
    <AnimatePresence>
      {phase !== "idle" ? (
        <motion.div
          className="liquid-transition-layer"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "revealing" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: phase === "revealing" ? 0.5 : 0.12 }}
          aria-hidden="true"
        >
          <motion.div
            className="liquid-transition-organic"
            style={{
              left: origin.left,
              top: origin.top,
              width: origin.width,
              height: origin.height,
              borderRadius: origin.radius
            }}
            initial={{ scale: 1, rotate: 0 }}
            animate={{
              scale: phase === "expanding" ? origin.scale : origin.scale * 1.03,
              rotate: phase === "expanding" ? 2 : -1,
              borderRadius:
                phase === "expanding"
                  ? "42% 58% 63% 37% / 48% 36% 64% 52%"
                  : "55% 45% 38% 62% / 42% 57% 43% 58%"
            }}
            transition={{ duration: 0.68, ease: [0.2, 0.82, 0.24, 1] }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
