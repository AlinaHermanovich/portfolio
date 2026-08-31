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
      const eased = 1 - Math.pow(1 - p, 3);
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

export default function AboutSection() {
  const bandRef = useRef<HTMLDivElement>(null);
  const bandInView = useInView(bandRef, {
    once: true,
    amount: 0.45,
    margin: "0px 0px -12% 0px",
  });

  return (
    <section id="about" className="relative py-24 sm:py-36">
      <div className="shell">
        <motion.h2 {...reveal} className="display t-h2 max-w-3xl">
          <span className="text-fg">Коротко обо{"\u00A0"}мне,</span>
          <span className="text-fg-dim ml-2">цифры и{"\u00A0"}суть.</span>
        </motion.h2>

        <div
          ref={bandRef}
          className="mt-14 grid grid-cols-2 gap-y-10 py-4 sm:grid-cols-4 sm:gap-y-0"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45, margin: "0px 0px -12% 0px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={i !== 0 ? "sm:border-l sm:border-line sm:pl-8" : ""}
            >
              <div className="display t-h1">
                <Counter value={s.value} start={bandInView} />
              </div>
              <div className="eyebrow mt-4 text-fg-dim">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-4">
          <motion.div {...reveal} className="sm:col-span-2 sm:pr-8">
            <p className="max-w-md text-fg-dim">{aboutIntro}</p>
            <a
              href="https://t.me/zovite_alinu"
              target="_blank"
              rel="noreferrer"
              data-cursor
              className="eyebrow mt-9 inline-flex items-center rounded-full bg-accent px-6 py-3.5 text-accent-ink transition-colors hover:bg-fg-dim"
            >
              Написать в Telegram
            </a>
          </motion.div>

           <motion.div {...reveal} className="sm:col-span-2">
          >
            <ul className="space-y-3">
              {aboutServices.map((item) => (
                <li key={item} className="border-b border-line pb-3 text-fg">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
