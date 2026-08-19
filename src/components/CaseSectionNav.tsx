"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "site", label: "Сайт" },
  { id: "proposal", label: "КП" },
  { id: "decks", label: "Презентации" },
  { id: "workbook", label: "Тетрадь" },
  { id: "promo", label: "Реклама" },
];

export default function CaseSectionNav() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const line = () => window.innerHeight * 0.35;
    const onScroll = () => {
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line()) current = s.id;
      }
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
      <div className="shell flex items-center gap-6 py-3.5">
        <nav className="flex items-center gap-x-7 overflow-x-auto overflow-y-hidden pb-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span className="eyebrow shrink-0 text-fg-faint">Разделы</span>
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
      </div>
    </div>
  );
}
