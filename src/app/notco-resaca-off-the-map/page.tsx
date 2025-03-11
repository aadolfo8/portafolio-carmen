import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

const cabecera = {
  src: "/RESACA/1.mp4",
  alt: "Cabecera",
};
const boton = {
  src: "/RESACA/2.gif",
  alt: "Boton",
};
const footer = {
  src: "/RESACA/4.png",
  alt: "Footer",
};
const videoSrc =
  "https://player.vimeo.com/video/943596433?h=80bf2d2700&amp;title=0&amp;byline=0&amp;portrait=0";

const ResacaPage = () => {
  return (
    <ProjectLayout
      title="Notco - Resaca off the map"
      description="Nosotras nos lo tomamos al pie de la letra, borramos la resaca del mapa, literalmente"
      favicon="RESACA.webp"
    >
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={cabecera.src} type="video/mp4" />
        </video>
      </section>

      <section className="image-section">
        <Image
          src={boton.src}
          alt={boton.alt}
          className="full-width-image"
          loading="lazy"
          width={300}
          height={300}
        />
      </section>
      <section className="video-section">
        <iframe
          src={videoSrc}
          title="Resaca"
          className="full-width-video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
        ></iframe>
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

export default ResacaPage;
