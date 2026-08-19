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
  title: `${site.name}, ${site.role}`,
  description:
    "Portfolio of Nova Reyes, a web & interaction designer crafting immersive, motion-led digital experiences.",
  icons: {
    icon: "/icon.png",
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
