"use client";

import { useEffect, useRef, useState } from "react";

function commonPrefix(a: string, b: string) {
  let i = 0;
  const n = Math.min(a.length, b.length);
  while (i < n && a[i] === b[i]) i++;
  return i;
}

/**
 * Typewriter retype. When `text` changes, the differing tail backspaces away
 * (keeping the shared prefix) and the new tail types in, with a blinking caret.
 */
export default function TypewriterText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const displayRef = useRef(text);
  const target = useRef(text);

  const set = (s: string) => {
    displayRef.current = s;
    setDisplay(s);
  };

  useEffect(() => {
    if (text === target.current) return;
    target.current = text;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      set(text);
      return;
    }

    const start = displayRef.current;
    const prefix = commonPrefix(start, text);
    let len = start.length;
    let timer: ReturnType<typeof setTimeout>;

    const DEL = 6; // ms per deleted char
    const TYPE = 14; // ms per typed char

    const del = () => {
      if (len > prefix) {
        len--;
        set(start.slice(0, len));
        timer = setTimeout(del, DEL);
      } else {
        type();
      }
    };
    const type = () => {
      if (len < text.length) {
        len++;
        set(text.slice(0, len));
        timer = setTimeout(type, TYPE);
      }
    };

    del();
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <span className={className} aria-label={text}>
      {display}
      <span className="tw-caret" aria-hidden />
    </span>
  );
}
