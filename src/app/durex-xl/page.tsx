import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

const images = [
  {
    src: "/DUREX/1.webp",
    alt: "durex1",
  },
  {
    src: "/DUREX/2.webp",
    alt: "durex2",
  },
  {
    src: "/DUREX/3.webp",
    alt: "durex3",
  },
];

const DurexPage = () => {
  return (
    <ProjectLayout title="Durex XL" description="Durex XL" favicon="DUREX.webp">
      <section
        aria-label="Proyectos"
        className="grid gap-x-6 gap-y-3 grid-cols-1 md:grid-cols-3 px-7 md:px-5 md:h-lvh pt-[50px] md:pt-[90px] pb-11 md:pb-0"
      >
        {images.map((image: any) => (
          <section className="image-section" key={image.alt}>
            <Image
              src={image.src}
              alt={image.alt}
              className="full-width-image"
              loading="lazy"
              width={300}
              height={300}
            />
          </section>
        ))}
      </section>
    </ProjectLayout>
  );
};

export default DurexPage;
