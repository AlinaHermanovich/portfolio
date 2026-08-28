import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/content";
import SmoothScroll from "@/components/SmoothScroll";
import CaseTooltip from "@/components/CaseTooltip";
import WaveHand from "@/components/WaveHand";

const pliant = localFont({
  src: [
    { path: "./fonts/Pliant-Variable.ttf", style: "normal" },
    { path: "./fonts/Pliant-Italic-Variable.ttf", style: "italic" },
  ],
  variable: "--font-pliant",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    "Дизайн для бизнеса и экспертов: сайты, презентации и материалы. Зовите дизайнера.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Дизайн для бизнеса и экспертов: сайты, презентации и материалы. Зовите дизайнера.",
    url: "https://zovite-designera.vercel.app/",
    siteName: "Зовите дизайнера",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pliant.variable} h-full antialiased`}>
      <body className="grain min-h-full">
        <SmoothScroll />
        <CaseTooltip />
        <WaveHand />
        {children}
      </body>
    </html>
  );
}
