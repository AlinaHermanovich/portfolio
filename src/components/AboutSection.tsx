"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { aboutIntro, aboutServices, stats } from "@/lib/content";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.45, margin: "0px 0px -12% 0px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

function Counter({ value, start }: { value: string; start: boolean }) {
  const num = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const dur = 1300;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1, 1 - p);
      setN(Math.round(eased * num));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, num]);

  return (
    <span className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}
