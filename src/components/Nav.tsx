"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/lib/content";
import ContactModal from "./ContactModal";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

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
            <span className="relative flex h-1.5 w-1.5 shrink-0 -translate-y-[1px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fg opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fg" />
            </span>
            <span className="eyebrow !tracking-[0.12em] text-fg-dim">
              Открыта к проектам
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="eyebrow inline-flex items-center whitespace-nowrap rounded-full bg-accent px-5 py-3 text-accent-ink transition-colors hover:bg-fg-dim max-[400px]:px-3 max-[400px]:py-2 max-[400px]:text-[10px]"
          >
            Давайте поговорим
          </button>
          <ContactModal
            open={contactOpen}
            onClose={() => setContactOpen(false)}
          />
        </div>
      </div>
    </motion.header>
  );
}
