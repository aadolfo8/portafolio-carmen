import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

const cabecera = {
  src: "/THIEF_SHOP/1.mp4",
  alt: "Cabecera",
};
const racional = {
  src: "/THIEF_SHOP/2.webp",
  alt: "racional",
};
const bocetos = {
  src: "/THIEF_SHOP/4.mp4",
  alt: "Bocetos",
};
const footer = {
  src: "/THIEF_SHOP/5.mp4",
  alt: "Footer",
};
const videoSrc =
  "https://player.vimeo.com/video/945923270?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";

const GiffGaff = () => {
  return (
    <ProjectLayout
      title="GiffGaff - Thief Shop"
      description="Giffgaff quería hacer una campaña de PR para dar a conocer sus móviles de segunda mano en Londres. Capitar europea de los robos de móviles"
      favicon="GIFFGAFF.webp"
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
      <section className="video-section">
        <iframe
          src={videoSrc}
          title="Giffgaff"
          className="full-width-video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
        ></iframe>
      </section>

      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={bocetos.src} type="video/mp4" />
        </video>
      </section>

      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={footer.src} type="video/mp4" />
        </video>
      </section>
    </ProjectLayout>
  );
};

export default GiffGaff;
