import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

const cabecera = {
  src: "/NIKE/1.png",
  alt: "Cabecera",
};

const images = [
  {
    src: "/NIKE/3.webp",
    alt: "Messi",
  },
  {
    src: "/NIKE/4.webp",
    alt: "Atleti",
  },
  {
    src: "/NIKE/5.webp",
    alt: "Morata",
  },
];

const footer = {
  src: "/NIKE/6.png",
  alt: "Footer",
};
const videoSrc =
  "https://player.vimeo.com/video/951917982?h=e9b4b62249&title=0&byline=0&portrait=0";

const NikePage = () => {
  return (
    <ProjectLayout
      title="Nike - Ellas"
      description="JUST DO IT. Aunque a veces hacerlo sea un problema"
      favicon="NIKE.webp"
    >
      <section className="image-section">
        <Image
          src={cabecera.src}
          alt={cabecera.alt}
          className="full-width-image"
          loading="lazy"
          width={300}
          height={300}
        />
      </section>
      <section className="video-section">
        <iframe
          src={videoSrc}
          title="Nike"
          className="full-width-video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
        ></iframe>
      </section>

      {images.map((image) => (
        <section className="image-section">
          <Image
            key={image.alt}
            src={image.src}
            alt={image.alt}
            className="full-width-image"
            loading="lazy"
            width={300}
            height={300}
          />
        </section>
      ))}

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

export default NikePage;
