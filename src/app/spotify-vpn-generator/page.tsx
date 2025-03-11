import ProjectLayout from "@/components/ProjectLayout";

const cabecera = {
  src: "/VPN/1.mp4",
  alt: "Cabecera",
};
const texto = {
  src: "/VPN/2.mp4",
  alt: "Texto",
};
const moviles = {
  src: "/VPN/4.mp4",
  alt: "Moviles",
};
const mapas = {
  src: "/VPN/5.mp4",
  alt: "Mapas",
};
const footer = {
  src: "/VPN/6.mp4",
  alt: "Footer",
};

const videoSrc =
  "https://player.vimeo.com/video/936601328?h=12cb3368ef&amp;title=0&amp;byline=0&amp;portrait=0";

const SpotifyVpnPage = () => {
  return (
    <ProjectLayout
      title="Spotify VPN Generator"
      description="Spotify VPN Generator"
      favicon="SPOTIFY.webp"
    >
      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={cabecera.src} type="video/mp4" />
        </video>
      </section>

      <section className="image-section">
        <video autoPlay loop muted playsInline>
          <source src={texto.src} type="video/mp4" />
        </video>
      </section>

      <section className="video-section">
        <iframe
          src={videoSrc}
          title="Spotify"
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
          <source src={mapas.src} type="video/mp4" />
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

export default SpotifyVpnPage;
