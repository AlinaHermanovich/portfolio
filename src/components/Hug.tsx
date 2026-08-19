"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type HugCard = {
  src?: string;
  alt: string;
  rotation: number;
  emoji: string;
  emojiClass: string;
  hoverX: number;
};

const cards: HugCard[] = [
  {
    src: "/hug/photo-1.png",
    alt: "Photo 1",
    rotation: 4.6,
    emoji: "🎤",
    emojiClass: "top-0 -translate-y-1/2 -right-4",
    hoverX: -226,
  },
  {
    src: "/hug/photo-2.png",
    alt: "Photo 2",
    rotation: -4,
    emoji: "🏔️",
    emojiClass: "bottom-0 translate-y-1/2 -right-4",
    hoverX: -206,
  },
  {
    src: "/hug/photo-3.png",
    alt: "Photo 3",
    rotation: 3.6,
    emoji: "🐱",
    emojiClass: "top-0 -translate-y-1/2 left-8",
    hoverX: 126,
  },
  {
    src: "/hug/photo-4.png",
    alt: "Photo 4",
    rotation: -3.2,
    emoji: "❤️",
    emojiClass: "bottom-0 translate-y-1/2 -right-4",
    hoverX: -180,
  },
];

const TELEGRAM_URL = "https://t.me/your_username";

export default function Hug() {
  const [showSecret, setShowSecret] = useState(false);
  const accumulated = useRef(0);
  const hoverStartedAt = useRef<number | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const unlocked = useRef(false);

  const onHoverStart = useCallback(() => {
    if (unlocked.current) return;
    hoverStartedAt.current = Date.now();
    timer.current = setInterval(() => {
      if (hoverStartedAt.current === null) return;
      const elapsed = Date.now() - hoverStartedAt.current;
      if (accumulated.current + elapsed >= 1500) {
        setShowSecret(true);
        unlocked.current = true;
        if (timer.current) {
          clearInterval(timer.current);
          timer.current = null;
        }
      }
    }, 50);
  }, []);

  const onHoverEnd = useCallback(() => {
    if (hoverStartedAt.current !== null) {
      accumulated.current += Date.now() - hoverStartedAt.current;
      hoverStartedAt.current = null;
    }
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="shell relative">
        <AnimatePresence>
          {showSecret && (
            <motion.div
              className="absolute left-1/2 top-0 z-50 w-[min(100%,24rem)] -translate-x-1/2 -translate-y-[calc(100%+12px)] px-4"
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-xl">
                <p className="text-base text-black">
                  Секретное сообщение: я открыта к новым проектам!
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-black px-5 py-2.5 text-sm text-white transition-opacity hover:opacity-80"
                  >
                    Написать в Telegram
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowSecret(false)}
                    className="rounded-full px-4 py-2.5 text-sm text-black/50 transition-colors hover:text-black"
                  >
                    Продолжить смотреть
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

          <ul className="flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-4 md:gap-y-12">
          {cards.map((card, i) => (
            <motion.li
              key={i}
              className="relative"
              initial="idle"
              whileHover="hover"
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
            >
              <motion.div
                className="relative size-[min(250px,72vw)] overflow-hidden rounded-3xl bg-black/5 md:size-[min(250px,22vw)]"
                variants={{
                  idle: { rotate: card.rotation },
                  hover: { rotate: -card.rotation },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
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
                className={`absolute grid size-14 place-items-center rounded-full border border-black/5 bg-white shadow-sm ${card.emojiClass}`}
                variants={{
                  idle: { x: 0 },
                  hover: { x: card.hoverX },
                }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              >
                <span className="block text-3xl leading-none">{card.emoji}</span>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
