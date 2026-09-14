"use client";

import { useState } from "react";
import { concepts } from "@/lib/content";

export default function ConceptsStrip() {
  const slides = concepts.slides;
  const [i, setI] = useState(0);
  const n = slides.length;

  const prev = () => setI((x) => (x === 0 ? n - 1 : x - 1));
  const next = () => setI((x) => (x === n - 1 ? 0 : x + 1));

  const s = slides[i];
  const peekPrev = slides[(i - 1 + n) % n];
  const peekNext = slides[(i + 1) % n];

  return (
    <section id="concepts" className="overflow-x-hidden pb-20 pt-10 sm:pb-28">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(12vw,140px)] overflow-hidden opacity-40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={peekPrev.image}
            alt=""
            className="absolute right-0 top-0 h-full w-[280px] object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[min(12vw,140px)] overflow-hidden opacity-40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={peekNext.image}
            alt=""
            className="absolute left-0 top-0 h-full w-[280px] object-cover"
          />
        </div>

        <div className="shell relative z-[2] grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <h2 className="display t-h2 max-w-[520px] text-fg">{s.title}</h2>
            <p className="mt-6 max-w-[460px] text-[17px] leading-7 text-fg-dim">
              {s.body}
            </p>
          </div>

          <div className="overflow-hidden rounded-[4px] bg-bg-elev">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt={s.title}
              className="aspect-[4/3] w-full object-cover lg:aspect-[588/608] lg:max-h-[608px]"
            />
          </div>
        </div>
      </div>

      <div className="shell mt-8 flex items-center gap-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Назад"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/25 text-fg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M11 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Дальше"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/25 text-fg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2">
          {slides.map((_, nIdx) => (
            <button
              key={nIdx}
              type="button"
              aria-label={`Слайд ${nIdx + 1}`}
              onClick={() => setI(nIdx)}
              className={`h-[2px] w-5 ${
                nIdx === i ? "bg-fg" : "bg-fg/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
