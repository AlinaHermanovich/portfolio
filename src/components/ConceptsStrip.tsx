"use client";

import { useState } from "react";
import { concepts } from "@/lib/content";

export default function ConceptsStrip() {
  const slides = concepts.slides;
  const [i, setI] = useState(0);
  const s = slides[i];
  const prevSlide = slides[(i - 1 + slides.length) % slides.length];
  const nextSlide = slides[(i + 1) % slides.length];

  const prev = () => setI((n) => (n === 0 ? slides.length - 1 : n - 1));
  const next = () => setI((n) => (n === slides.length - 1 ? 0 : n + 1));

  return (
    <section id="concepts" className="relative overflow-x-clip py-[220px]">
      <button
        type="button"
        onClick={prev}
        className="absolute top-[220px] bottom-[220px] left-0 z-10 w-[51px] overflow-hidden"
        aria-label="Предыдущий"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={prevSlide.image}
          alt=""
          className="h-full w-[900px] max-w-none object-cover object-right"
        />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute top-[220px] bottom-[220px] right-0 z-10 w-[51px] overflow-hidden"
        aria-label="Следующий"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={nextSlide.image}
          alt=""
          className="h-full w-[900px] max-w-none object-cover object-left"
        />
      </button>

      <div className="shell">
        <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="flex flex-col justify-between">
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

          <div className="w-full overflow-hidden rounded-[4px] border border-[#F4F4F4] bg-bg-elev">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt={s.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
