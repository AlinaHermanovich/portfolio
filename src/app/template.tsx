"use client";

import { motion } from "motion/react";

/**
 * Page-transition curtain. template.tsx re-mounts on every navigation, so this
 * black panel starts covering the viewport and wipes up to reveal the new page.
 * It sits below the home loader (z-200), so home keeps its own intro.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[150] bg-bg"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
      />
    </>
  );
}
