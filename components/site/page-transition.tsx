"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "expanding" | "revealing";

export function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
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

      event.preventDefault();
      setOrigin({ x: event.clientX, y: event.clientY });
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
            className="liquid-transition-bubble"
            style={{ left: origin.x, top: origin.y }}
            initial={{ scale: 0.008, rotate: -8 }}
            animate={{
              scale: phase === "expanding" ? 1 : 1.08,
              rotate: phase === "expanding" ? 0 : 3
            }}
            transition={{ duration: 0.62, ease: [0.2, 0.82, 0.24, 1] }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
