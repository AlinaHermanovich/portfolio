"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

const EMAIL = "box.lid@mail.ru";

const LINKS = [
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
  const [copied, setCopied] = useState(false);

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

  useEffect(() => {
    if (!open) setCopied(false);
  }, [open]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      window.prompt("Скопируйте почту", EMAIL);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[220] flex items-center justify-center bg-black/25 p-4"
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
              <li>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="group flex min-h-8 w-full items-center justify-between gap-3 text-left text-[17px] leading-[26px] text-black/60 transition-colors hover:text-black"
                >
                  <span>{EMAIL}</span>
                  <span className="invisible flex h-6 w-6 shrink-0 items-center justify-center group-hover:visible max-md:hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={copied ? "/check.svg" : "/copy.svg"}
                      alt=""
                      width={16}
                      height={16}
                      className="size-4"
                    />
                  </span>
                </button>
              </li>

              {LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
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
                  type="button"
                  onClick={onClose}
                  className="group flex min-h-8 w-full items-center justify-between gap-3 text-left text-sm leading-5 text-black/50 transition-colors hover:text-black"
                >
                  Попозже напишу
                  <span className="invisible flex h-6 w-6 shrink-0 items-center justify-center group-hover:visible max-md:hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/cross.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="size-4"
                    />
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
