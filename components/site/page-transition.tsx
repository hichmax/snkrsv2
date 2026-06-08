"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "expanding" | "revealing";

const fragments = [
  { x: -96, y: -76, size: 30, delay: 0 },
  { x: 82, y: -100, size: 19, delay: 0.03 },
  { x: 120, y: 36, size: 38, delay: 0.05 },
  { x: 42, y: 112, size: 22, delay: 0.08 },
  { x: -82, y: 92, size: 34, delay: 0.1 },
  { x: -128, y: 16, size: 18, delay: 0.12 }
];

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
          {fragments.map((fragment, index) => (
            <motion.span
              key={index}
              className="liquid-transition-fragment"
              style={{
                left: origin.x,
                top: origin.y,
                width: fragment.size,
                height: fragment.size
              }}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
              animate={{
                x: fragment.x,
                y: fragment.y,
                opacity: phase === "expanding" ? [0, 0.85, 0] : 0,
                scale: phase === "expanding" ? [0.2, 1, 0.5] : 0.4
              }}
              transition={{
                duration: 0.58,
                delay: fragment.delay,
                ease: [0.22, 1, 0.36, 1]
              }}
            />
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
