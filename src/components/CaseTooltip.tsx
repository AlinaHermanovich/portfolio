"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";

export default function CaseTooltip() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 700, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 700, damping: 40, mass: 0.5 });

  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);
  const last = useRef({ x: 0, y: 0 });
  const lastFound = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const evaluate = (cx: number, cy: number) => {
      const el = (
        document.elementFromPoint(cx, cy) as HTMLElement | null
      )?.closest<HTMLElement>("[data-cursor-label]");
      const l = el?.getAttribute("data-cursor-label") ?? "";
      if (l) {
        setLabel(l);
        lastFound.current = performance.now();
      } else if (performance.now() - lastFound.current > 140) {
        // keep the current label through the tiny gaps between cases
        setLabel("");
      }
    };

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      last.current = { x: e.clientX, y: e.clientY };
    };

    // re-check every frame so the tooltip tracks cases sliding under the cursor
    let raf = 0;
    const loop = () => {
      evaluate(last.current.x, last.current.y);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90]"
      style={{ x: sx, y: sy }}
    >
      <AnimatePresence>
        {label && (
          <motion.div
            key="tip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="eyebrow ml-5 mt-4 whitespace-nowrap rounded-full bg-fg px-4 py-2 text-bg"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
