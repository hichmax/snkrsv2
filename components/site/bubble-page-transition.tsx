"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "covering" | "revealing";
type BubbleOrigin = { x: number; y: number };

function anchorOrigin(anchor: HTMLAnchorElement, event: MouseEvent): BubbleOrigin {
  const source = anchor.closest<HTMLElement>("[data-transition-source]") || anchor;
  const rect = source.getBoundingClientRect();

  return {
    x: Number.isFinite(event.clientX) ? event.clientX : rect.left + rect.width / 2,
    y: Number.isFinite(event.clientY) ? event.clientY : rect.top + rect.height / 2
  };
}

export function BubblePageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [origin, setOrigin] = useState<BubbleOrigin>({ x: 0, y: 0 });
  const phaseRef = useRef<Phase>("idle");
  const previousPathname = useRef(pathname);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recoveryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sourceElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    document.documentElement.classList.add("bubble-page-entering");
    const entranceTimer = setTimeout(
      () => document.documentElement.classList.remove("bubble-page-entering"),
      620
    );

    if (phaseRef.current === "covering") {
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
      if (recoveryTimer.current) clearTimeout(recoveryTimer.current);
      navigationTimer.current = null;
      recoveryTimer.current = null;
      phaseRef.current = "revealing";
      setPhase("revealing");

      const revealTimer = setTimeout(() => {
        sourceElement.current?.classList.remove("bubble-transition-source");
        sourceElement.current = null;
        phaseRef.current = "idle";
        setPhase("idle");
      }, 460);

      return () => {
        clearTimeout(entranceTimer);
        clearTimeout(revealTimer);
        document.documentElement.classList.remove("bubble-page-entering");
      };
    }

    return () => {
      clearTimeout(entranceTimer);
      document.documentElement.classList.remove("bubble-page-entering");
    };
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
      const samePath = url.pathname === window.location.pathname;
      const sameHashNavigation = samePath && url.hash;
      if (url.origin !== window.location.origin || url.pathname.startsWith("/admin")) return;
      if (samePath && (!url.hash || sameHashNavigation)) return;
      if (reducedMotion) return;

      event.preventDefault();
      sourceElement.current = anchor.closest<HTMLElement>("[data-transition-source]") || anchor;
      sourceElement.current.classList.add("bubble-transition-source");
      setOrigin(anchorOrigin(anchor, event));
      phaseRef.current = "covering";
      setPhase("covering");

      navigationTimer.current = setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, 430);

      recoveryTimer.current = setTimeout(() => {
        sourceElement.current?.classList.remove("bubble-transition-source");
        sourceElement.current = null;
        navigationTimer.current = null;
        recoveryTimer.current = null;
        phaseRef.current = "idle";
        setPhase("idle");
      }, 2000);
    }

    document.addEventListener("click", handleNavigation, true);
    return () => {
      document.removeEventListener("click", handleNavigation, true);
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
      if (recoveryTimer.current) clearTimeout(recoveryTimer.current);
      sourceElement.current?.classList.remove("bubble-transition-source");
    };
  }, [reducedMotion, router]);

  const clipPath = `circle(${phase === "covering" ? "155vmax" : "170vmax"} at ${origin.x}px ${origin.y}px)`;

  return (
    <AnimatePresence>
      {phase !== "idle" ? (
        <motion.div
          className="bubble-transition-layer"
          initial={{
            opacity: 0,
            clipPath: `circle(0vmax at ${origin.x}px ${origin.y}px)`
          }}
          animate={{
            opacity: phase === "covering" ? 1 : 0,
            clipPath
          }}
          exit={{ opacity: 0 }}
          transition={{
            clipPath: { duration: phase === "covering" ? 0.56 : 0.34, ease: [0.2, 0.82, 0.24, 1] },
            opacity: { duration: phase === "covering" ? 0.18 : 0.34 }
          }}
          aria-hidden="true"
        >
          <div className="bubble-transition-blob" />
          <div className="bubble-transition-glare bubble-transition-glare-one" />
          <div className="bubble-transition-glare bubble-transition-glare-two" />
          <div className="bubble-transition-grain" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
