"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

const LINKS = [
  { label: "Письмо на почту", href: "mailto:box.lid@mail.ru" },
  { label: "Написать в Telegram", href: "https://t.me/zovite_alinu" },
  { label: "WhatsApp", href: "https://wa.me/375291022956" },
  { label: "Viber", href: "viber://chat?number=%2B375291022956" },
  {
    label: "Telegram-канал",
    href: "https://t.me/zovite_designera",
    avatar: true,
  },
];

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[180] flex items-center justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal
            aria-labelledby="contact-title"
            className="w-[min(100%,20.5rem)] rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_10px_-6px_rgba(0,0,0,0.10),0_20px_25px_-5px_rgba(0,0,0,0.10)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="contact-title" className="mb-3 text-[22px] leading-6 text-fg">
              Напишите мне 💬
            </h2>

            <ul className="flex flex-col gap-2">
              {LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex h-7 items-center justify-between gap-2 text-[17px] leading-[26px] text-black/60 underline decoration-black/25 underline-offset-2 transition-colors hover:text-black hover:decoration-black"
                  >
                    <span>{item.label}</span>
                    <span className="hidden w-6 shrink-0 items-center justify-end group-hover:flex max-md:hidden">
                      {item.avatar ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src="/avatar.png"
                          alt=""
                          width={24}
                          height={24}
                          className="size-6 rounded-full object-cover"
                        />
                      ) : (
                        <Arrow />
                      )}
                    </span>
                  </a>
                </li>
              ))}

              <li>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-7 w-full items-center justify-between gap-2 text-left text-sm leading-5 text-black/50 transition-colors hover:text-black"
                >
                  Попозже напишу
                  <span className="grid size-4 place-items-center text-black/50">
                    ×
                  </span>
                </button>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
