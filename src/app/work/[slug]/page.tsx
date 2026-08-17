import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseDetails, projects, site } from "@/lib/content";
import CaseStudy from "@/components/CaseStudy";

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

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <CaseStudy
      project={project}
      detail={detail}
      prev={{ slug: prev.slug, client: prev.client }}
      next={{ slug: next.slug, client: next.client }}
    />
  );
}
