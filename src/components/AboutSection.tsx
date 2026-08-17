"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { experience, site, stats } from "@/lib/content";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
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
  const bandInView = useInView(bandRef, { once: true, margin: "-15%" });

  return (
    <section id="about" className="relative py-24 sm:py-36">
      <div className="shell">
        <motion.h2 {...reveal} className="display t-h2 max-w-3xl">
          <span className="text-fg">The short version,</span>{" "}
          <span className="text-fg-dim">numbers and all.</span>
        </motion.h2>

        {/* numeral achievements — full-width band, count-up, hairline dividers */}
        <div
          ref={bandRef}
          className="mt-14 grid grid-cols-2 gap-y-10 py-4 sm:grid-cols-4 sm:gap-y-0"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={i % 4 !== 0 ? "sm:border-l sm:border-line sm:pl-8" : ""}
            >
              <div className="display t-h1">
                <Counter value={s.value} start={bandInView} />
              </div>
              <div className="eyebrow mt-4 text-fg-dim">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* short CV */}
        <div className="mt-16 grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <motion.div {...reveal} className="lg:col-span-5">
            <p className="max-w-md text-fg-dim">
              Eight years turning flat pages into motion-led experiences, for
              seed-stage startups and names you already know. Independent since
              2022, working from {site.location} with teams worldwide.
            </p>

            <a
              href={site.cvUrl}
              download
              data-cursor
              className="eyebrow mt-9 inline-flex items-center rounded-full bg-accent px-6 py-3.5 text-accent-ink transition-colors hover:bg-fg-dim"
            >
              Download full CV
            </a>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {experience.map((e) => (
                <div
                  key={e.period}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-4"
                >
                  <span className="text-fg">
                    {e.title}
                    {e.company && (
                      <>
                        <span className="text-fg-faint"> @ </span>
                        <a
                          href={e.url}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-fg-faint underline-offset-2 transition-colors hover:decoration-fg"
                        >
                          {e.company}
                        </a>
                      </>
                    )}
                  </span>
                  <span className="eyebrow shrink-0 text-fg-faint">
                    {e.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
