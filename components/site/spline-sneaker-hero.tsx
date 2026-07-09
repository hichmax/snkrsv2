"use client";

import dynamic from "next/dynamic";
import type { Application, SPEObject } from "@splinetool/runtime";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false
});

export const LIQUID_HOME_SPLINE_SCENE =
  "https://prod.spline.design/VRVI6MF4icbkTaLz/scene.splinecode";

export function SplineSneakerHero() {
  const reducedMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  function makeSceneBackgroundTransparent(app: Application) {
    app.setGlobalEvents(true);

    const applyTransparency = () => {
      app.setBackgroundColor("transparent");
      app.canvas.style.background = "transparent";
    };

    applyTransparency();
    window.requestAnimationFrame(applyTransparency);
    window.setTimeout(applyTransparency, 240);
  }

  function hidePublishedBackgroundObjects(app: Application) {
    const backgroundNamePattern = /\b(bg|background|backdrop|floor|ground|plane|wall)\b/i;

    app.getAllObjects().forEach((object: SPEObject) => {
      if (backgroundNamePattern.test(object.name)) {
        object.hide();
      }
    });
  }

  function handleSplineLoad(app: Application) {
    makeSceneBackgroundTransparent(app);
    hidePublishedBackgroundObjects(app);
    setIsReady(true);
  }

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    function blockSplineWheelZoom(event: globalThis.WheelEvent) {
      event.stopPropagation();
    }

    host.addEventListener("wheel", blockSplineWheelZoom, { capture: true, passive: true });
    return () => host.removeEventListener("wheel", blockSplineWheelZoom, { capture: true });
  }, []);

  return (
    <div className="liquid-spline-shell">
      <motion.div
        className="liquid-spline-loader"
        animate={{ opacity: isReady ? 0 : 1, scale: isReady ? 0.94 : 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <span />
        <small>Loading 3D</small>
      </motion.div>

      <motion.div
        ref={hostRef}
        className="liquid-spline-canvas"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.94, filter: "blur(18px)" }}
        animate={{
          opacity: isReady ? 1 : 0,
          scale: isReady ? 1 : 0.98,
          filter: isReady ? "blur(0px)" : "blur(18px)"
        }}
        transition={{ duration: reducedMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <Spline
          scene={LIQUID_HOME_SPLINE_SCENE}
          renderOnDemand
          style={{ background: "transparent" }}
          onLoad={handleSplineLoad}
        />
      </motion.div>
      <div className="liquid-spline-reflection" />
      <div className="liquid-spline-shadow" />
    </div>
  );
}
