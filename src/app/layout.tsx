import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { site } from "@/lib/content";
import SmoothScroll from "@/components/SmoothScroll";
import CaseTooltip from "@/components/CaseTooltip";
import WaveHand from "@/components/WaveHand";

const CLARITY_ID = "ybinay3zm6";

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
        <Analytics />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
