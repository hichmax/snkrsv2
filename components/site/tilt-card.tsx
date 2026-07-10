"use client";

import { useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  fallbackActionSelector?: string;
  intensity?: number;
  lift?: number;
  scale?: number;
};

export function TiltCard({
  children,
  className,
  fallbackActionSelector,
  intensity = 8,
  lift = -8,
  scale = 1.018
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const pressing = useRef(false);
  const pendingAction = useRef<HTMLElement | null>(null);
  const pendingPoint = useRef<{ x: number; y: number } | null>(null);
  const naturalClick = useRef(false);
  const reducedMotion = useReducedMotion();
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanTilt(media.matches);

    update();
    media.addEventListener("change", update);
    return () => {
      media.removeEventListener("change", update);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  function closestActionable(target: EventTarget | null) {
    const root = ref.current;
    if (!root || !(target instanceof HTMLElement)) return null;

    const action = target.closest<HTMLElement>("a[href], button:not(:disabled)");
    return action && root.contains(action) ? action : null;
  }

  function findActionable(target: EventTarget | null) {
    const root = ref.current;
    const closest = closestActionable(target);
    if (closest || !root || !fallbackActionSelector) return closest;

    return root.querySelector<HTMLElement>(fallbackActionSelector);
  }

  function resetTilt() {
    const element = ref.current;
    if (!element) return;

    if (frame.current) {
      window.cancelAnimationFrame(frame.current);
      frame.current = null;
    }

    delete element.dataset.tiltActive;
    element.style.setProperty("--spotlight-x", "50%");
    element.style.setProperty("--spotlight-y", "50%");
    element.style.setProperty("--tilt-rotate-x", "0deg");
    element.style.setProperty("--tilt-rotate-y", "0deg");
    element.style.setProperty("--tilt-glow-x", "50%");
    element.style.setProperty("--tilt-glow-y", "50%");
    element.style.setProperty("--tilt-lift", "0px");
    element.style.setProperty("--tilt-scale", "1");
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!canTilt || reducedMotion || pressing.current) return;

    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;
    const rotateY = (relativeX - 0.5) * intensity * 2;
    const rotateX = (0.5 - relativeY) * intensity * 1.55;
    const glowX = `${Math.round(relativeX * 100)}%`;
    const glowY = `${Math.round(relativeY * 100)}%`;

    element.dataset.tiltActive = "true";

    if (frame.current) window.cancelAnimationFrame(frame.current);
    frame.current = window.requestAnimationFrame(() => {
      element.style.setProperty("--tilt-rotate-x", `${rotateX.toFixed(2)}deg`);
      element.style.setProperty("--tilt-rotate-y", `${rotateY.toFixed(2)}deg`);
      element.style.setProperty("--tilt-glow-x", glowX);
      element.style.setProperty("--tilt-glow-y", glowY);
      element.style.setProperty("--spotlight-x", glowX);
      element.style.setProperty("--spotlight-y", glowY);
      element.style.setProperty("--tilt-lift", `${lift}px`);
      element.style.setProperty("--tilt-scale", scale.toString());
    });
  }

  function handleFocus() {
    if (!canTilt || reducedMotion) return;

    const element = ref.current;
    if (!element) return;

    element.dataset.tiltActive = "true";
    element.style.setProperty("--tilt-rotate-x", "0deg");
    element.style.setProperty("--tilt-rotate-y", "0deg");
    element.style.setProperty("--tilt-glow-x", "50%");
    element.style.setProperty("--tilt-glow-y", "30%");
    element.style.setProperty("--spotlight-x", "50%");
    element.style.setProperty("--spotlight-y", "30%");
    element.style.setProperty("--tilt-lift", `${lift}px`);
    element.style.setProperty("--tilt-scale", "1.01");
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;

    pressing.current = true;
    naturalClick.current = false;
    pendingAction.current = findActionable(event.target);
    pendingPoint.current = { x: event.clientX, y: event.clientY };
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const action = pendingAction.current;
    const point = pendingPoint.current;

    window.setTimeout(() => {
      pressing.current = false;
    }, 80);

    if (!action || !point) {
      pendingAction.current = null;
      pendingPoint.current = null;
      return;
    }

    const moved = Math.hypot(event.clientX - point.x, event.clientY - point.y);
    window.setTimeout(() => {
      if (!naturalClick.current && moved < 12 && action.isConnected) {
        action.click();
      }

      pendingAction.current = null;
      pendingPoint.current = null;
      naturalClick.current = false;
    }, 0);
  }

  function handleClickCapture(event: React.MouseEvent<HTMLDivElement>) {
    const clickedAction = closestActionable(event.target);
    naturalClick.current = Boolean(
      !pendingAction.current ||
        clickedAction === pendingAction.current ||
        (clickedAction && pendingAction.current.contains(clickedAction))
    );
  }

  return (
    <div
      ref={ref}
      className={`premium-tilt-card ${className || ""}`}
      data-tilt-ready={canTilt && !reducedMotion ? "true" : undefined}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClickCapture={handleClickCapture}
      onBlur={resetTilt}
      onFocus={handleFocus}
    >
      <div className="premium-tilt-surface">{children}</div>
    </div>
  );
}
