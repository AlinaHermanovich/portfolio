import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseDetails, projects, site } from "@/lib/content";
import CaseStudy from "@/components/CaseStudy";

const visible = projects.filter((p) => p.slug !== "4u");

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.client}, ${site.name}` : "Case study",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const detail = caseDetails[slug];
  if (!project || !detail) notFound();

  const ring = visible.includes(project) ? visible : projects;
  const idx = ring.findIndex((p) => p.slug === slug);
  const prev = ring[(idx - 1 + ring.length) % ring.length];
  const next = ring[(idx + 1) % ring.length];

  return (
    <CaseStudy
      project={project}
      detail={detail}
      prev={{ slug: prev.slug, client: prev.client }}
      next={{ slug: next.slug, client: next.client }}
    />
  );
}
