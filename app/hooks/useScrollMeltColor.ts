// hooks/useScrollMeltColor.ts
import { useState, useEffect } from "react";
import { ColorStop } from "../types";

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

export function useScrollMeltColor(colors: ColorStop[], offsets: number[]) {
  const [rgb, setRgb] = useState<ColorStop>(colors[0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || offsets.length < 2) return;
    let ticking = false;

    const update = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let i = 0;
      
      while (i < offsets.length - 2 && y > offsets[i + 1]) i++;
      
      const safeI = Math.min(i, colors.length - 2);
      
      const segStart = offsets[safeI];
      const segEnd = offsets[safeI + 1] ?? segStart + 1;
      const t = Math.min(1, Math.max(0, (y - segStart) / (segEnd - segStart)));

      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const from = colors[safeI];
      const to = colors[Math.min(safeI + 1, colors.length - 1)] ?? colors[safeI];
      
      setRgb([
        lerp(from[0], to[0], eased),
        lerp(from[1], to[1], eased),
        lerp(from[2], to[2], eased),
      ]);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [colors, offsets, isClient]);

  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}