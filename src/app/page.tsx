import ProjectLayout from "@/components/ProjectLayout";
import Card from "../components/Card";

const projects = [
  {
    image: "VICIO",
    href: "vicio-trashy-agreement",
    alt: "Proyecto Vicio",
  },
  {
    image: "SIN_NIEVE",
    href: "sin-nieve-no-hay-sociedad",
    alt: "Proyecto Sin Nieve",
  },
  {
    image: "RESACA",
    href: "notco-resaca-off-the-map",
    alt: "Proyecto Resaca",
  },
  {
    image: "SPOTIFY",
    href: "spotify-vpn-generator",
    alt: "Proyecto Spotify",
  },
  {
    image: "ZALANDO",
    href: "zalando-dress-they-up",
    alt: "Proyecto Zalando",
  },
  {
    image: "NIKE",
    href: "nike-ellas",
    alt: "Proyecto Nike",
  },
  {
    image: "AUDIBLE",
    href: "audible-hazlo-mas-facil",
    alt: "Proyecto Audible",
  },
  {
    image: "DUREX",
    href: "durex-xl",
    alt: "Proyecto Durex",
  },
  {
    image: "PLAN_FAMILIAR",
    href: "spotify-plan-familiar",
    alt: "Proyecto Plan Familiar",
  },
  {
    image: "FAMILIAR_VOICES",
    href: "dgtxapple-familiar-voices",
    alt: "Proyecto Familiar Voices",
  },
  {
    image: "GIFFGAFF",
    href: "giffgaff-thief-shop",
    alt: "Proyecto Giffgaff",
  },
];

export default function Home() {
  return (
    <ProjectLayout
      title="Carmen Puche"
      description="Creativa"
      isMainPage={true}
    >
      <main className="main-page mx-auto max-w-screen-2xl flex flex-col items-center w-full px-4 mb-10 pb-4 relative bottom-7">
        <section
          aria-label="Proyectos"
          className="grid gap-x-6 gap-y-3 xxs:grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        >
          {projects.map((project) => (
            <Card
              key={project.alt}
              image={project.image}
              href={project.href}
              alt={project.alt}
            />
          ))}

          <div className="justify-end items-end flex-col hidden xs:flex">
            <div className="flex justify-end items-end gap-3">
              <a
                href="https://www.linkedin.com/in/carmen-puche/"
                className="svggg transition-transform duration-300 ease-in-out"
                target="_blank"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00046 4.00091C3.10528 4.00091 4.00092 3.10528 4.00092 2.00046C4.00092 0.895635 3.10528 0 2.00046 0C0.895635 0 0 0.895635 0 2.00046C0 3.10528 0.895635 4.00091 2.00046 4.00091Z"
                    fill="black"
                    fillOpacity="0.8"
                  ></path>
                  <path
                    d="M5.8899 5.51681V16.6153H9.33584V11.1269C9.33584 9.67864 9.6083 8.27612 11.404 8.27612C13.1749 8.27612 13.1969 9.93189 13.1969 11.2183V16.6162H16.6446V10.5298C16.6446 7.54012 16.001 5.24252 12.5066 5.24252C10.8289 5.24252 9.7043 6.16321 9.24441 7.03452H9.19778V5.51681H5.8899ZM0.274353 5.51681H3.72578V16.6153H0.274353V5.51681Z"
                    fill="black"
                    fillOpacity="0.8"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.behance.net/carmenpuche_#"
                className="svggg transition-transform duration-300 ease-in-out"
                target="_blank"
              >
                <svg
                  width="23"
                  height="14"
                  viewBox="0 0 23 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9236 0.907181H20.6272V2.2297H14.9236V0.907181ZM9.20861 6.13987C10.4694 5.56332 11.1298 4.68619 11.1298 3.33089C11.1298 0.650329 9.0428 0 6.63272 0H0V13.4547H6.81855C9.37443 13.4547 11.7731 12.2797 11.7731 9.54726C11.7731 7.85859 10.9383 6.60985 9.20861 6.13987ZM3.09336 2.29528H5.99518C7.11302 2.29528 8.1165 2.59312 8.1165 3.83366C8.1165 4.97583 7.33601 5.43489 6.22961 5.43489H3.09336V2.29528ZM6.39543 11.1704H3.0905V7.46512H6.46118C7.82203 7.46512 8.68257 8.00888 8.68257 9.38605C8.68257 10.7414 7.65621 11.1704 6.39543 11.1704ZM22.8571 8.72479C22.8571 5.84203 21.0932 3.44018 17.9026 3.44018C14.8007 3.44018 12.6908 5.67262 12.6908 8.59909C12.6908 11.6321 14.6892 13.7143 17.9026 13.7143C20.3356 13.7143 21.9108 12.6677 22.6685 10.4353H20.2012C19.9325 11.2687 18.8403 11.7059 17.9912 11.7059C16.3502 11.7059 15.4925 10.7878 15.4925 9.22756H22.8371C22.8457 9.06635 22.8571 8.89694 22.8571 8.72479ZM15.4925 7.5389C15.5812 6.25736 16.476 5.45675 17.814 5.45675C19.2206 5.45675 19.9239 6.24644 20.0468 7.5389H15.4925Z"
                    fill="black"
                    fillOpacity="0.8"
                  ></path>
                </svg>
              </a>
            </div>
            <p className="correo text-[14px] md:text-[17px]">
              cmpuche@hotmail.com
            </p>
          </div>
        </section>
      </main>
    </ProjectLayout>
  );
}
