"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ResilientImage } from "@/components/site/resilient-image";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false
});

export const HERO_SPLINE_SCENE =
  "https://prod.spline.design/J4FvIupVaA8W0mzd/scene.splinecode";

export function HeroSplineScene({ fallbackImage }: { fallbackImage: string }) {
  const reducedMotion = useReducedMotion();
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [needsMotionPermission, setNeedsMotionPermission] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const canvasHostRef = useRef<HTMLDivElement>(null);

  function dispatchSplinePointer(clientX: number, clientY: number, source?: PointerEvent) {
    const canvas = canvasHostRef.current?.querySelector("canvas");
    if (!canvas) return;

    canvas.dispatchEvent(
      new PointerEvent("pointermove", {
        bubbles: true,
        cancelable: true,
        clientX,
        clientY,
        screenX: source?.screenX ?? clientX,
        screenY: source?.screenY ?? clientY,
        pointerId: source?.pointerId ?? 1,
        pointerType: source?.pointerType || "mouse",
        isPrimary: source?.isPrimary ?? true,
        pressure: source?.pressure ?? 0,
        buttons: source?.buttons ?? 0
      })
    );
  }

  useEffect(() => {
    const delay = window.matchMedia("(max-width: 767px)").matches ? 650 : 120;
    const timer = window.setTimeout(() => setShouldLoad(true), delay);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady || reducedMotion) return;

    const desktopPointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!desktopPointer.matches) return;

    let frame = 0;
    let latestEvent: PointerEvent | null = null;

    function relayPointerMove(event: PointerEvent) {
      if (!event.isTrusted) return;
      latestEvent = event;

      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const source = latestEvent;
        if (source) dispatchSplinePointer(source.clientX, source.clientY, source);
      });
    }

    window.addEventListener("pointermove", relayPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", relayPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isReady, reducedMotion]);

  useEffect(() => {
    if (!isReady || reducedMotion) return;

    const mobileMotion = window.matchMedia("(hover: none) and (pointer: coarse)");
    if (!mobileMotion.matches || typeof DeviceOrientationEvent === "undefined") return;

    type PermissionDeviceOrientationEvent = typeof DeviceOrientationEvent & {
      requestPermission?: () => Promise<"granted" | "denied">;
    };

    const orientationEvent = DeviceOrientationEvent as PermissionDeviceOrientationEvent;
    if (typeof orientationEvent.requestPermission === "function") {
      setNeedsMotionPermission(true);
      return;
    }

    setMotionEnabled(true);
  }, [isReady, reducedMotion]);

  useEffect(() => {
    if (!motionEnabled || reducedMotion) return;

    let frame = 0;
    let latestOrientation: DeviceOrientationEvent | null = null;
    let originBeta: number | null = null;
    let originGamma: number | null = null;
    let smoothedX = window.innerWidth / 2;
    let smoothedY = window.innerHeight / 2;

    function relayOrientation(event: DeviceOrientationEvent) {
      latestOrientation = event;
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const orientation = latestOrientation;
        if (!orientation || orientation.beta === null || orientation.gamma === null) return;

        originBeta ??= orientation.beta;
        originGamma ??= orientation.gamma;

        const gammaDelta = Math.max(-25, Math.min(25, orientation.gamma - originGamma));
        const betaDelta = Math.max(-25, Math.min(25, orientation.beta - originBeta));
        const targetX = window.innerWidth * (0.5 + gammaDelta / 50);
        const targetY = window.innerHeight * (0.5 + betaDelta / 50);
        smoothedX += (targetX - smoothedX) * 0.22;
        smoothedY += (targetY - smoothedY) * 0.22;
        dispatchSplinePointer(smoothedX, smoothedY);
      });
    }

    window.addEventListener("deviceorientation", relayOrientation, true);
    return () => {
      window.removeEventListener("deviceorientation", relayOrientation, true);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [motionEnabled, reducedMotion]);

  async function enableDeviceMotion() {
    type PermissionDeviceOrientationEvent = typeof DeviceOrientationEvent & {
      requestPermission?: () => Promise<"granted" | "denied">;
    };

    try {
      const orientationEvent = DeviceOrientationEvent as PermissionDeviceOrientationEvent;
      const permission = await orientationEvent.requestPermission?.();
      if (permission === "granted") {
        setMotionEnabled(true);
        setNeedsMotionPermission(false);
      }
    } catch {
      setNeedsMotionPermission(true);
    }
  }

  return (
    <div className="sa-hero-spline-stage absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="sa-hero-spline-fallback absolute inset-0"
        animate={{ opacity: isReady ? 0.18 : 1, scale: isReady ? 1.02 : 1.06 }}
        transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <ResilientImage
          src={fallbackImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {shouldLoad ? (
        <div className="sa-hero-spline-crop absolute">
          <motion.div
            ref={canvasHostRef}
            className="sa-hero-spline-canvas absolute inset-0"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: isReady ? 1 : 0, scale: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Spline
              scene={HERO_SPLINE_SCENE}
              renderOnDemand
              onLoad={() => setIsReady(true)}
            />
          </motion.div>
        </div>
      ) : null}

      <div className="sa-hero-spline-vignette absolute inset-0 z-[2]" />
      {needsMotionPermission ? (
        <button
          type="button"
          onClick={enableDeviceMotion}
          className="sa-motion-permission"
          aria-label="Activer le motion 3D avec l'orientation du téléphone"
        >
          <span className="sa-motion-permission-icon" />
          Motion 3D
        </button>
      ) : null}
    </div>
  );
}
