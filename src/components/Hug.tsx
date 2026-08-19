"use client";

import { motion } from "motion/react";

type HugCard = {
  src?: string;
  alt: string;
  rotation: number;
  emoji: string;
  emojiClass: string;
  hoverX: number;
};

/* 1–3 — как в Echo, 4-я = копия 2-й */
const cards: HugCard[] = [
  {
    alt: "Photo 1",
    rotation: 4.6,
    emoji: "👨‍💻",
    emojiClass: "top-0 -translate-y-1/2 -right-4",
    hoverX: -226,
  },
  {
    alt: "Photo 2",
    rotation: -4,
    emoji: "🏔️",
    emojiClass: "bottom-0 translate-y-1/2 -right-4",
    hoverX: -206,
  },
  {
    alt: "Photo 3",
    rotation: 3.6,
    emoji: "🐶",
    emojiClass: "top-0 -translate-y-1/2 left-8",
    hoverX: 126,
  },
  {
    alt: "Photo 4",
    rotation: -4,
    emoji: "🏔️",
    emojiClass: "bottom-0 translate-y-1/2 -right-4",
    hoverX: -206,
  },
];

export default function Hug() {
  return (
    <section className="bg-bg py-16 sm:py-24">
      <ul className="shell flex flex-wrap items-center justify-between gap-x-4 gap-y-12">
        {cards.map((card, i) => (
          <motion.li
            key={i}
            className="relative"
            initial="idle"
            whileHover="hover"
          >
            <motion.div
              className="relative size-[min(250px,22vw)] overflow-hidden rounded-3xl bg-black/5"
              variants={{
                idle: { rotate: card.rotation },
                hover: { rotate: -card.rotation },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Фото добавим позже — пока серая заглушка */}
              {card.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={card.src}
                  alt={card.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-neutral-200" />
              )}
            </motion.div>

            <motion.div
              className={`absolute flex size-14 items-center justify-center rounded-full border border-black/5 bg-bg shadow-sm ${card.emojiClass}`}
              variants={{
                idle: { x: 0 },
                hover: { x: card.hoverX },
              }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              <span className="text-3xl">{card.emoji}</span>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
