"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [renderOrbs, setRenderOrbs] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setRenderOrbs(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="liquid-background" aria-hidden="true">
      {renderOrbs ? (
        <>
          <motion.div
            className="liquid-orb liquid-orb-blue"
            animate={
              reducedMotion
                ? undefined
                : {
                    x: ["-4vw", "9vw", "-4vw"],
                    y: ["-3vh", "14vh", "-3vh"],
                    scale: [1, 1.16, 1]
                  }
            }
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="liquid-orb liquid-orb-violet"
            animate={
              reducedMotion
                ? undefined
                : {
                    x: ["5vw", "-10vw", "5vw"],
                    y: ["8vh", "-8vh", "8vh"],
                    scale: [1.08, 0.92, 1.08]
                  }
            }
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="liquid-orb liquid-orb-acid"
            animate={
              reducedMotion
                ? undefined
                : {
                    x: ["0vw", "12vw", "0vw"],
                    y: ["0vh", "-12vh", "0vh"],
                    scale: [0.9, 1.08, 0.9]
                  }
            }
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      ) : null}
      <div className="liquid-vignette" />
    </div>
  );
}
