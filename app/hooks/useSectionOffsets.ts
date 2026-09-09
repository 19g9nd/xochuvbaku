import { useState, useEffect, useRef } from "react";

export function useSectionOffsets(count: number) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [offsets, setOffsets] = useState<number[]>([]);

  useEffect(() => {
    const measure = () => {
      const tops = refs.current.map((el) => (el ? el.offsetTop : 0));
      setOffsets(tops);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [count]);

  return { refs, offsets };
}