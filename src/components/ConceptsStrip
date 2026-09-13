"use client";

import { useState } from "react";
import { concepts } from "@/lib/content";

export default function ConceptsStrip() {
  const slides = concepts.slides;
  const [i, setI] = useState(0);
  const s = slides[i];

  const prev = () => setI((n) => (n === 0 ? slides.length - 1 : n - 1));
  const next = () => setI((n) => (n === slides.length - 1 ? 0 : n + 1));

  return (
    <section id="concepts" className="shell pb-24 pt-8 sm:pb-32">
      <p className="eyebrow mb-2 text-fg-dim">{concepts.title}</p>
      <p className="mb-10 max-w-[520px] text-[17px] leading-7 text-fg-dim">
        {concepts.lead}
      </p>

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex min-h-[280px] flex-col justify-between">
          <div>
            <h2 className="display t-h2 mb-5 max-w-[520px] text-fg">{s.title}</h2>
            <p className="max-w-[460px] text-[17px] leading-7 text-fg-dim">
              {s.body}
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Назад"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-fg hover:bg-fg hover:text-bg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5M11 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Дальше"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-fg hover:bg-fg hover:text-bg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="ml-2 flex gap-1.5">
              {slides.map((_, n) => (
                <span
                  key={n}
                  className={`h-1 rounded-full ${
                    n === i ? "w-6 bg-fg" : "w-3 bg-black/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[4px] border border-[#F4F4F4] bg-bg-elev">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.image}
            alt={s.title}
            className="aspect-square w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
