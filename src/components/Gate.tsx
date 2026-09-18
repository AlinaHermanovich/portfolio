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
  { label: "telegram", href: "https://t.me/zovite_alinu" },
  { label: "viber", href: "viber://chat?number=%2B375291022956" },
  { label: "whatsapp", href: "https://wa.me/375291022956" },
  { label: "канал", href: "https://t.me/zovite_designera" },
];

export default function Gate() {
  const [hover, setHover] = useState<"edu" | "biz" | null>(null);
  const preview = doors.find((d) => d.id === hover)?.preview;

  return (
    <main className="min-h-dvh bg-[#0a0a0a] text-white">
      <div className="grid min-h-dvh lg:grid-cols-2">
        <section className="flex flex-col justify-between px-8 py-10 sm:px-12 lg:px-[72px] lg:py-14">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.png"
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="mt-5 text-[15px] leading-5">{site.name}</div>
            <div className="mt-1 max-w-[240px] text-[14px] leading-5 text-white/45">
              Визуальная упаковка для экспертов
              <br />
              и предпринимателей.
            </div>
          </div>

          <nav className="mt-20 flex flex-col gap-8 lg:mt-0" aria-label="Портфолио">
            {doors.map((d) => {
              const inner = (
                <>
                  <div className="text-[16px] leading-6">{d.title}</div>
                  <div className="text-[14px] leading-5 text-white/45">{d.lead}</div>
                  <div className="text-[14px] leading-5 text-white/45">{d.cta}</div>
                </>
              );
              const cls = "block max-w-[280px] text-left";
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

        <section className="relative flex flex-col justify-between border-white/10 px-8 py-10 sm:px-12 lg:border-l lg:px-[72px] lg:py-14">
          <p className="max-w-[520px] text-[22px] leading-[1.35]">
            Делаю визуальную упаковку для двух типов
            заказчиков: образование и эксперты —
            и компании в стройке, производстве, торговле.
            Сайт, презентации, соцсети.
          </p>

          <ul className="mt-16 flex flex-col text-[22px] leading-[1.45] lg:mt-0">
            {contacts.map((c) => (
              <li key={c.href}>
                <a href={c.href} className="hover:underline hover:underline-offset-[5px]">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>

          {preview && (
            <div className="pointer-events-none absolute inset-0 hidden overflow-hidden bg-[#0a0a0a] lg:block">
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
