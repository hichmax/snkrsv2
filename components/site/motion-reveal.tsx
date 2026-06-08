"use client";

import { motion, useReducedMotion } from "framer-motion";

export function MotionReveal({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 34, scale: 0.975, filter: "blur(14px)" }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.82, delay, ease: [0.2, 0.82, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}
