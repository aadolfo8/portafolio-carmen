import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Carmen Puche — Art Director in Madrid",
  description: "Portfolio of Carmen Puche, an art director based in Madrid. Campaigns and creative work for Burger King, Liga F, Goiko, Spotify and more.",
  alternates: { canonical: "/en", languages: { es: "/", en: "/en" } },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Carmen Puche",
    title: "Carmen Puche — Art Director in Madrid",
    description: "Art direction, campaigns and creative work for leading brands.",
    url: "/en",
    images: [{ url: "/carmen-portrait.png", alt: "Carmen Puche, art director" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function EnglishHome() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Carmen Puche",
    jobTitle: "Art Director",
    url: "https://carmenpuche.com/en",
    image: "https://carmenpuche.com/carmen-portrait.png",
    email: "carmenpuchemartinez@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Madrid", addressCountry: "ES" },
    sameAs: ["https://www.linkedin.com/in/carmen-puche", "https://www.instagram.com/carmenpuche_/"],
    worksFor: { "@type": "Organization", name: "el Ruso de Rocky" },
  };

  return (
    <main lang="en" className="min-h-dvh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className="sticky top-0 z-40 grid grid-cols-[1fr_auto] border-b border-border bg-background">
        <Link href="/en" className="display border-r border-border px-3 py-2 text-2xl md:text-3xl">Carmen Puche</Link>
        <div className="flex items-center gap-3 px-3">
          <Link href="/" hrefLang="es" lang="es" className="label text-muted-foreground">ESP</Link>
          <span className="label">|</span>
          <span className="label underline" aria-current="page">ENG</span>
        </div>
      </header>
      <section className="border-b border-border px-3 py-5 md:px-6 md:py-8">
        <p className="label mb-3 text-muted-foreground">CREATIVE ART DIRECTOR · MADRID</p>
        <h1 className="display text-4xl md:text-6xl">Carmen Puche — Art Director in Madrid</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed md:text-base">Portfolio of campaigns, art direction and creative projects for brands including Burger King, Liga F, Goiko and Spotify. Currently at el Ruso de Rocky.</p>
      </section>
      <section aria-labelledby="work-heading" className="border-b border-border">
        <h2 id="work-heading" className="label border-b border-border px-3 py-2">Selected work</h2>
        <div className="grid md:grid-cols-2">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group border-b border-border md:border-r">
              <div className="aspect-square overflow-hidden bg-secondary">
                <img src={project.image} alt={`${project.client} — ${project.title}`} loading={index < 2 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
              </div>
              <div className="grid grid-cols-[3rem_1fr_auto] border-t border-border">
                <span className="label border-r border-border p-3 text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <span className="p-3"><span className="label flex justify-between gap-3 text-muted-foreground"><span>{project.client}</span><span>{project.year}</span></span><span className="display mt-1 block text-2xl md:text-3xl">{project.title}</span></span>
                <span className="label p-3">+</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="grid border-b border-border md:grid-cols-[1fr_2fr]">
        <img src="/carmen-portrait.png" alt="Portrait of Carmen Puche" loading="lazy" className="h-full w-full object-contain object-bottom" />
        <div className="border-t border-border md:border-t-0 md:border-l">
          <h2 className="display border-b border-border p-3 text-3xl md:p-6 md:text-5xl">About</h2>
          <p className="p-3 text-sm leading-relaxed md:p-6 md:text-base">Art director at el Ruso de Rocky in Madrid. Previously at DAVID Madrid and Portavoz. Master’s in Integrated Creativity from Brother Madrid, a Master’s in Graphic Design and Digital Environments from LABASAD, and a degree in Advertising and Public Relations from the University of Murcia.</p>
          <p className="border-t border-border p-3 text-sm leading-relaxed md:p-6 md:text-base">Selected brands: Burger King, Liga F, Goiko, Netflix, Real Valladolid CF and Universidad Europea.</p>
        </div>
      </section>
      <footer>
        <a href="mailto:carmenpuchemartinez@gmail.com" className="display block overflow-hidden border-b border-border px-2 py-6 text-[clamp(1.35rem,6.7vw,7rem)] hover:bg-foreground hover:text-background">carmenpuchemartinez@gmail.com</a>
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr]"><span className="label col-span-2 border-b border-border p-3 md:col-span-1 md:border-r md:border-b-0">© {new Date().getFullYear()} Carmen Puche</span><a href="https://www.linkedin.com/in/carmen-puche" target="_blank" rel="noopener noreferrer" className="label border-r border-border p-3 hover:bg-foreground hover:text-background">LinkedIn ↗</a><a href="https://www.instagram.com/carmenpuche_/" target="_blank" rel="noopener noreferrer" className="label p-3 hover:bg-foreground hover:text-background">Instagram ↗</a></div>
      </footer>
    </main>
  );
}
