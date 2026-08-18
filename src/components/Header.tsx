import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { betrieb, navigation } from "@/lib/betrieb";
import { logoUrl } from "@/lib/bilder";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [offen, setOffen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOffen(false)}>
          <LogoZeichen />
          <span className="leading-tight">
            <span className="block text-lg font-bold">Erwin Restle GmbH</span>
            <span className="block text-xs text-muted-foreground">
              Spenglerei · Dachdeckerei · München
            </span>
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-[17px]">
            {navigation.map((punkt) => (
              <li key={punkt.to}>
                <Link
                  to={punkt.to}
                  activeOptions={{ exact: punkt.to === "/" }}
                  className={
                    punkt.to === "/karriere"
                      ? "font-semibold text-primary underline decoration-2 underline-offset-8 transition-colors hover:text-primary/80"
                      : "text-foreground transition-colors hover:text-primary"
                  }
                  activeProps={{
                    className:
                      punkt.to === "/karriere"
                        ? undefined
                        : "text-primary underline decoration-2 underline-offset-8",
                  }}
                >
                  {punkt.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={betrieb.telefonLink}
            className="hidden items-center gap-2 border border-primary px-4 py-2 text-[17px] font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {betrieb.telefonAnzeige}
          </a>
          <button
            type="button"
            onClick={() => setOffen((v) => !v)}
            aria-expanded={offen}
            aria-controls="hauptmenue-mobil"
            className="inline-flex items-center gap-2 border border-border px-3 py-2 text-[17px] lg:hidden"
          >
            {offen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
            <span>Menü</span>
          </button>
        </div>
      </div>

      {offen ? (
        <nav
          id="hauptmenue-mobil"
          aria-label="Hauptnavigation mobil"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {navigation.map((punkt) => (
              <li key={punkt.to} className="border-b border-border last:border-b-0">
                <Link
                  to={punkt.to}
                  onClick={() => setOffen(false)}
                  activeOptions={{ exact: punkt.to === "/" }}
                  className={`block py-3 text-lg ${
                    punkt.to === "/karriere" ? "font-semibold text-primary" : ""
                  }`}
                  activeProps={{ className: "text-primary font-semibold" }}
                >
                  {punkt.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

/** Firmenlogo: Haus mit rotem Dach und den Buchstaben ER. */
export function LogoZeichen({ groesse = 40 }: { groesse?: number }) {
  return (
    <img
      src={logoUrl}
      width={groesse}
      height={groesse}
      alt="Logo Erwin Restle GmbH"
      className="shrink-0 object-contain"
      style={{ height: groesse, width: "auto" }}
    />
  );
}
