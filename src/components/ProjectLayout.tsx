import { Poppins } from "next/font/google";
import type { FC, PropsWithChildren } from "react";
import NavBar from "../components/NavBar";
interface Props {
  title: string;
  isMainPage?: boolean;
  description: string;
  favicon?: string;
}

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProjectLayout: FC<PropsWithChildren<Props>> = ({
  title,
  isMainPage,
  description,
  favicon,
  children,
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Astro description" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/png" href={`${isMainPage ? '/favicon.png' : '/${favicon}'}`} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        <title>{title}</title>

        <meta
          name="keywords"
          content="diseño, portafolio, publicidad, carmen"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Carmen Puche" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </head>
      <body>
        <NavBar isMainPage={isMainPage ?? false} />
        <div
          className={`${poppins.variable} selection:bg-primary selection:text-secondary min-h-screen w-full`}
          id="main-content"
        >
          <div className={isMainPage === undefined ? "main-project" : ""}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default ProjectLayout;
