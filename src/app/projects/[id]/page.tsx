import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import ProjectView from "@/components/ProjectView";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).id);
  if (!project) return {};
  return {
    title: `${project.title} — Carmen Puche`,
    description: `${project.title}, proyecto de ${project.type.toLowerCase()} para ${project.client || "Carmen Puche"} (${project.year}). Portfolio de Carmen Puche, directora de arte en Madrid.${project.awards?.length ? ` Reconocimientos: ${project.awards.join(", ")}.` : ""}`,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      type: "article",
      title: `${project.title} — ${project.client} | Carmen Puche`,
      description: `${project.type} para ${project.client}, ${project.year}. Dirección de arte: Carmen Puche.`,
      url: `/projects/${project.id}`,
      images: [{ url: project.image, alt: `${project.client} — ${project.title}` }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).id);
  if (!project) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `https://carmenpuche.com/projects/${project.id}`,
    image: project.image.startsWith("http") ? project.image : `https://carmenpuche.com${project.image}`,
    dateCreated: project.year,
    genre: project.type,
    creator: { "@type": "Person", name: "Carmen Puche", url: "https://carmenpuche.com/" },
    ...(project.client ? { sponsor: { "@type": "Organization", name: project.client } } : {}),
    ...(project.awards?.length ? { award: project.awards } : {}),
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><ProjectView project={project} /></>;
}
