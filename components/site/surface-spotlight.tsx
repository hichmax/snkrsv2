"use client";

import { useEffect } from "react";

const spotlightSelector = [
  ".premium-tilt-card",
  ".editorial-card",
  ".product-card",
  ".mobile-product-thumb",
  ".liquid-home-category-card",
  ".video-home-action",
  ".dark-pill",
  ".liquid-action",
  ".mobile-bottom-item",
  ".nav-link",
  ".site-nav",
  ".hero-shell",
  ".catalog-hero",
  ".catalog-hero-panel",
  ".hero-bottom-glass",
  ".statement-panel",
  ".snap-glass-card",
  ".cart-floating-button",
  ".liquid-cart-drawer",
  ".liquid-cart-item",
  ".admin-panel",
  ".liquid-glass",
  ".product-card-cart-button",
  ".size-chip",
  ".liquid-size-chip",
  ".cart-close-button"
].join(",");

function canUseSpotlight() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getSurface(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  return target.closest<HTMLElement>(spotlightSelector);
}

function ensureGlow(surface: HTMLElement) {
  const existing = surface.querySelector<HTMLSpanElement>(":scope > .surface-spotlight-glow");
  if (existing) return existing;

  const glow = document.createElement("span");
  glow.className = "surface-spotlight-glow";
  glow.setAttribute("aria-hidden", "true");
  surface.appendChild(glow);
  return glow;
}

function setSurfacePoint(surface: HTMLElement, event: PointerEvent) {
  const rect = surface.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  const glowX = `${Math.max(0, Math.min(100, x)).toFixed(1)}%`;
  const glowY = `${Math.max(0, Math.min(100, y)).toFixed(1)}%`;

  surface.style.setProperty("--spotlight-x", glowX);
  surface.style.setProperty("--spotlight-y", glowY);
  surface.style.setProperty("--tilt-glow-x", glowX);
  surface.style.setProperty("--tilt-glow-y", glowY);
}

export function SurfaceSpotlight() {
  useEffect(() => {
    if (!canUseSpotlight()) return;

    let activeSurface: HTMLElement | null = null;
    let lastEvent: PointerEvent | null = null;
    let frame: number | null = null;
    const cleanupTimers = new WeakMap<HTMLElement, number>();

    function deactivate(surface: HTMLElement | null) {
      if (!surface) return;

      surface.removeAttribute("data-surface-lit");
      const previousTimer = cleanupTimers.get(surface);
      if (previousTimer) window.clearTimeout(previousTimer);

      const timer = window.setTimeout(() => {
        surface.querySelector(":scope > .surface-spotlight-glow")?.remove();
        surface.classList.remove("surface-spotlight-host");
        surface.style.removeProperty("--spotlight-x");
        surface.style.removeProperty("--spotlight-y");
      }, 340);

      cleanupTimers.set(surface, timer);
    }

    function activate(surface: HTMLElement, event: PointerEvent) {
      if (activeSurface !== surface) {
        deactivate(activeSurface);
        activeSurface = surface;
      }

      const previousTimer = cleanupTimers.get(surface);
      if (previousTimer) window.clearTimeout(previousTimer);

      surface.classList.add("surface-spotlight-host");
      ensureGlow(surface);
      setSurfacePoint(surface, event);
      surface.setAttribute("data-surface-lit", "true");
    }

    function commitMove() {
      frame = null;
      if (!lastEvent) return;

      const surface = getSurface(lastEvent.target);
      if (!surface) {
        deactivate(activeSurface);
        activeSurface = null;
        return;
      }

      activate(surface, lastEvent);
    }

    function handlePointerMove(event: PointerEvent) {
      lastEvent = event;
      if (frame === null) {
        frame = window.requestAnimationFrame(commitMove);
      }
    }

    function handlePointerLeave() {
      deactivate(activeSurface);
      activeSurface = null;
    }

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      deactivate(activeSurface);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
    };
  }, []);

  return null;
}
