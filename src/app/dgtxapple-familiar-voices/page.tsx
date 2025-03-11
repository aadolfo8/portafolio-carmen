import ProjectLayout from "@/components/ProjectLayout";

const cabecera = {
  src: "VOICES/1.mp4",
  alt: "Cabecera",
};
const siri = {
  src: "VOICES/2.mp4",
  alt: "Siri",
};
const moviles = {
  src: "VOICES/4.mp4",
  alt: "Moviles",
};
const footer = {
  src: "VOICES/5.mp4",
  alt: "Footer",
};

const videoSrc =
  "https://player.vimeo.com/video/943601539?h=e94a00af9c&amp;title=0&amp;byline=0&amp;portrait=0";

const FamiliarVoicesPage = () => {
  return (
    <ProjectLayout
      title="DGTxApple - Familiar Voices"
      description="Conducir solo aumenta el riesgo de tener un accidente de tráfico. Pero tengo una solución"
      favicon="FAMILIAR_VOICES.webp"
    >
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={cabecera.src} type="video/mp4" />
        </video>
      </section>

      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={siri.src} type="video/mp4" />
        </video>
      </section>

      <section className="video-section">
        <iframe
          src={videoSrc}
          title="fAMILIARvOICES"
          className="full-width-video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
        ></iframe>
      </section>

      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={moviles.src} type="video/mp4" />
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

export default FamiliarVoicesPage;
