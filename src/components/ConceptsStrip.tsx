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
    <section
      id="concepts"
      className="relative overflow-x-clip pt-[320px] pb-[220px]"
    >
      <div className="shell">
        <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="relative z-10 flex flex-col justify-between">
            <div>
              <h2 className="display t-h2 mb-5 max-w-[520px] text-fg">
                {s.title}
              </h2>
              <p className="max-w-[460px] text-[17px] leading-7 text-fg-dim">
                {s.body}
              </p>
            </div>

            <div className="mt-10 flex items-center gap-12 lg:mt-0">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Назад"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] text-[#171717]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Дальше"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] text-[#171717]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                {slides.map((_, n) => (
                  <button
                    key={n}
                    type="button"
                    aria-label={`Go to slide ${n + 1}`}
                    onClick={() => setI(n)}
                    className={`h-[6px] w-8 rounded-full ${
                      n === i ? "bg-[#0A0A0A]" : "bg-[#F5F5F5]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-0">
            <div
              className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              style={{
                transform: `translate3d(calc(-${i} * (100% + 1.5rem)), 0, 0)`,
              }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.title}
                  className="w-full shrink-0 overflow-hidden rounded-[4px] border border-[#F4F4F4] bg-bg-elev"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
