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
    description: `${project.client || "Carmen Puche"}: ${project.title}. Dirección de arte por Carmen Puche.`,
    openGraph: { title: `${project.title} — Carmen Puche`, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).id);
  if (!project) notFound();
  return <ProjectView project={project} />;
}
