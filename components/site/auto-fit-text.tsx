"use client";

import { createElement, useLayoutEffect, useRef } from "react";

type AutoFitTextProps = {
  as?: "h1" | "h2" | "h3" | "p";
  children: React.ReactNode;
  className?: string;
  maxLines?: number;
  minFontSize?: number;
};

export function AutoFitText({
  as = "h2",
  children,
  className = "",
  maxLines = 2,
  minFontSize = 18
}: AutoFitTextProps) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    let lastWidth = -1;

    function fit() {
      if (!element) return;
      const containerWidth = element.parentElement?.clientWidth || element.clientWidth;
      if (containerWidth === lastWidth) return;
      lastWidth = containerWidth;

      element.style.fontSize = "";
      const computed = window.getComputedStyle(element);
      const initialSize = Number.parseFloat(computed.fontSize);
      let size = initialSize;

      function exceedsBounds() {
        if (!element) return false;
        const lineHeight = Number.parseFloat(window.getComputedStyle(element).lineHeight) || size;
        return (
          element.scrollWidth > element.clientWidth + 1 ||
          element.scrollHeight > lineHeight * maxLines + 2
        );
      }

      while (size > minFontSize && exceedsBounds()) {
        size -= 1;
        element.style.fontSize = `${size}px`;
      }
    }

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(element.parentElement || element);
    return () => observer.disconnect();
  }, [children, maxLines, minFontSize]);

  return createElement(
    as,
    {
      ref,
      className: `auto-fit-text ${className}`.trim()
    },
    children
  );
}
