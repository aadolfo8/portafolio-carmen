"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function SiteHeader({ home = false }: { home?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const es = language === "es";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className={home ? "grid grid-cols-[auto_1fr_auto] items-stretch border-b border-border" : "grid grid-cols-[auto_1fr_auto] items-stretch"}>
        <Link href={home ? "#top" : "/"} className="display flex items-center border-r border-border px-3 py-2 text-2xl hover:bg-foreground hover:text-background md:text-3xl">Carmen Puche</Link>
        <div className="flex min-w-0 items-stretch justify-between">
          <span className="label hidden items-center px-3 text-muted-foreground lg:flex">Directora de arte</span>
          <a href="mailto:carmenpuchemartinez@gmail.com" className="label ml-auto hidden items-center border-l border-border px-3 hover:bg-foreground hover:text-background md:flex">carmenpuchemartinez@gmail.com</a>
        </div>
        {home ? (
          <div className="flex items-center justify-end border-l border-border px-1 sm:px-2">
            <button type="button" onClick={() => setLanguage("es")} aria-pressed={es} className={`label px-1 py-2 sm:px-2 ${es ? "underline" : "text-muted-foreground"}`}>ESP</button>
            <span className="label text-muted-foreground">|</span>
            <button type="button" onClick={() => setLanguage("en")} aria-pressed={!es} className={`label px-1 py-2 sm:px-2 ${!es ? "underline" : "text-muted-foreground"}`}>ENG</button>
          </div>
        ) : (
          <Link href="/#trabajos" className="label flex items-center border-l border-border px-3 hover:bg-foreground hover:text-background">Cerrar ×</Link>
        )}
      </div>
      <a href="mailto:carmenpuchemartinez@gmail.com" className={`label block px-3 py-2 hover:bg-foreground hover:text-background md:hidden ${home ? "" : "border-t border-border"}`}>carmenpuchemartinez@gmail.com</a>
      {home && (
        <div className="grid grid-cols-2">
          <a href="#trabajos" className="label border-r border-border p-3 hover:bg-foreground hover:text-background">{es ? "Trabajos ↓" : "Work ↓"}</a>
          <span className="label p-3 text-muted-foreground">Madrid</span>
        </div>
      )}
    </header>
  );
}
