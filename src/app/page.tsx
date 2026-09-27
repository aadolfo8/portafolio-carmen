"use client";

import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";

const featured = projects[0];
const tiles = projects.slice(1, 7);
const archive = projects.slice(7);

function projectType(type: string, es: boolean) {
  if (es) return type;
  return ({ Campaña: "Campaign", "Spot TV & RRSS": "TV & social film" } as Record<string, string>)[type] ?? type;
}

function ProjectTile({ project, index, es }: { project: Project; index: number; es: boolean }) {
  return (
    <Link href={`/projects/${project.id}`} className="group border-b border-border md:border-r">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img src={project.image} alt={`${project.client} — ${project.title}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
      </div>
      <div className="grid grid-cols-[3rem_1fr_auto] border-t border-border">
        <span className="label border-r border-border p-3 text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
        <span className="p-3"><span className="label flex justify-between gap-3 text-muted-foreground"><span>{project.client}</span><span>{project.year}</span></span><span className="display mt-1 block text-2xl md:text-3xl">{project.title}</span></span>
        <span className="label p-3">+</span>
      </div>
    </Link>
  );
}

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const es = language === "es";

  return (
    <main id="top" className="min-h-dvh">
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="grid grid-cols-[auto_1fr] items-stretch border-b border-border">
          <a href="#top" className="display flex items-center border-r border-border px-3 text-2xl md:text-3xl">Carmen Puche</a>
          <div className="grid grid-cols-[1fr_auto]">
            <div className="grid grid-cols-[auto_1fr]">
              <a href="mailto:carmenpuchemartinez@gmail.com" className="label flex items-center border-r border-border px-3 py-2 hover:bg-foreground hover:text-background">{es ? "Contacto" : "Contact"}</a>
              <span className="label hidden items-center px-3 py-2 text-muted-foreground lg:flex">carmenpuchemartinez@gmail.com</span>
            </div>
            <div className="flex items-center justify-end border-l border-border px-2">
              <button type="button" onClick={() => setLanguage("es")} aria-pressed={es} className={`label px-2 py-2 ${es ? "underline" : "text-muted-foreground"}`}>ESP</button>
              <span className="label text-muted-foreground">|</span>
              <button type="button" onClick={() => setLanguage("en")} aria-pressed={!es} className={`label px-2 py-2 ${!es ? "underline" : "text-muted-foreground"}`}>ENG</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <span className="label border-r border-border p-3 text-muted-foreground">{es ? "Madrid, España" : "Madrid, Spain"}</span>
          <a href="#trabajos" className="label p-3 hover:bg-foreground hover:text-background">{es ? "Trabajos ↓" : "Work ↓"}</a>
        </div>
      </header>

      <section id="trabajos" className="border-b border-border">
        <Link href={`/projects/${featured.id}`} className="group block border-b border-border">
          <div className="aspect-[16/9] overflow-hidden bg-secondary md:aspect-[2.2/1]">
            <img src={featured.image} alt={`${featured.client} — ${featured.title}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]" />
          </div>
          <div className="grid grid-cols-[3rem_1fr_auto] border-t border-border md:grid-cols-[4rem_1fr_14rem_10rem_4rem]">
            <span className="label border-r border-border p-3 text-muted-foreground">01</span>
            <span className="p-3"><span className="label flex justify-between gap-3 text-muted-foreground"><span>{featured.client}</span><span className="md:hidden">{featured.year}</span></span><span className="display mt-1 block text-3xl md:text-5xl">{featured.title}</span></span>
            <span className="label hidden items-center border-l border-border px-3 md:flex">{projectType(featured.type, es)}</span>
            <span className="label hidden items-center border-l border-border px-3 md:flex">{featured.year}</span>
            <span className="label flex items-center justify-center border-l border-border px-3">+</span>
          </div>
        </Link>
        <div className="grid md:grid-cols-2">{tiles.map((project, index) => <ProjectTile key={project.id} project={project} index={index + 1} es={es} />)}</div>
      </section>

      <section className="border-b border-border">
        <div className="flex items-baseline justify-between border-b border-border px-3 py-2">
          <h2 className="label">{es ? "Archivo de escuela" : "School archive"}</h2>
          <span className="label text-muted-foreground">2021—2024</span>
        </div>
        {archive.map((project, index) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="group relative block border-b border-border last:border-b-0">
            <img src={project.image} alt="" aria-hidden="true" loading="lazy" className="pointer-events-none fixed top-1/2 left-[55%] z-50 hidden aspect-[4/3] w-80 -translate-y-1/2 object-cover opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block" />
            <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_14rem_10rem_4rem]">
              <span className="label flex items-center border-r border-border px-3 py-4 text-muted-foreground">{String(index + 8).padStart(2, "0")}</span>
              <span className="flex flex-col justify-center px-3 py-3"><span className="label text-muted-foreground">{project.client}</span><span className="display text-3xl md:text-5xl">{project.title}</span></span>
              <span className="label hidden items-center border-l border-border px-3 md:flex">{projectType(project.type, es)}</span>
              <span className="label hidden items-center border-l border-border px-3 md:flex">{project.year}</span>
              <span className="label hidden items-center justify-center border-l border-border md:flex">[ + ]</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="grid border-b border-border md:grid-cols-[1fr_2fr]">
        <h2 className="label border-b border-border p-3 md:border-r md:border-b-0">{es ? "Sobre mí" : "About"}</h2>
        <div>
          <p className="display border-b border-border p-3 text-4xl md:p-6 md:text-7xl">{es ? "Directora de arte en el Ruso de Rocky." : "Art director at el Ruso de Rocky."}</p>
          <div className="grid md:grid-cols-3">
            <div className="border-b border-border p-3 md:border-r md:border-b-0 md:p-6"><p className="label mb-4 text-muted-foreground">{es ? "Formación" : "Education"}</p><p className="text-sm leading-relaxed">{es ? "Máster en Creatividad Integral" : "Master’s in Integrated Creativity"}<br />[ Brother Madrid ]<br />{es ? "Máster en Diseño Gráfico y Entornos Digitales" : "Master’s in Graphic Design and Digital Environments"}<br />[ LABASAD ]<br />{es ? "Grado en Publicidad y RR. PP." : "Degree in Advertising and Public Relations"}<br />[ Universidad de Murcia ]</p></div>
            <div className="border-b border-border p-3 md:border-r md:border-b-0 md:p-6"><p className="label mb-4 text-muted-foreground">{es ? "Experiencia" : "Experience"}</p><p className="text-sm leading-relaxed">Portavoz<br />[ 2020–2023 ]<br />DAVID Madrid<br />[ 2024 ]<br />el Ruso de Rocky<br />[ {es ? "2025–Actualidad" : "2025–Present"} ]</p></div>
            <div className="p-3 md:p-6"><p className="label mb-4 text-muted-foreground">{es ? "Marcas" : "Brands"}</p><p className="text-sm leading-relaxed">Burger King, Liga F, Goiko, Netflix, Real Valladolid CF, Universidad Europea, {es ? "entre otros" : "among others"}.</p></div>
          </div>
        </div>
      </section>
      <footer>
        <a href="mailto:carmenpuchemartinez@gmail.com" className="display block overflow-hidden border-b border-border px-2 py-6 text-[clamp(1.35rem,6.7vw,7rem)] hover:bg-foreground hover:text-background">carmenpuchemartinez@gmail.com</a>
        <div className="grid md:grid-cols-2"><span className="label border-b border-border p-3 md:border-r md:border-b-0">© {new Date().getFullYear()} Carmen Puche</span><a href="mailto:carmenpuchemartinez@gmail.com" className="label p-3 hover:bg-foreground hover:text-background">{es ? "Contacto →" : "Contact →"}</a></div>
      </footer>
    </main>
  );
}
