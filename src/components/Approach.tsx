"use client";

import { motion } from "motion/react";
import { aboutPoints } from "@/lib/content";

export default function Approach() {
  return (
    <section id="approach" className="relative pb-24 pt-2 sm:pb-36">
      <div className="shell grid gap-x-14 gap-y-12 md:grid-cols-2">
        {aboutPoints.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.7,
              delay: (i % 2) * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h3 className="display t-h2">{p.title}</h3>
            <p className="mt-5 max-w-md text-fg-dim">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
