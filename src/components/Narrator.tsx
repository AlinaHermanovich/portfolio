"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/lib/content";
import TypewriterText from "./TypewriterText";
import CaseFrame from "./CaseFrame";

const NAME = "Привет, я Алина";

export default function Narrator() {
  return (
    <section id="top" className="relative pt-28 pb-8 sm:pt-32">
      <div className="shell">
        <h1 className="display t-h1 max-w-[900px]">
          <span className="text-fg">{NAME}</span>
          <span className="text-fg-dim">
            {" "}
            — дизайнер и маркетолог для экспертов и предпринимателей.
          </span>
        </h1>
      </div>

      <div id="work" className="mt-16 flex flex-col gap-24 sm:mt-24 sm:gap-32">
        {projects.map((p, i) => (
          <CaseBlock key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function CaseBlock({
  project: p,
  index: i,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [play, setPlay] = useState(0);
  const line = p.headline ?? p.title;

  useEffect(() => {
    if (i !== 0) return;
    const t = setTimeout(() => setPlay(1), 2800);
    return () => clearTimeout(t);
  }, [i]);

  return (
    <motion.article
      className="shell"
      onViewportEnter={() => setPlay((n) => n + 1)}
      onViewportLeave={() => setPlay(0)}
      viewport={{ amount: 0.35 }}
    >
      <h2 className="display t-h2 mb-6 min-h-[2.4em] max-w-[900px] text-fg-dim">
        {play > 0 ? <TypewriterText key={play} text={line} /> : "\u00A0"}
      </h2>

      <Link
        href={`/work/${p.slug}`}
        data-cursor-label={p.cta}
        className="group block h-[70vh] min-h-[420px] w-full"
      >
        <CaseFrame
          video={play > 0 ? p.video : undefined}
          preview={p.preview}
          previewMobile={p.previewMobile}
          variant={i}
          client={p.client}
          year={p.year}
          color
        />
      </Link>
    </motion.article>
  );
}
