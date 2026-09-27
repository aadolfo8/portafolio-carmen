"use client";

import Link from "next/link";
import { projects, projectType, type Project, type ProjectMedia } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";

function Media({ item, title, index }: { item: ProjectMedia; title: string; index: number }) {
  if (item.kind === "embed") {
    return (
      <div className="aspect-video w-full">
        <iframe src={item.src} title={`${title} — video ${index + 1}`} loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="h-full w-full border-0" />
      </div>
    );
  }
  if (item.kind === "video") {
    return <video autoPlay loop muted playsInline preload="metadata" className="block h-auto w-full"><source src={item.src} type="video/mp4" /></video>;
  }
  return <img src={item.src} alt={`${title}, pieza ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} className="block h-auto w-full" />;
}

export default function ProjectView({ project }: { project: Project }) {
  const { language, setLanguage } = useLanguage();
  const es = language === "es";
  const next = projects[(projects.findIndex((item) => item.id === project.id) + 1) % projects.length];

  return (
    <main className="min-h-dvh">
      <header className="grid grid-cols-[auto_1fr_auto_auto] border-b border-border bg-background">
        <Link href="/" className="display flex items-center border-r border-border px-3 py-2 text-xl hover:bg-foreground hover:text-background md:text-2xl">Carmen Puche</Link>
        <span className="label flex items-center px-3">{es ? "Directora de arte" : "Art director"}</span>
        <div className="flex items-center border-l border-border px-1">
          <button type="button" onClick={() => setLanguage("es")} aria-pressed={es} className={`label px-2 py-2 ${es ? "underline" : "text-muted-foreground"}`}>ESP</button>
          <span className="label text-muted-foreground">|</span>
          <button type="button" onClick={() => setLanguage("en")} aria-pressed={!es} className={`label px-2 py-2 ${!es ? "underline" : "text-muted-foreground"}`}>ENG</button>
        </div>
        <Link href="/#trabajos" className="label flex items-center border-l border-border px-3 hover:bg-foreground hover:text-background">{es ? "Cerrar ×" : "Close ×"}</Link>
      </header>

      <section className="grid border-b border-border md:grid-cols-[1fr_18rem]">
        <div className="min-w-0 p-3 md:p-6">
          {project.client && <p className="label mb-4 text-muted-foreground">{project.client}</p>}
          <h1 className="display break-words text-[clamp(3rem,9vw,10rem)]">{project.title}</h1>
        </div>
        <dl className="grid grid-cols-2 border-t border-border md:grid-cols-1 md:border-t-0 md:border-l">
          <div className="border-r border-border p-3 md:border-r-0 md:border-b"><dt className="label text-muted-foreground">{es ? "Tipo" : "Type"}</dt><dd className="label mt-2">{projectType(project.type, es)}</dd></div>
          <div className="p-3"><dt className="label text-muted-foreground">{es ? "Año" : "Year"}</dt><dd className="label mt-2">{project.year}</dd></div>
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
        <Link href={`/projects/${next.id}`} className="group p-3 hover:bg-foreground hover:text-background md:p-5"><p className="label mb-2">{es ? "Siguiente proyecto" : "Next project"}</p><p className="display text-3xl md:text-5xl">{next.title}</p></Link>
        <Link href="/#trabajos" aria-label={es ? "Ver todos los proyectos" : "View all projects"} className="label flex min-h-16 items-center justify-center border-t border-border text-lg hover:bg-foreground hover:text-background md:border-t-0 md:border-l">[ + ]</Link>
      </div>
    </main>
  );
}
