"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-500 ${
        scrolled
          ? "border-b border-line bg-bg/55"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`shell flex items-center justify-between transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="flex items-center gap-3">
          <Link href="/" data-wave className="group flex items-center">
            <span className="eyebrow !tracking-[0.12em] text-fg">
              {site.name}
            </span>
          </Link>

          <span className="hidden items-center gap-1.5 sm:inline-flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fg opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fg" />
            </span>
            <span className="eyebrow !text-[0.65rem] text-fg-dim">
              Открыта к проектам
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2">
                    {/* CV — вернуть, когда будет одностраничное резюме
          <a
            href={site.cvUrl}
            download
            data-cursor
            className="eyebrow hidden items-center rounded-full border border-line-strong px-5 py-3 text-fg transition-colors hover:bg-bg-elev sm:inline-flex"
          >
            Скачать CV
          </a>
          */}

          <Link
            href="/#contact"
            className="eyebrow inline-flex items-center rounded-full bg-accent px-5 py-3 text-accent-ink transition-colors hover:bg-fg-dim"
          >
            Давайте поговорим
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
