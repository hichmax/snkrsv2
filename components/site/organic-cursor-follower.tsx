"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function OrganicCursorFollower() {
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const x = useSpring(useMotionValue(-80), { stiffness: 460, damping: 36, mass: 0.28 });
  const y = useSpring(useMotionValue(-80), { stiffness: 460, damping: 36, mass: 0.28 });
  const rotate = useSpring(useMotionValue(0), { stiffness: 260, damping: 28 });
  const stretchX = useSpring(useMotionValue(1), { stiffness: 260, damping: 24 });
  const stretchY = useSpring(useMotionValue(1), { stiffness: 260, damping: 24 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(finePointer.matches && !reducedMotion);
    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    return () => finePointer.removeEventListener("change", updateEnabled);
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return;
    let lastX = 0;
    let lastY = 0;
    let resetTimer: ReturnType<typeof setTimeout> | null = null;

    function handlePointerMove(event: PointerEvent) {
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      const speed = Math.min(Math.hypot(dx, dy), 52);

      x.set(event.clientX);
      y.set(event.clientY);
      rotate.set((Math.atan2(dy, dx) * 180) / Math.PI);
      stretchX.set(1 + speed / 110);
      stretchY.set(Math.max(0.76, 1 - speed / 210));
      lastX = event.clientX;
      lastY = event.clientY;
      setVisible(true);

      if (resetTimer) clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        stretchX.set(1);
        stretchY.set(1);
      }, 90);
    }

    function handlePointerOver(event: PointerEvent) {
      const target = event.target as HTMLElement | null;
      setInteractive(Boolean(target?.closest("a, button, [data-cursor-interactive]")));
    }

    function handlePointerLeave() {
      setVisible(false);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      if (resetTimer) clearTimeout(resetTimer);
    };
  }, [enabled, rotate, stretchX, stretchY, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className={`organic-cursor ${interactive ? "organic-cursor-interactive" : ""}`}
      style={{ x, y, rotate, scaleX: stretchX, scaleY: stretchY }}
      animate={{ opacity: visible ? 1 : 0, scale: interactive ? 1.5 : 1 }}
      transition={{ opacity: { duration: 0.18 }, scale: { duration: 0.2 } }}
      aria-hidden="true"
    />
  );
}
