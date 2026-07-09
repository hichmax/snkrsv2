"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "covering" | "revealing";
type Direction = "forward" | "back";

const desktopStripCount = 18;
const mobileStripCount = 8;
const stripPalette = [
  "linear-gradient(180deg, rgba(210,255,108,0.92), rgba(110,188,255,0.54), rgba(5,7,13,0.94))",
  "linear-gradient(180deg, rgba(168,205,255,0.9), rgba(112,91,255,0.48), rgba(4,6,12,0.96))",
  "linear-gradient(180deg, rgba(242,248,255,0.78), rgba(122,183,255,0.44), rgba(5,7,13,0.95))",
  "linear-gradient(180deg, rgba(143,255,206,0.82), rgba(83,127,255,0.44), rgba(4,6,12,0.96))",
  "linear-gradient(180deg, rgba(192,158,255,0.78), rgba(92,160,255,0.46), rgba(5,7,13,0.96))"
];

function getPathDepth(pathname: string) {
  return pathname.split("/").filter(Boolean).length;
}

function getNavigationDirection(nextPathname: string) {
  return getPathDepth(nextPathname) < getPathDepth(window.location.pathname) ? "back" : "forward";
}

export function CardPageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [direction, setDirection] = useState<Direction>("forward");
  const [compactMotion, setCompactMotion] = useState(false);
  const phaseRef = useRef<Phase>("idle");
  const previousPathname = useRef(pathname);
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
    const previous = previousPathname.current;
    const routeDirection = getPathDepth(pathname) < getPathDepth(previous) ? "back" : "forward";
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
        phaseRef.current = "idle";
        setPhase("idle");
      }, compactMotion ? 260 : 340);

      return () => {
        clearTimeout(entranceTimer);
        clearTimeout(revealTimer);
        root.classList.remove("card-page-entering");
      };
    }

    if (!reducedMotion) {
      setDirection(routeDirection);
      phaseRef.current = "covering";
      setPhase("covering");

      const coverTimer = setTimeout(() => {
        phaseRef.current = "revealing";
        setPhase("revealing");
      }, compactMotion ? 170 : 230);

      const revealTimer = setTimeout(() => {
        phaseRef.current = "idle";
        setPhase("idle");
      }, compactMotion ? 440 : 560);

      return () => {
        clearTimeout(entranceTimer);
        clearTimeout(coverTimer);
        clearTimeout(revealTimer);
        root.classList.remove("card-page-entering");
      };
    }

    return () => {
      clearTimeout(entranceTimer);
      root.classList.remove("card-page-entering");
    };
  }, [compactMotion, pathname, reducedMotion]);

  useEffect(() => {
    function startHistoryTransition() {
      if (phaseRef.current !== "idle" || reducedMotion) return;

      setDirection("back");
      phaseRef.current = "covering";
      setPhase("covering");

      recoveryTimer.current = setTimeout(() => {
        navigationTimer.current = null;
        recoveryTimer.current = null;
        phaseRef.current = "idle";
        setPhase("idle");
      }, 1100);
    }

    window.addEventListener("popstate", startHistoryTransition);
    return () => window.removeEventListener("popstate", startHistoryTransition);
  }, [reducedMotion]);

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
      setDirection(getNavigationDirection(url.pathname));
      phaseRef.current = "covering";
      setPhase("covering");

      navigationTimer.current = setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, compactMotion ? 230 : 310);

      recoveryTimer.current = setTimeout(() => {
        navigationTimer.current = null;
        recoveryTimer.current = null;
        phaseRef.current = "idle";
        setPhase("idle");
      }, 1200);
    }

    document.addEventListener("click", handleNavigation, true);
    return () => {
      document.removeEventListener("click", handleNavigation, true);
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
      if (recoveryTimer.current) clearTimeout(recoveryTimer.current);
      navigationTimer.current = null;
      recoveryTimer.current = null;
    };
  }, [compactMotion, reducedMotion, router]);

  const stripCount = compactMotion ? mobileStripCount : desktopStripCount;
  const strips = Array.from({ length: stripCount }, (_, index) => index);
  const enterOrigin = direction === "forward" ? "top center" : "bottom center";
  const exitOrigin = direction === "forward" ? "bottom center" : "top center";

  return (
    <AnimatePresence>
      {phase !== "idle" ? (
        <motion.div
          className="card-transition-layer"
          data-direction={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: phase === "revealing" ? 0.16 : 0.12 }}
          aria-hidden="true"
        >
          <motion.div
            className="card-transition-scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "covering" ? 1 : 0.22 }}
            transition={{ duration: 0.28 }}
          />

          <div className="card-transition-stage">
            <div className="card-transition-strip-field">
              {strips.map((index) => {
                const waveIndex = direction === "forward" ? index : stripCount - 1 - index;

                return (
                  <motion.span
                    key={index}
                    className="card-transition-strip"
                    style={{
                      left: `${(index / stripCount) * 100}%`,
                      width: `calc(${100 / stripCount}% + 2px)`,
                      background: stripPalette[index % stripPalette.length],
                      transformOrigin: phase === "covering" ? enterOrigin : exitOrigin
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={
                      phase === "covering"
                        ? { scaleY: 1, opacity: 0.95 }
                        : { scaleY: 0, opacity: 0 }
                    }
                    transition={{
                      duration: phase === "covering" ? (compactMotion ? 0.3 : 0.38) : 0.24,
                      delay: phase === "covering" ? waveIndex * (compactMotion ? 0.012 : 0.016) : waveIndex * 0.006,
                      ease: [0.2, 0.82, 0.24, 1]
                    }}
                  />
                );
              })}
            </div>
            <motion.div
              className="card-transition-glow"
              initial={{ opacity: 0, scale: 0.82 }}
              animate={
                phase === "covering"
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 1.08 }
              }
              transition={{ duration: phase === "covering" ? 0.26 : 0.18, ease: [0.2, 0.82, 0.24, 1] }}
            />
            <div className="card-transition-brand-anchor">
              <motion.div
                className="card-transition-brand"
                initial={
                  compactMotion
                    ? { opacity: 0, y: 12, scale: 0.98 }
                    : { opacity: 0, y: 14, scale: 0.96, filter: "blur(8px)" }
                }
                animate={
                  phase === "covering"
                    ? compactMotion
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
                    : compactMotion
                      ? { opacity: 0, y: -10, scale: 0.99 }
                      : { opacity: 0, y: -12, scale: 0.985, filter: "blur(8px)" }
                }
                transition={{
                  duration: phase === "covering" ? 0.24 : 0.16,
                  delay: phase === "covering" ? 0.04 : 0,
                  ease: [0.2, 0.82, 0.24, 1]
                }}
              >
                <span>SA</span>
                <strong>Sneakers Addict</strong>
                <small>Catalogue privé</small>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
