import "./globals.css";
import type { Metadata } from "next";
import { Anton, Space_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://carmenpuche.com"),
  title: "Carmen Puche — Directora de Arte",
  description: "Portfolio de Carmen Puche, directora de arte en Madrid.",
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
