"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { concepts } from "@/lib/content";

export default function ConceptsStrip() {
  const slides = concepts.slides;
  const [i, setI] = useState(0);
  const s = slides[i];
  const prevSlide = slides[(i - 1 + slides.length) % slides.length];
  const nextSlide = slides[(i + 1) % slides.length];

  const prev = () => setI((n) => (n === 0 ? slides.length - 1 : n - 1));
  const next = () => setI((n) => (n === slides.length - 1 ? 0 : n + 1));

  const onDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const power = info.offset.x + info.velocity.x * 0.25;
    if (power < -70) next();
    else if (power > 70) prev();
  };

  return (
    <section
      id="concepts"
      data-cursor-grab
      className="relative overflow-x-clip py-16 sm:py-24 lg:pt-[320px] lg:pb-[220px]"
    >
      <button
        type="button"
        onClick={prev}
        className="absolute top-[320px] bottom-[220px] left-0 z-10 hidden w-[51px] overflow-hidden lg:block"
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
        className="absolute top-[320px] bottom-[220px] right-0 z-10 hidden w-[51px] overflow-hidden lg:block"
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
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="flex flex-col lg:order-1">
            <div className="min-h-[148px] lg:min-h-[200px]">
              <h2 className="display t-h2 mb-5 max-w-[520px] text-fg">
                {s.title}
              </h2>
              <p className="max-w-[460px] text-[17px] leading-7 text-fg-dim">
                {s.body}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-12 lg:mt-auto">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Назад"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F5F5F5] text-[#171717] hover:bg-[#E8E8E8]"
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
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F5F5F5] text-[#171717] hover:bg-[#E8E8E8]"
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
                    className={`h-[6px] w-8 cursor-pointer rounded-full ${
                      n === i
                        ? "bg-[#0A0A0A]"
                        : "bg-[#F5F5F5] hover:bg-[#D4D4D4]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative order-first overflow-hidden rounded-[4px] border border-[#F4F4F4] bg-bg-elev lg:order-2">
            <motion.div
              className="flex"
              drag="x"
              dragElastic={0.18}
              dragMomentum
              onDragEnd={onDragEnd}
              animate={{ x: `calc(-${i} * 100%)` }}
              transition={{ type: "spring", stiffness: 260, damping: 32 }}
            >
              {slides.map((slide) => (
                <div key={slide.title} className="w-full shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    draggable={false}
                    className="aspect-[16/9] w-full select-none object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
