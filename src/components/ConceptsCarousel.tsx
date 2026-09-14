"use client";

import { useState } from "react";
import { concepts } from "@/lib/concepts";

function Arrow({ dir }: { dir: "left" | "right" }) {
  const d =
    dir === "right" ? "M5 12h14M13 6l6 6-6 6" : "M19 12H5M11 6l-6 6 6 6";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ConceptsCarousel() {
  const [index, setIndex] = useState(0);
  const n = concepts.length;
  const prev = () => setIndex((i) => (i - 1 + n) % n);
  const next = () => setIndex((i) => (i + 1) % n);

  return (
    <section id="concepts" className="relative overflow-hidden pb-16 pt-8 sm:pb-24">
      <div className="relative h-[420px] sm:h-[560px] lg:h-[608px]">
        <div
          className="absolute top-0 flex h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            left: "50%",
            width: `${n * 100}%`,
            transform: `translateX(calc(-50% - ${index} * (100% / ${n}) + 50% / ${n}))`,
          }}
        >
          {concepts.map((slide, i) => {
            const active = i === index;
            return (
              <article
                key={slide.id}
                className="flex h-full shrink-0 items-start gap-8 px-5 sm:gap-16 sm:px-8"
                style={{ width: `${100 / n}%`, maxWidth: "100vw" }}
              >
                <div className="mx-auto flex h-full w-full max-w-[1280px] items-start gap-8 sm:gap-16">
                  <div className="flex w-[min(448px,42%)] shrink-0 flex-col items-start pt-0">
                    <h2 className="display t-h2 text-fg">{slide.title}</h2>
                    <p className="mt-6 max-w-[448px] text-[16px] leading-[26px] text-fg-dim">
                      {slide.text}
                    </p>
                  </div>
                  <div
                    className={`relative min-h-[240px] min-w-0 flex-1 overflow-hidden transition-opacity duration-500 ${
                      active ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="shell mt-6 flex items-center gap-10">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="\u041d\u0430\u0437\u0430\u0434"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/20 text-fg transition-colors hover:border-fg"
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="\u0412\u043f\u0435\u0440\u0451\u0434"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/20 text-fg transition-colors hover:border-fg"
          >
            <Arrow dir="right" />
          </button>
        </div>
        <div className="flex items-center gap-2" role="tablist" aria-label="\u0421\u043b\u0430\u0439\u0434\u044b">
          {concepts.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`\u0421\u043b\u0430\u0439\u0434 ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-[2px] w-5 transition-colors ${
                i === index ? "bg-fg" : "bg-fg/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
