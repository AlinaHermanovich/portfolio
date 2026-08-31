"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { site } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      window.prompt("Скопируйте почту", site.email);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

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
            <button
              type="button"
              onClick={copyEmail}
              className="group inline-flex items-center text-white/60 transition-colors hover:text-white"
            >
              {site.email}
                 <span className="ml-1 inline-flex size-4 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={copied ? "/check-check.svg" : "/copy.svg"}
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 brightness-0 invert"
                />
              </span>
            </button>
            <a
              href="https://t.me/zovite_alinu"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Написать в Telegram
            </a>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
