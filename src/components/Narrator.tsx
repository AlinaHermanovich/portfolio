"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { projects } from "@/lib/content";
import TypewriterText from "./TypewriterText";
import CaseFrame from "./CaseFrame";

const NAME = "Привет, я Алина";
const HERO_REST =
  "— дизайнер и маркетолог для экспертов и предпринимателей.";

// continuation per case: "and this is how I …"
const caseRest = (title: string) =>
  `and this is how ${title.replace(/^How\s+/i, "")}`;

// scroll weights: tiny hero, then one per case (no in-pin about beat)
const WEIGHTS = [0.15, ...projects.map(() => 1)];
const TOTAL = WEIGHTS.reduce((a, b) => a + b, 0);
const BOUNDS = WEIGHTS.reduce<number[]>(
  (acc, w) => [...acc, acc[acc.length - 1] + w / TOTAL],
  [0]
);
const CASES_START = BOUNDS[1]; // end of hero

export default function Narrator() {
  const ref = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState(0);
  const [offset, setOffset] = useState(0);
  const [state, setState] = useState(0);

  const rests = useMemo(
    () => [HERO_REST, ...projects.map((p) => caseRest(p.title))],
    []
  );

  useEffect(() => {
    const measure = () => {
      const row = rowRef.current;
      if (!row) return;
      setRange(Math.max(0, row.scrollWidth - window.innerWidth));
      setOffset(window.innerWidth * 0.14);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    let s = 0;
    for (let i = 0; i < WEIGHTS.length; i++) if (v >= BOUNDS[i]) s = i;
    setState(s);
  });

  const x = useTransform(
    scrollYProgress,
    [0, CASES_START, 1],
    [offset, 0, -range]
  );

  return (
    <section
      id="top"
      ref={ref}
      className="relative"
      style={{ height: `${TOTAL * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-24">
        <div className="shell w-full">
                    <h1 className="display t-h1 min-h-[3.3em] max-w-[900px]">
            <span className="text-fg">{NAME}</span>
            {state === 0 ? (
              <span className="text-fg-dim">
                {" "}
                — дизайнер и маркетолог для экспертов и предпринимателей.
              </span>
            ) : (
              <>
                {" "}
                <span className="text-fg-dim">
                  <TypewriterText text={rests[state]} />
                </span>
              </>
            )}
          </h1>
        </div>

        <div className="relative mt-6 flex-1">
          <motion.div
            ref={rowRef}
            style={{ x }}
            className="flex h-full gap-6 pl-[clamp(1.25rem,4vw,3.5rem)] pr-[12vw]"
          >
            {projects.map((p, i) => (
              <Link
                key={p.client}
                href={`/work/${p.slug}`}
                data-cursor-label={p.cta}
                className="group h-full w-[84vw] shrink-0 sm:w-[76vw]"
              >
                <CaseFrame
                  video={p.video}
                  variant={i}
                  client={p.client}
                  year={p.year}
                  color
                />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
