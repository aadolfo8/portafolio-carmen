import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

const cabecera = {
  src: "/NIEVE/1.mp4",
  alt: "Cabecera",
};
const logos = {
  src: "/NIEVE/4.png",
  alt: "Logos",
};
const insta = {
  src: "/NIEVE/5.mp4",
  alt: "Insta",
};
const carteles = {
  src: "/NIEVE/6.webp",
  alt: "Carteles",
};
const historias = {
  src: "/NIEVE/7.mp4",
  alt: "Historias",
};
const comentarios = {
  src: "/NIEVE/8.mp4",
  alt: "Comentarios",
};
const footer = {
  src: "/NIEVE/9.mp4",
  alt: "Footer",
};
const videoSrc =
  "https://player.vimeo.com/video/950819241?h=20cae1ccf9&amp;title=0&amp;byline=0&amp;portrait=0";

const videoSrc2 =
  "https://player.vimeo.com/video/950726937?h=784c0cf346&amp;title=0&amp;byline=0&amp;portrait=0";

const SinNievePage = () => {
  return (
    <ProjectLayout
      title="Sin Nieve No Hay Sociedad"
      description="Los Andes se derriten un 10% cada diez años y, para reivindicarlo, aprovechamos que todo el mundo habla de la película del momento: 'La sociedad de la nieve'."
      favicon="SIN_NIEVE.webp"
    >
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={cabecera.src} type="video/mp4" />
        </video>
      </section>

      <section className="video-section">
        <iframe
          src={videoSrc}
          title="Sin Nieve"
          className="full-width-video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
        ></iframe>
      </section>

      <section className="video-section">
        <iframe
          src={videoSrc2}
          title="Sin Nieve 2"
          className="full-width-video"
          allow="autoPlay; fullscreen; picture-in-picture"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
        ></iframe>
      </section>

      <section className="image-section">
        <Image
          src={logos.src}
          alt={logos.alt}
          className="full-width-image"
          loading="lazy"
          width={300}
          height={300}
        />
      </section>

      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={insta.src} type="video/mp4" />
        </video>
      </section>

      <section className="image-section">
        <Image
          src={carteles.src}
          alt={carteles.alt}
          className="full-width-image"
          loading="lazy"
          width={300}
          height={300}
        />
      </section>

      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={historias.src} type="video/mp4" />
        </video>
      </section>

      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={comentarios.src} type="video/mp4" />
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

export default SinNievePage;
