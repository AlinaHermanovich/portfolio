"use client";

import { useEffect, useState } from "react";

function Arrow({ dir }: { dir: "left" | "right" }) {
  const d =
    dir === "right" ? "M5 12h14M13 6l6 6-6 6" : "M19 12H5M11 6l-6 6 6 6";
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 transition-transform duration-300 ${
        dir === "right"
          ? "group-hover:translate-x-1.5"
          : "group-hover:-translate-x-1.5"
      }`}
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SlideCarousel({
  images,
  caption,
}: {
  images: string[];
  caption?: string;
}) {
  const [index, setIndex] = useState(0);
  const [pair, setPair] = useState(false);
  const [touch, setTouch] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const sync = () => setPair(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (images.length === 0) return null;

  const step = pair ? 2 : 1;
  const prev = () =>
    setIndex((n) => (n - step + images.length) % images.length);
  const next = () => setIndex((n) => (n + step) % images.length);

  const visible = pair
    ? [images[index], images[(index + 1) % images.length]]
    : [images[index]];

  return (
    <figure className="mt-10">
      <div className="relative">
        <div className={`grid gap-6 ${pair ? "grid-cols-2" : "grid-cols-1"}`}>
          {visible.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="aspect-video overflow-hidden rounded-[4px] border border-[#F4F4F4] bg-bg-elev"
              onTouchStart={(e) => setTouch(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touch === null) return;
                const dx = e.changedTouches[0].clientX - touch;
                if (dx > 40) prev();
                if (dx < -40) next();
                setTouch(null);
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={caption ?? "Слайд"}
                className="h-full w-full object-cover object-top"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          className="group absolute left-0 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-fg"
          // className="group absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#F4F4F4] bg-bg text-fg"
          aria-label="Назад"
        >
          <Arrow dir="left" />
        </button>
        <button
          type="button"
          onClick={next}
          className="group absolute right-0 top-1/2 z-10 flex translate-x-1/2 -translate-y-1/2 items-center justify-center text-fg"
          // className="group absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#F4F4F4] bg-bg text-fg"
          aria-label="Вперёд"
        >
          <Arrow dir="right" />
        </button>
      </div>
      {caption && (
        <figcaption className="eyebrow mt-3 text-fg-faint">{caption}</figcaption>
      )}
    </figure>
  );
}
