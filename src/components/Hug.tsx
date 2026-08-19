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
      if (accumulated.current + elapsed >= 3000) {
        setShowSecret(true);
        unlocked.current = true;
        if (timer.current) {
          clearInterval(timer.current);
          timer.current = null;
        }
      }
    }, 100);
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
    <section className="relative bg-bg py-16 sm:py-24">
      <AnimatePresence>
        {showSecret && (
          <motion.div
            className="absolute left-1/2 top-6 z-50 w-[min(100%,24rem)] -translate-x-1/2 px-4"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="rounded-2xl border border-black/10 bg-bg p-6 text-center shadow-lg">
              <p className="text-base text-fg">
                Секретное сообщение: я открыта к новым проектам!
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-fg px-5 py-2.5 text-sm text-bg transition-opacity hover:opacity-80"
                >
                  Написать в Telegram
                </a>
                <button
                  type="button"
                  onClick={() => setShowSecret(false)}
                  className="rounded-full px-4 py-2.5 text-sm text-fg-dim transition-colors hover:text-fg"
                >
                  Продолжить смотреть
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="shell flex flex-wrap items-center justify-between gap-x-4 gap-y-12">
        {cards.map((card, i) => (
          <motion.li
            key={i}
            className="relative"
            initial="idle"
            whileHover="hover"
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
          >
            <motion.div
              className="relative size-[min(250px,22vw)] overflow-hidden rounded-3xl bg-black/5"
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
