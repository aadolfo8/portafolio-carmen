import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

const cabecera = {
  src: "/AUDIBLE/1.mp4",
  alt: "Cabecera",
};
const racional = {
  src: "/AUDIBLE/2.png",
  alt: "Racional",
};
const graficas = {
  src: "/AUDIBLE/3.webp",
  alt: "Gráficas",
};
const metro = {
  src: "/AUDIBLE/4.webp",
  alt: "Metro",
};
const graficas2 = {
  src: "/AUDIBLE/5.webp",
  alt: "Graficas-2",
};
const revista = {
  src: "/AUDIBLE/6.webp",
  alt: "Revista",
};
const footer = {
  src: "/AUDIBLE/7.png",
  alt: "Footer",
};

const AudibleHazloMasFacil = () => {
  return (
    <ProjectLayout
      title="Audible - Hazlo más fácil"
      description="Encontrar una postura cómoda para leer a veces es muy complicado"
      favicon="AUDIBLE.webp"
    >
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={cabecera.src} type="video/mp4" />
        </video>
      </section>

      <section className="image-section">
        <Image
          src={racional.src}
          alt={racional.alt}
          className="full-width-image"
          loading="lazy"
          width={3000}
          height={3000}
        />
      </section>

      <section className="image-section">
        <Image
          src={graficas.src}
          alt={graficas.alt}
          className="full-width-image"
          loading="lazy"
          width={3000}
          height={3000}
        />
      </section>

      <section className="image-section">
        <Image
          src={metro.src}
          alt={metro.alt}
          className="full-width-image"
          loading="lazy"
          width={3000}
          height={3000}
        />
      </section>

      <section className="image-section">
        <Image
          src={graficas2.src}
          alt={graficas2.alt}
          className="full-width-image"
          loading="lazy"
          width={3000}
          height={3000}
        />
      </section>

      <section className="image-section">
        <Image
          src={revista.src}
          alt={revista.alt}
          className="full-width-image"
          loading="lazy"
          width={3000}
          height={3000}
        />
      </section>

      <section className="image-section">
        <Image
          src={footer.src}
          alt={footer.alt}
          className="full-width-image"
          loading="lazy"
          width={3000}
          height={3000}
        />
      </section>
    </ProjectLayout>
  );
};

export default AudibleHazloMasFacil;
