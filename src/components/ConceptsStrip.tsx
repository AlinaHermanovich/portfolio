"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { concepts } from "@/lib/content";

export default function ConceptsStrip() {
  const slides = concepts.slides;
  const [i, setI] = useState(0);
  const prevSlide = slides[(i - 1 + slides.length) % slides.length];
  const nextSlide = slides[(i + 1) % slides.length];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
    duration: 36,
    dragFree: false,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setI(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="concepts"
      data-cursor-grab
      className="relative overflow-x-clip py-16 sm:py-24 lg:pt-[320px] lg:pb-[220px]"
    >
      <button
        type="button"
        onClick={prev}
        className="absolute top-[320px] bottom-[220px] left-0 z-30 hidden w-[51px] overflow-hidden lg:block"
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
        className="absolute top-[320px] bottom-[220px] right-0 z-30 hidden w-[51px] overflow-hidden lg:block"
        aria-label="Следующий"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={nextSlide.image}
          alt=""
          className="h-full w-[900px] max-w-none object-cover object-left"
        />
      </button>

      <div ref={emblaRef} className="relative z-20 overflow-hidden">
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.title}
              className="min-w-0 shrink-0 grow-0 basis-[88%] pr-5 lg:basis-full lg:pr-0"
            >
              <div className="shell">
                <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
                  <div className="lg:self-start">
                      <h2 className="display t-h2 line-clamp-2 max-w-[520px] text-fg">
                      {slide.title}
                    </h2>
                    <p className="mt-11 line-clamp-4 min-h-[6.2rem] max-w-[460px] text-[17px] leading-7 text-fg-dim">
                      {slide.body}
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-[4px] border border-[#F4F4F4] bg-bg-elev">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      draggable={false}
                      className="aspect-[16/9] w-full select-none object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shell relative z-10 mt-8 lg:pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-[220px] lg:mt-0">
        <div className="lg:pointer-events-auto lg:max-w-[calc((100%-4rem)/2.15)]">
          <div className="flex items-center gap-12">
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
                  onClick={() => emblaApi?.scrollTo(n)}
                  className={`h-[6px] w-8 cursor-pointer rounded-full ${
                    n === i ? "bg-[#0A0A0A]" : "bg-[#F5F5F5] hover:bg-[#D4D4D4]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
