import type { CSSProperties } from "react";

type Variant = {
  swirl: string;
  spin: string;
  dir: "normal" | "reverse";
  angle: number;
  gap: number;
  drift: string;
};

// grayscale only — moving gradients + line-work, one look per case
const VARIANTS: Variant[] = [
  {
    swirl:
      "conic-gradient(from 20deg at 38% 42%, #efefef, #cdcdcd, #b4b4b4, #dedede, #c4c4c4, #efefef)",
    spin: "38s",
    dir: "normal",
    angle: 45,
    gap: 16,
    drift: "24s",
  },
  {
    swirl:
      "conic-gradient(from 220deg at 62% 46%, #f2f2f2, #d2d2d2, #bcbcbc, #e6e6e6, #cfcfcf, #f2f2f2)",
    spin: "31s",
    dir: "reverse",
    angle: -35,
    gap: 22,
    drift: "28s",
  },
  {
    swirl:
      "conic-gradient(from 120deg at 52% 56%, #ececec, #c6c6c6, #dcdcdc, #bdbdbd, #e2e2e2, #ececec)",
    spin: "45s",
    dir: "normal",
    angle: 78,
    gap: 13,
    drift: "20s",
  },
  {
    swirl:
      "conic-gradient(from 300deg at 46% 50%, #f0f0f0, #cbcbcb, #b6b6b6, #dadada, #c9c9c9, #f0f0f0)",
    spin: "27s",
    dir: "reverse",
    angle: 18,
    gap: 20,
    drift: "23s",
  },
];

export default function CaseVisual({ variant }: { variant: number }) {
  const v = VARIANTS[variant % VARIANTS.length];
  const counterDir = v.dir === "normal" ? "reverse" : "normal";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden transition-transform duration-[900ms] ease-out group-hover:scale-105">
      {/* primary moving gradient */}
      <div
        className="cv-swirl"
        style={
          {
            background: v.swirl,
            "--spin": v.spin,
            "--dir": v.dir,
          } as CSSProperties
        }
      />
      {/* counter-rotating twist for depth */}
      <div
        className="cv-swirl opacity-50 mix-blend-multiply"
        style={
          {
            background: v.swirl,
            "--spin": `calc(${v.spin} * 1.4)`,
            "--dir": counterDir,
            filter: "blur(38px)",
          } as CSSProperties
        }
      />
      {/* drifting line-work */}
      <div
        className="cv-lines"
        style={
          {
            backgroundImage: `repeating-linear-gradient(${v.angle}deg, rgba(10,10,10,0.07) 0 1px, transparent 1px ${v.gap}px)`,
            "--drift": v.drift,
          } as CSSProperties
        }
      />
      {/* soft edge vignette to keep it framed */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_55%,#00000012_100%)]" />
    </div>
  );
}
