import ProjectLayout from "@/components/ProjectLayout";

const mosca = {
  src: "/VICIO/1.mp4",
  alt: "Mosca",
};
const texto1 = {
  src: "/VICIO/3.mp4",
  alt: "Texto1",
};
const texto2 = {
  src: "/VICIO/4.png",
  alt: "Texto2",
};
const basura = {
  src: "/VICIO/5.mp4",
  alt: "Basura",
};
const texto3 = {
  src: "/VICIO/6.png",
  alt: "Texto3",
};
const contrato = {
  src: "/VICIO/7.mp4",
  alt: "Contrato",
};
const premio = {
  src: "/VICIO/8.mp4",
  alt: "Premio",
};

const videoSrc =
  "https://player.vimeo.com/video/934956545?h=02e8f4c91b&amp;title=0&amp;byline=0&amp;portrait=0";

const VicioThrasyAgreementPage = () => {
  return (
    <ProjectLayout
      title="Vicio - Trashy Agreement"
      description="Vicio quería comunicar que sus hamburguesas son de alta calidad pero no daban ninguna pista del porqué"
      favicon="VICIO.webp"
    >
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={mosca.src} type="video/mp4" />
        </video>
      </section>

      <section className="video-section">
        <iframe
          src={videoSrc}
          title="Vicio"
          className="full-width-video"
          allow="autoPlay; fullscreen; picture-in-picture"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
        ></iframe>
      </section>
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={texto1.src} type="video/mp4" />
        </video>
      </section>
      <section className="image-section">
        <img
          src={texto2.src}
          alt={texto2.alt}
          className="full-width-image"
          loading="lazy"
        />
      </section>
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={basura.src} type="video/mp4" />
        </video>
      </section>
      <section className="image-section">
        <img
          src={texto3.src}
          alt={texto3.alt}
          className="full-width-image"
          loading="lazy"
        />
      </section>
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={contrato.src} type="video/mp4" />
        </video>
      </section>
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={premio.src} type="video/mp4" />
        </video>
      </section>
    </ProjectLayout>
  );
};

export default VicioThrasyAgreementPage;
