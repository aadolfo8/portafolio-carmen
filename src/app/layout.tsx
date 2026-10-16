import "./globals.css";
import type { Metadata } from "next";
import { Anton, Space_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://carmenpuche.com"),
  title: { default: "Carmen Puche — Directora de Arte en Madrid", template: "%s | Carmen Puche" },
  description: "Portfolio de Carmen Puche, directora de arte en Madrid. Campañas, identidad visual y proyectos para marcas como Burger King, Liga F y Spotify.",
  alternates: { canonical: "/", languages: { es: "/", en: "/en" } },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    siteName: "Carmen Puche",
    title: "Carmen Puche — Directora de Arte en Madrid",
    description: "Portfolio de dirección de arte, campañas y proyectos creativos.",
    url: "/",
    images: [{ url: "/carmen-portrait.png", alt: "Carmen Puche, directora de arte" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${anton.variable} ${spaceMono.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
