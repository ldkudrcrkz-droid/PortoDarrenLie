import { useEffect, useRef } from "react";

/**
 * Attaches a lightweight pointer-tracking listener to `ref` and writes
 * the pointer position into CSS custom properties (--spot-x / --spot-y,
 * as percentages) on that element. Styles then use those properties to
 * drive a cursor-following glow, purely in CSS — no re-renders.
 */
export function useCursorSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      node.style.setProperty("--spot-x", `${x}%`);
      node.style.setProperty("--spot-y", `${y}%`);
    };

    const handleLeave = () => {
      node.style.setProperty("--spot-x", `50%`);
      node.style.setProperty("--spot-y", `30%`);
    };

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", handleLeave);

    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return ref;
}

/**
 * Tracks the pointer position across the whole viewport and writes it
 * into CSS custom properties on <body>, driving the global background
 * glow that follows the cursor across every section of the page.
 */
export function useGlobalCursorGlow() {
  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.body.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);
}

/**
 * Subtle cursor-reactive tilt + glow for card-style elements. Purely
 * transform/CSS-var driven so it stays smooth and cheap.
 */
export function useTilt<T extends HTMLElement>(strength = 6) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      const rotateX = (0.5 - py) * strength;
      const rotateY = (px - 0.5) * strength;

      node.style.setProperty("--tilt-x", `${rotateX}deg`);
      node.style.setProperty("--tilt-y", `${rotateY}deg`);
      node.style.setProperty("--spot-x", `${px * 100}%`);
      node.style.setProperty("--spot-y", `${py * 100}%`);
    };

    const reset = () => {
      node.style.setProperty("--tilt-x", `0deg`);
      node.style.setProperty("--tilt-y", `0deg`);
    };

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", reset);

    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", reset);
    };
  }, [strength]);

  return ref;
}
