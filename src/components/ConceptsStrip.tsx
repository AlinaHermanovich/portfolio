"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { concepts } from "@/lib/content";
import { motion } from "motion/react";

export default function ConceptsStrip() {
  const slides = concepts.slides;
  const [i, setI] = useState(0);
  const [review, setReview] = useState<string | null>(null);
  const [yt, setYt] = useState<string | null>(null);
  const prevSlide = slides[(i - 1 + slides.length) % slides.length];
  const nextSlide = slides[(i + 1) % slides.length];

  useEffect(() => {
    if (!yt) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setYt(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [yt]);

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
      className="relative overflow-x-clip pt-28 pb-16 sm:py-24 lg:pt-[320px] lg:pb-[220px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25, margin: "0px 0px -12% 0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
        <div ref={emblaRef} data-cursor-grab className="relative z-30 overflow-hidden pointer-events-none">
          <div className="flex">
            {slides.map((slide) => (
              <div
                key={slide.title}
                className="min-w-0 shrink-0 grow-0 basis-full pointer-events-none"
              >
                <div className="shell">
                  <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
                    <div className="pointer-events-auto lg:self-start">
                      <h2 className="display t-h2 max-w-[520px] text-fg">
                        {slide.title}
                      </h2>
                      <p className="mt-6 max-w-[520px] text-[17px] leading-7 text-fg-dim">
                        {slide.body}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                        {"href" in slide && slide.href ? (
                          <a
                            href={slide.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[17px] leading-7 text-fg-dim underline decoration-black/25 underline-offset-4 hover:text-fg hover:decoration-black"
                          >
                            {"linkLabel" in slide && slide.linkLabel
                              ? slide.linkLabel
                              : "Сайт"}
                          </a>
                        ) : null}
                        {"href2" in slide && slide.href2 ? (
                          <a
                            href={slide.href2 as string}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[17px] leading-7 text-fg-dim underline decoration-black/25 underline-offset-4 hover:text-fg hover:decoration-black"
                          >
                            {"linkLabel2" in slide && slide.linkLabel2
                              ? (slide.linkLabel2 as string)
                              : "Инстаграм"}
                          </a>
                        ) : null}
                           {"reviewImage" in slide && slide.reviewImage ? (
                          <button
                            type="button"
                            onClick={() => setReview(slide.reviewImage as string)}
                            className="text-[17px] leading-7 text-fg-dim underline decoration-black/25 underline-offset-4 hover:text-fg hover:decoration-black"
                          >
                            {"reviewLabel" in slide && slide.reviewLabel
                              ? (slide.reviewLabel as string)
                              : "Отзыв финалистки"}
                          </button>
                        ) : null}
                      </div>
                    </div>
                    <div className="pointer-events-auto overflow-hidden rounded-[4px] border border-[#F4F4F4] bg-bg-elev">
                      {"youtube" in slide && slide.youtube ? (
                        <button
                          type="button"
                          onClick={() => setYt(String(slide.youtube))}
                          className="relative block w-full"
                          aria-label={`Смотреть ${slide.title}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={slide.image}
                            alt={slide.title}
                            draggable={false}
                            className="aspect-[16/9] w-full select-none object-cover"
                          />
                          <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#0A0A0A]">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </span>
                          </span>
                        </button>
                      ) : (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={slide.image}
                          alt={slide.title}
                          draggable={false}
                          className="aspect-[16/9] w-full select-none object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="shell relative z-10 mt-8 lg:absolute lg:inset-x-0 lg:bottom-[220px] lg:mt-0">
          <div className="lg:max-w-[calc((100%-4rem)/2.15)]">
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
                {review && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4"
            onClick={() => setReview(null)}
          >
            <button
              type="button"
              aria-label="Закрыть"
              onClick={() => setReview(null)}
              className="absolute right-5 top-5 text-white"
            >
              ✕
            </button>
            <img
              src={review}
              alt="Отзыв"
              className="max-h-[85vh] max-w-[560px] rounded-[16px] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
        {yt && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setYt(null)}
          >
            <button
              type="button"
              aria-label="Закрыть"
              onClick={() => setYt(null)}
              className="absolute right-5 top-5 text-white"
            >
              ✕
            </button>
            <div
              className="aspect-video w-full max-w-[1100px]"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                title="Видео"
                src={`https://www.youtube.com/embed/${yt}?autoplay=1&rel=0`}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
