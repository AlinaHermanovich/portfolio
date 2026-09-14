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
    <section id="concepts" className="overflow-x-hidden py-[220px]">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[51px] overflow-hidden lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={peekPrev.image}
            alt=""
            className="absolute right-0 top-0 h-[494px] w-[478px] max-w-none object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[51px] overflow-hidden lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={peekNext.image}
            alt=""
            className="absolute left-0 top-0 h-[494px] w-[478px] max-w-none object-cover"
          />
        </div>

        <div className="relative z-[2] mx-auto flex w-full max-w-[1280px] items-stretch gap-8 px-5 sm:gap-16">
          <div className="flex min-h-[494px] w-full max-w-[448px] shrink-0 flex-col justify-between">
            <div>
              <h2 className="display t-h2 text-fg">{s.title}</h2>
              <p className="mt-5 max-w-md text-fg-dim">{s.body}</p>
            </div>

            <div className="mt-8 flex items-center gap-12">
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
                    aria-label={`Go to slide ${nIdx + 1}`}
                    onClick={() => setI(nIdx)}
                    className={`h-[6px] w-8 rounded-full ${
                      nIdx === i ? "bg-[#0A0A0A]" : "bg-[#F5F5F5]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="h-[494px] w-[478px] shrink-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt={s.title}
              className="h-[494px] w-[478px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
