"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { concepts } from "@/lib/content";

export default function ConceptsStrip() {
  const slides = concepts.slides;
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const startX = useRef<number | null>(null);
  const s = slides[i];
  const prevSlide = slides[(i - 1 + slides.length) % slides.length];
  const nextSlide = slides[(i + 1) % slides.length];

  const go = (next: number, d: number) => {
    setDir(d);
    setI(next);
  };
  const prev = () => go(i === 0 ? slides.length - 1 : i - 1, -1);
  const next = () => go(i === slides.length - 1 ? 0 : i + 1, 1);

  const onDown = (x: number) => {
    startX.current = x;
  };
  const onUp = (x: number) => {
    if (startX.current === null) return;
    const dx = x - startX.current;
    startX.current = null;
    if (dx > 50) prev();
    if (dx < -50) next();
  };

  return (
    <section id="concepts" className="relative overflow-x-clip pt-[320px] pb-[220px]">
      <button
        type="button"
        onClick={prev}
        className="absolute top-[320px] bottom-[220px] left-0 z-10 w-[51px] overflow-hidden"
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
        className="absolute top-[320px] bottom-[220px] right-0 z-10 w-[51px] overflow-hidden"
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
              <h2 className="display t-h2 mb-5 max-w-[520px] text-fg">{s.title}</h2>
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
                    onClick={() => go(n, n > i ? 1 : -1)}
                    className={`h-[6px] w-8 rounded-full ${
                      n === i ? "bg-[#0A0A0A]" : "bg-[#F5F5F5]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative w-full cursor-grab overflow-hidden rounded-[4px] border border-[#F4F4F4] bg-bg-elev active:cursor-grabbing"
            onPointerDown={(e) => onDown(e.clientX)}
            onPointerUp={(e) => onUp(e.clientX)}
            onPointerCancel={() => {
              startX.current = null;
            }}
          >
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              <motion.img
                key={i}
                src={s.image}
                alt={s.title}
                draggable={false}
                custom={dir}
                initial={{ x: dir * 48, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: dir * -48, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[16/9] w-full select-none object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
