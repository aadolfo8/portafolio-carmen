import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

const cabecera = {
  src: "/ZALANDO/1.mp4",
  alt: "Cabecera",
};
const frase = {
  src: "/ZALANDO/3.mp4",
  alt: "Frase",
};
const moviles = {
  src: "/ZALANDO/4.mp4",
  alt: "Moviles",
};
const footer = {
  src: "/ZALANDO/5.webp",
  alt: "Footer",
};

const videoSrc =
  "https://player.vimeo.com/video/949532692?h=13f3f92664&amp;title=0&amp;byline=0&amp;portrait=0";

const ZalandoPage = () => {
  return (
    <ProjectLayout
      title="Zalando - Dress they up"
      description="Dress they up"
      favicon="ZALANDO.webp"
    >
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={cabecera.src} type="video/mp4" />
        </video>
      </section>

      <section className="video-section">
        <iframe
          src={videoSrc}
          title="Zalando"
          className="full-width-video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
        ></iframe>
      </section>
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={frase.src} type="video/mp4" />
        </video>
      </section>

      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={moviles.src} type="video/mp4" />
        </video>
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

export default ZalandoPage;
