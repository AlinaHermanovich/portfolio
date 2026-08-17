"use client";

import { useEffect, useRef } from "react";

export default function CaseVideo({
  src,
  color = false,
}: {
  src: string;
  color?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;

    // only play the video while it's on screen (saves decoding the 4K clip)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) el.play().catch(() => {});
          else el.pause();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={`h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 ${
        color ? "" : "grayscale"
      }`}
    />
  );
}
