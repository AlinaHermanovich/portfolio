"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { CaseDetail, Project } from "@/lib/content";
import Nav from "./Nav";
import CaseFrame from "./CaseFrame";
import CaseSectionNav from "./CaseSectionNav";
import Reveal from "./Reveal";
import Footer from "./Footer";
import SlideCarousel from "./SlideCarousel";

function Figure({
  caption,
  ratio = "aspect-[16/9]",
  src,
}: {
  caption: string;
  ratio?: string;
  src?: string;
}) {
  return (
    <figure>
      <div
      className={`w-full overflow-hidden rounded-[4px] border border-[#F4F4F4] bg-bg-elev ${ratio}`}
      >
        {src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={caption}
            className="h-full w-full object-cover object-top"
          />
        )}
      </div>
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
  const navSections = detail.sections.map((s) => ({
    id: s.id,
    navLabel: s.navLabel,
  }));

  return (
    <>
      <Nav />
      <main className="pt-28 sm:pt-32">
        <header className="shell">
          <p className="eyebrow text-fg-faint">
            {project.client} / {project.category} / {project.year}
          </p>
          <h1 className="display t-h1 mt-5 max-w-4xl text-fg">
            {project.title}
          </h1>
        </header>

        <div className="mt-10 px-[clamp(1.25rem,4vw,3.5rem)]">
          <div className="h-[40vh] w-full">
            <CaseFrame
              video={project.video}
              preview={project.preview}
              previewMobile={project.previewMobile}
              color
            />
          </div>
        </div>

        <CaseSectionNav sections={navSections} />

        {detail.sections.map((s) => (
          <Section key={s.id} id={s.id} title={s.title}>
            <p className="max-w-2xl text-fg-dim">{s.body}</p>
                          {s.carousels && s.carousels.length > 0 ? (
              <div className="mt-10 flex flex-col gap-10">
                {s.carousels.map((g) => (
                  <SlideCarousel
                    key={g.caption ?? g.images[0]}
                    images={g.images}
                    caption={g.caption}
                    perView={1}
                  />
                ))}
              </div>
            ) : s.carousel && s.images && s.images.length > 0 ? (
              <SlideCarousel images={s.images} />
            ) : (
              s.captions &&
              s.captions.length > 0 && (
              <div
                className={`mt-10 grid gap-6 ${
                  s.captions.length > 1 ? "sm:grid-cols-2" : ""
                }`}
              >
                {s.captions.map((c, i) => (
                  <Figure
                    key={c}
                    caption={c}
                    src={s.images?.[i]}
                    ratio={
                      s.id === "site" && i < 2
                        ? "h-[581px]"
                        : s.captions!.length === 1
                          ? "aspect-[16/9]"
                          : "aspect-[4/3]"
                    }
                  />
                ))}
              </div>
              )
            )}
          </Section>
        ))}

        <nav className="border-t border-line">
          <div className="shell grid grid-cols-2">
            <Link
              href={`/work/${prev.slug}`}
              className="group flex items-center gap-4 border-r border-line py-10 pr-6"
            >
              <Arrow dir="left" />
              <span>
                <span className="eyebrow block text-fg-faint">Назад</span>
                <span className="display t-h2">{prev.client}</span>
              </span>
            </Link>
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-end gap-4 py-10 pl-6 text-right"
            >
              <span>
                <span className="eyebrow block text-fg-faint">Далее</span>
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
