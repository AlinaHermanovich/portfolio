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
    <section id="concepts" className="overflow-x-hidden py-[80px] sm:py-[125px]">
      <div className="relative">
        {/* side peek — max 51px */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[51px] overflow-hidden lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={peekPrev.image}
            alt=""
            className="absolute right-0 top-0 h-full w-[588px] max-w-none object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[51px] overflow-hidden lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={peekNext.image}
            alt=""
            className="absolute left-0 top-0 h-full w-[588px] max-w-none object-cover"
          />
        </div>

        <div className="relative z-[2] mx-auto flex w-full max-w-[1280px] items-start gap-8 px-5 sm:gap-16 lg:gap-16">
          <div className="w-full max-w-[448px] shrink-0 pt-0">
            <h2
              className="text-[28px] font-medium leading-[36px] text-[#0A0A0A] sm:text-[36px] sm:leading-[45px]"
            >
              {s.title}
            </h2>
            <p className="mt-10 max-w-[448px] text-[16px] font-medium leading-[26px] text-[#737373]">
              {s.body}
            </p>
          </div>

          <div className="min-w-0 flex-1 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt={s.title}
              className="h-[min(50vw,608px)] w-full object-cover lg:h-[608px]"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-[1280px] items-center gap-12 px-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Назад"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] text-[#171717]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M11 6l-6 6 6 6"
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
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.33"
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
              className={`h-[6px] w-8 rounded-full ${
                nIdx === i ? "bg-[#0A0A0A]" : "bg-[#F5F5F5]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
