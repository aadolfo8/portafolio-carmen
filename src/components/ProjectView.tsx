"use client";

import Link from "next/link";
import { projects, type Project, type ProjectMedia } from "@/data/projects";
import SiteHeader from "@/components/SiteHeader";

function Media({ item, title, index }: { item: ProjectMedia; title: string; index: number }) {
  if (item.kind === "embed") {
    return (
      <div className="aspect-video w-full">
        <iframe src={item.src} title={`${title} — video ${index + 1}`} loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="h-full w-full border-0" />
      </div>
    );
  }
  if (item.kind === "video") {
    if (item.controls) {
      return <video controls playsInline preload="metadata" className="block h-auto w-full"><source src={item.src} type="video/mp4" /></video>;
    }
    return <video autoPlay loop muted playsInline preload="metadata" className="block h-auto w-full"><source src={item.src} type="video/mp4" /></video>;
  }
  return <img src={item.src} alt={`${title}, pieza ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} className="block h-auto w-full" />;
}

export default function ProjectView({ project }: { project: Project }) {
  const next = projects[(projects.findIndex((item) => item.id === project.id) + 1) % projects.length];

  return (
    <main className="min-h-dvh">
      <SiteHeader />

      <section className="grid border-b border-border md:grid-cols-[1fr_18rem]">
        <div className="min-w-0 p-3 md:p-6">
          {project.client && <p className="label mb-4 text-muted-foreground">{project.client}</p>}
          <h1 className="display break-words text-[clamp(3rem,9vw,10rem)]">{project.title}</h1>
        </div>
        <dl className="flex flex-col border-t border-border md:border-t-0 md:border-l">
          <div className="border-b border-border p-3"><dt className="label text-muted-foreground">Tipo</dt><dd className="label mt-2">{project.type}</dd></div>
          <div className={project.awards?.length ? "border-b border-border p-3" : "p-3"}><dt className="label text-muted-foreground">Año</dt><dd className="label mt-2">{project.year}</dd></div>
          {project.awards && project.awards.length > 0 && (
            <div className="p-3">
              <dt className="label text-muted-foreground">Reconocimientos</dt>
              {project.awards.map((award) => <dd key={award} className="label mt-2 leading-relaxed">{award}</dd>)}
            </div>
          )}
        </dl>
      </section>

      <div className={project.mediaLayout === "triptych" ? "grid grid-cols-1 gap-3 border-b border-border p-5 md:grid-cols-3" : "border-b border-border"}>
        {project.media.map((item, index) => (
          <section key={`${item.src}-${index}`} className={project.mediaLayout === "triptych" ? "min-w-0" : "border-b border-border last:border-b-0"}>
            <Media item={item} title={`${project.client} — ${project.title}`} index={index} />
          </section>
        ))}
      </div>

      <div className="grid border-b border-border md:grid-cols-[1fr_5rem]">
        <Link href={`/projects/${next.id}`} className="group p-3 hover:bg-foreground hover:text-background md:p-5"><p className="label mb-2">Siguiente proyecto</p><p className="display text-3xl md:text-5xl">{next.title}</p></Link>
        <Link href="/#trabajos" aria-label="Ver todos los proyectos" className="label flex min-h-16 items-center justify-center border-t border-border text-lg hover:bg-foreground hover:text-background md:border-t-0 md:border-l">[ + ]</Link>
      </div>
    </main>
  );
}
