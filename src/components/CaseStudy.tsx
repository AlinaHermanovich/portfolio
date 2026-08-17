"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { CaseDetail, Project } from "@/lib/content";
import Nav from "./Nav";
import CaseFrame from "./CaseFrame";
import CaseSectionNav from "./CaseSectionNav";
import Reveal from "./Reveal";
import Footer from "./Footer";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Figure({
  caption,
  ratio = "aspect-[16/9]",
}: {
  caption: string;
  ratio?: string;
}) {
  return (
    <figure>
      <div
        className={`w-full overflow-hidden rounded-[4px] bg-bg-elev ${ratio}`}
      />
      <figcaption className="eyebrow mt-3 text-fg-faint">{caption}</figcaption>
    </figure>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <section
        id={id}
        className="shell scroll-mt-32 border-t border-line py-16 sm:py-24"
      >
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
          <h2 className="display t-h2 lg:col-span-4">{title}</h2>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </section>
    </Reveal>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  const d = dir === "right" ? "M5 12h14M13 6l6 6-6 6" : "M19 12H5M11 6l-6 6 6 6";
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 transition-transform duration-300 ${
        dir === "right"
          ? "group-hover:translate-x-1.5"
          : "group-hover:-translate-x-1.5"
      }`}
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type NavLink = { slug: string; client: string };

export default function CaseStudy({
  project,
  detail,
  prev,
  next,
}: {
  project: Project;
  detail: CaseDetail;
  prev: NavLink;
  next: NavLink;
}) {
  return (
    <>
      <Nav />
      <main className="pt-28 sm:pt-32">
        {/* case title — the same "How I…" title from the main page */}
        <header className="shell">
          <p className="eyebrow text-fg-faint">
            {project.client} / {project.category} / {project.year}
          </p>
          <h1 className="display t-h1 mt-5 max-w-4xl text-fg">
            {project.title}
          </h1>
        </header>

        {/* full-width video-in-browser cover, ~40vh (same as the home rail) */}
        <div className="mt-10 px-[clamp(1.25rem,4vw,3.5rem)]">
          <div className="h-[40vh] w-full">
            <CaseFrame video={project.video} color />
          </div>
        </div>

        {/* 4 result numbers */}
        <section className="shell mt-16 grid grid-cols-2 gap-y-10 py-4 sm:mt-24 sm:grid-cols-4 sm:gap-y-0">
          {detail.results.map((r, i) => (
            <div
              key={r.label}
              className={i % 4 !== 0 ? "sm:border-l sm:border-line sm:pl-8" : ""}
            >
              <div className="display t-h1">{r.value}</div>
              <div className="eyebrow mt-3 text-fg-dim">{r.label}</div>
            </div>
          ))}
        </section>

        {/* project info */}
        <section className="shell grid gap-x-12 gap-y-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow text-fg-faint">Timeline</p>
            <p className="mt-3">{detail.timeline}</p>
          </div>
          <div>
            <p className="eyebrow text-fg-faint">Stack</p>
            <ul className="mt-3 space-y-1">
              {detail.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-fg-faint">Responsibilities</p>
            <ul className="mt-3 space-y-1">
              {detail.responsibilities.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-fg-faint">Collaboration</p>
            <div className="mt-4 flex items-center">
              {detail.collaborators.map((c, i) => (
                <span
                  key={c}
                  title={c}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-elev text-[10px] font-medium text-fg-faint ring-2 ring-bg"
                  style={{ marginLeft: i === 0 ? 0 : "-0.7rem", zIndex: 20 - i }}
                >
                  {initials(c)}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CaseSectionNav liveUrl={detail.liveUrl} />

        {/* Overview */}
        <Section id="overview" title="Overview">
          <p className="max-w-2xl text-fg-dim">{detail.overview}</p>
        </Section>

        {/* full-width image */}
        <Reveal>
          <div className="px-[clamp(1.25rem,4vw,3.5rem)] pb-4">
            <Figure caption={detail.heroCaption} ratio="aspect-[21/9]" />
          </div>
        </Reveal>

        {/* two images side by side */}
        <Reveal>
          <div className="shell grid gap-6 py-12 sm:grid-cols-2">
            <Figure caption={detail.duo[0]} ratio="aspect-[4/3]" />
            <Figure caption={detail.duo[1]} ratio="aspect-[4/3]" />
          </div>
        </Reveal>

        {/* Process */}
        <Section id="process" title="Process">
          <p className="max-w-2xl text-fg-dim">{detail.process.body}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {detail.process.captions.map((c) => (
              <Figure key={c} caption={c} ratio="aspect-[4/3]" />
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section id="results" title="Results">
          <p className="max-w-2xl text-fg-dim">{detail.outcome.body}</p>
          <div className="mt-10 space-y-6">
            {detail.outcome.captions.map((c) => (
              <Figure key={c} caption={c} ratio="aspect-[16/9]" />
            ))}
          </div>
        </Section>

        {/* full-width image between Results and Anatomy */}
        <Reveal>
          <div className="px-[clamp(1.25rem,4vw,3.5rem)] py-4">
            <Figure caption={detail.resultsImage} ratio="aspect-[21/9]" />
          </div>
        </Reveal>

        {/* Anatomy of a decision */}
        <Section id="anatomy" title="Anatomy of a decision">
          <p className="max-w-2xl text-fg-dim">{detail.anatomy.body}</p>
          <div className="mt-10 space-y-6">
            {detail.anatomy.captions[0] && (
              <Figure caption={detail.anatomy.captions[0]} ratio="aspect-[16/9]" />
            )}
            {detail.anatomy.captions.length > 1 && (
              <div className="grid gap-6 sm:grid-cols-2">
                {detail.anatomy.captions.slice(1).map((c) => (
                  <Figure key={c} caption={c} ratio="aspect-[4/3]" />
                ))}
              </div>
            )}
          </div>
        </Section>

        {/* Reflection */}
        <Section id="reflection" title="Reflection">
          <p className="max-w-2xl text-fg-dim">{detail.reflection.body}</p>
          <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-line pt-10 sm:grid-cols-2">
            {detail.reflection.notes.map((n) => (
              <div key={n.title}>
                <h3 className="eyebrow text-fg">{n.title}</h3>
                <p className="mt-4 max-w-md text-fg-dim">{n.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* bottom case navigation */}
        <nav className="border-t border-line">
          <div className="shell grid grid-cols-2">
            <Link
              href={`/work/${prev.slug}`}
              className="group flex items-center gap-4 border-r border-line py-10 pr-6"
            >
              <Arrow dir="left" />
              <span>
                <span className="eyebrow block text-fg-faint">Previous</span>
                <span className="display t-h2">{prev.client}</span>
              </span>
            </Link>
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-end gap-4 py-10 pl-6 text-right"
            >
              <span>
                <span className="eyebrow block text-fg-faint">Next</span>
                <span className="display t-h2">{next.client}</span>
              </span>
              <Arrow dir="right" />
            </Link>
          </div>
        </nav>
      </main>

      <div className="bg-fg">
        <Footer />
      </div>
    </>
  );
}
