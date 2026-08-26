"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { site } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden py-24 text-bg sm:py-40"
    >
      <motion.div style={{ scale }} className="shell relative text-center">
        <a
          href={`mailto:${site.email}`}
          className="display t-h1 inline-block transition-opacity hover:opacity-70"
        >
          Давайте создадим что-то крутое.
        </a>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="text-white/60 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
