"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
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
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
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

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[220] flex items-center justify-center bg-black/50 p-4"
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
            <h2
              id="contact-title"
              className="mb-3 text-[22px] leading-6 text-fg"
            >
              Напишите мне 💬
            </h2>

            <ul className="flex flex-col gap-2">
              {LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex min-h-8 items-center justify-between gap-3 text-[17px] leading-[26px] text-black/60 underline decoration-black/25 underline-offset-2 transition-colors hover:text-black hover:decoration-black"
                  >
                    <span>{item.label}</span>
                    <span className="invisible flex h-6 w-6 shrink-0 items-center justify-center group-hover:visible max-md:hidden">
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
                  <button
                  type="button"
                  onClick={onClose}
                  className="group flex min-h-8 w-full items-center justify-between gap-3 text-left text-sm leading-5 text-black/50 transition-colors hover:text-black"
                >
                  Попозже напишу
                  <span className="invisible flex h-6 w-6 shrink-0 items-center justify-center text-[22px] leading-none text-black/50 group-hover:visible max-md:hidden">
                    ×
                  </span>
                </button>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
