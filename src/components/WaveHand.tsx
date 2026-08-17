"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "motion/react";

/**
 * A waving hand that follows the cursor while hovering any [data-wave] element
 * (the nav wordmark). The default arrow cursor is hidden there via CSS.
 */
export default function WaveHand() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const evaluate = (cx: number, cy: number) => {
      const el = (document.elementFromPoint(cx, cy) as HTMLElement | null)?.closest(
        "[data-wave]"
      );
      setActive(!!el);
    };
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      last.current = { x: e.clientX, y: e.clientY };
    };

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
      className="pointer-events-none fixed left-0 top-0 z-[95]"
      style={{ x, y }}
    >
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="-ml-[18px] -mt-[6px] text-fg"
          >
            <motion.svg
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transformOrigin: "45% 92%" }}
              animate={{ rotate: [0, 16, -6, 16, -6, 0] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                repeatDelay: 0.25,
                ease: "easeInOut",
              }}
            >
              <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
              <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
