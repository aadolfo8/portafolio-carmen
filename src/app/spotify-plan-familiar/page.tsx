import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

const cabecera = {
  src: "/PLAN_FAMILIAR/1.mp4",
  alt: "Cabecera",
};
const mockup = {
  src: "/PLAN_FAMILIAR/2.webp",
  alt: "mockup",
};
const frases = {
  src: "/PLAN_FAMILIAR/3.mp4",
  alt: "Frases",
};
const footer = {
  src: "/PLAN_FAMILIAR/4.webp",
  alt: "Footer",
};

const SpotifyPlanFamiliar = () => {
  return (
    <ProjectLayout
      title="Spotify Plan Familiar"
      description="El plan familiar son los padres"
      favicon="PLAN_FAMILIAR.webp"
    >
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={cabecera.src} type="video/mp4" />
        </video>
      </section>
      <section className="image-section">
        <Image
          src={mockup.src}
          alt={mockup.alt}
          className="full-width-image"
          loading="lazy"
          width={300}
          height={300}
        />
      </section>

      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={frases.src} type="video/mp4" />
        </video>
      </section>

      <section className="image-section">
        <Image
          src={footer.src}
          alt={footer.alt}
          className="full-width-image"
          loading="lazy"
          width={300}
          height={300}
        />
      </section>
    </ProjectLayout>
  );
};

export default SpotifyPlanFamiliar;
