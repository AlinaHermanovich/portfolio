"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Process" },
  { id: "results", label: "Results" },
  { id: "anatomy", label: "Anatomy" },
  { id: "reflection", label: "Reflection" },
];

export default function CaseSectionNav({ liveUrl }: { liveUrl: string }) {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const line = () => window.innerHeight * 0.35;
    const onScroll = () => {
      // the last section whose top has scrolled above the threshold line is active
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line()) current = s.id;
      }
      // at the very bottom, force the last section (it may be too short to reach the line)
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
        current = SECTIONS[SECTIONS.length - 1].id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="sticky top-16 z-30 border-y border-line bg-bg/85 backdrop-blur-md">
      <div className="shell flex items-center justify-between gap-6 py-3.5">
        <nav className="flex items-center gap-x-7 overflow-x-auto overflow-y-hidden pb-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span className="eyebrow shrink-0 text-fg-faint">Quick links</span>
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`group relative shrink-0 whitespace-nowrap text-sm transition-colors ${
                active === s.id ? "text-fg" : "text-fg-dim hover:text-fg"
              }`}
            >
              {s.label}
              <span
                className={`pointer-events-none absolute -bottom-1 left-0 h-[1.5px] bg-fg transition-[width] duration-300 ease-out ${
                  active === s.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="eyebrow group inline-flex shrink-0 items-center gap-2 text-fg transition-opacity hover:opacity-70"
        >
          See live project
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path
              d="M7 17 17 7M8 7h9v9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
