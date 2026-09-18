"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/content";

const EDU_URL = "https://zovite-designera.vercel.app/";

const doors = [
  {
    id: "edu" as const,
    title: "Образование и эксперты",
    lead: "Школы, курсы, инфопродукты",
    cta: "→ Смотреть работы",
    href: EDU_URL,
    external: true,
    preview: "/case-1-preview.png",
  },
  {
    id: "biz" as const,
    title: "Компании и производство",
    lead: "Стройка, заводы, торговля",
    cta: "→ Смотреть работы",
    href: "/biz",
    external: false,
    preview: "/atrium-preview.png",
  },
];

const contacts = [
  { label: site.email, href: `mailto:${site.email}` },
  { label: "t.me/zovite_alinu", href: "https://t.me/zovite_alinu" },
  { label: "t.me/zovite_designera", href: "https://t.me/zovite_designera" },
  { label: "WhatsApp", href: "https://wa.me/375291022956" },
  { label: "Viber", href: "viber://chat?number=%2B375291022956" },
];

export default function Gate() {
  const [hover, setHover] = useState<"edu" | "biz" | null>(null);
  const preview = doors.find((d) => d.id === hover)?.preview;

  return (
    <main className="min-h-dvh bg-white text-[#171717]">
      <div className="mx-auto grid min-h-dvh max-w-[1440px] lg:grid-cols-2">
        <section className="flex flex-col justify-between px-6 py-10 sm:px-12 lg:px-16 lg:py-14">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.png"
              alt=""
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <div className="text-[17px] leading-6">{site.name}</div>
              <div className="text-[15px] leading-5 text-black/45">
                Дизайн для экспертов и\u00A0предпринимателей
              </div>
            </div>
          </div>

          <nav className="mt-16 flex flex-col gap-10 lg:mt-0" aria-label="Портфолио">
            {doors.map((d) => {
              const inner = (
                <>
                  <div className="text-[22px] leading-7 sm:text-[24px]">{d.title}</div>
                  <div className="mt-1.5 text-[16px] leading-6 text-black/45">
                    {d.lead}
                  </div>
                  <div className="mt-2 text-[15px] leading-6 text-black/45">
                    {d.cta}
                  </div>
                </>
              );
              const cls =
                "block max-w-[420px] text-left transition-opacity hover:opacity-70";
              return d.external ? (
                <a
                  key={d.id}
                  href={d.href}
                  className={cls}
                  onMouseEnter={() => setHover(d.id)}
                  onMouseLeave={() => setHover(null)}
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={d.id}
                  href={d.href}
                  className={cls}
                  onMouseEnter={() => setHover(d.id)}
                  onMouseLeave={() => setHover(null)}
                >
                  {inner}
                </Link>
              );
            })}
          </nav>
        </section>

        <section className="relative flex flex-col justify-between px-6 py-10 sm:px-12 lg:px-16 lg:py-14">
          <p className="max-w-[520px] text-[20px] leading-[1.45] sm:text-[22px]">
            Делаю визуальную упаковку для двух типов заказчиков:
            образование и эксперты — и компании в стройке,
            производстве, торговле. Сайт, презентации, соцсети.
          </p>

          <ul className="mt-12 flex flex-col gap-1 text-[20px] leading-[1.45] sm:mt-0 sm:text-[22px]">
            {contacts.map((c) => (
              <li key={c.href}>
                <a href={c.href} className="underline-offset-[5px] hover:underline">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>

          {preview && (
            <div className="pointer-events-none absolute inset-0 hidden overflow-hidden bg-white lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
