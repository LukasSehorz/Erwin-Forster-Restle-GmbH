import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { betrieb, navigation } from "@/lib/betrieb";
import { logoUrl } from "@/lib/bilder";
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";

/** Untereintrag eines Ordners – behält die konkreten Routenpfade als Typ. */
type NavKind = Extract<(typeof navigation)[number], { kinder: unknown }>["kinder"][number];

export function Header() {
  const [mobilOffen, setMobilOffen] = useState(false);
  /** Label des aufgeklappten Ordners in der Desktop-Navigation, sonst null. */
  const [ordner, setOrdner] = useState<string | null>(null);
  const pfad = useRouterState({ select: (zustand) => zustand.location.pathname });

  // Nach einem Seitenwechsel darf kein Menü offen stehen bleiben.
  useEffect(() => {
    setMobilOffen(false);
    setOrdner(null);
  }, [pfad]);

  return (
    <header>
      <Topbar />
      <Logoband />

      {/*
        Kein Rahmen und darunter Luft bis zum Hero – wie bei der Vorlage
        gemessen: dort liegen 51 px zwischen Menuezeile und Bild, ohne Linie.
      */}
      <div className="sticky top-0 z-40 bg-background pb-[51px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 lg:justify-center">
          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-1 text-[17px] whitespace-nowrap">
              {navigation.map((punkt) =>
                "kinder" in punkt ? (
                  <Ordner
                    key={punkt.label}
                    label={punkt.label}
                    kinder={punkt.kinder}
                    offen={ordner === punkt.label}
                    aktiv={punkt.kinder.some((kind) => kind.to === pfad)}
                    aufklappen={(auf) => setOrdner(auf ? punkt.label : null)}
                  />
                ) : (
                  <li key={punkt.to}>
                    <Link
                      to={punkt.to}
                      activeOptions={{ exact: punkt.to === "/" }}
                      onMouseEnter={() => setOrdner(null)}
                      className={`block px-3 py-4 transition-colors ${
                        punkt.to === "/karriere"
                          ? "font-semibold text-primary hover:text-primary/80"
                          : "text-foreground hover:text-primary"
                      }`}
                      activeProps={{ className: "text-primary font-semibold" }}
                    >
                      {punkt.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Mobile Leiste: Anrufen und Burger. */}
          <a
            href={betrieb.telefonLink}
            className="inline-flex items-center gap-2 py-3 text-[17px] font-semibold text-primary lg:hidden"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {betrieb.telefonAnzeige}
          </a>
          <button
            type="button"
            onClick={() => setMobilOffen((offen) => !offen)}
            aria-expanded={mobilOffen}
            aria-controls="hauptmenue-mobil"
            className="inline-flex items-center gap-2 border border-border px-3 py-2 text-[17px] lg:hidden"
          >
            {mobilOffen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
            <span>Menü</span>
          </button>
        </div>

        {mobilOffen ? <MobilMenue schliessen={() => setMobilOffen(false)} /> : null}
      </div>
    </header>
  );
}

/** Schmaler roter Balken über dem Logo: Kontaktdaten links, Claim rechts. */
function Topbar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 text-[14px]">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href={`mailto:${betrieb.email}`}
            className="inline-flex items-center gap-2 hover:underline"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            {betrieb.email}
          </a>
          <a href={betrieb.telefonLink} className="inline-flex items-center gap-2 hover:underline">
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            {betrieb.telefonAnzeige}
          </a>
          <span className="hidden items-center gap-2 sm:inline-flex">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            {betrieb.strasse}, {betrieb.plz} {betrieb.ort}
          </span>
        </div>
        <p className="hidden lg:block">{betrieb.claim}</p>
      </div>
    </div>
  );
}

/** Weißes Band mit großem, mittig gesetztem Logo. */
function Logoband() {
  return (
    <div className="bg-background">
      <Link
        to="/"
        className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-5 py-6 md:py-8"
        aria-label="Erwin Restle GmbH – zur Startseite"
      >
        <span className="flex items-center gap-4">
          <img
            src={logoUrl}
            alt=""
            aria-hidden="true"
            className="h-14 w-auto shrink-0 object-contain md:h-20"
          />
          <span className="text-2xl leading-none font-bold tracking-tight sm:text-3xl md:text-5xl">
            Erwin Restle GmbH
          </span>
        </span>
        <span className="text-[12px] font-semibold tracking-[0.28em] text-primary uppercase md:text-sm">
          Spenglerei – Dachdeckerei
        </span>
      </Link>
    </div>
  );
}

/**
 * Aufklappbarer Übersichts-Ordner in der Desktop-Navigation.
 * Öffnet bei Hover und bei Klick, Escape schließt und gibt den Fokus zurück.
 */
function Ordner({
  label,
  kinder,
  offen,
  aktiv,
  aufklappen,
}: {
  label: string;
  kinder: readonly NavKind[];
  offen: boolean;
  aktiv: boolean;
  aufklappen: (auf: boolean) => void;
}) {
  const schalter = useRef<HTMLButtonElement>(null);
  const kennung = `ordner-${label.replace(/[^a-zA-Z]/g, "").toLowerCase()}`;

  return (
    <li
      className="relative"
      onMouseEnter={() => aufklappen(true)}
      onMouseLeave={() => aufklappen(false)}
      onKeyDown={(ereignis) => {
        if (ereignis.key === "Escape" && offen) {
          aufklappen(false);
          schalter.current?.focus();
        }
      }}
      onBlur={(ereignis) => {
        // Nur schließen, wenn der Fokus den Ordner ganz verlässt.
        if (!ereignis.currentTarget.contains(ereignis.relatedTarget)) aufklappen(false);
      }}
    >
      <button
        ref={schalter}
        type="button"
        aria-expanded={offen}
        aria-controls={kennung}
        onClick={() => aufklappen(!offen)}
        className={`inline-flex items-center gap-1 px-3 py-4 transition-colors hover:text-primary ${
          aktiv ? "font-semibold text-primary" : "text-foreground"
        }`}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${offen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <ul
        id={kennung}
        className={`absolute top-full left-0 z-50 min-w-60 border border-border bg-background shadow-lg ${
          offen ? "menue-einblenden block" : "hidden"
        }`}
      >
        {kinder.map((kind) => (
          <li key={kind.to} className="border-b border-border last:border-b-0">
            <Link
              to={kind.to}
              className="block px-5 py-3 transition-colors hover:bg-sand hover:text-primary"
              activeProps={{ className: "text-primary font-semibold bg-sand" }}
            >
              {kind.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

/** Ausklappmenü unter der Leiste – Untereinträge eingerückt. */
function MobilMenue({ schliessen }: { schliessen: () => void }) {
  return (
    <nav
      id="hauptmenue-mobil"
      aria-label="Hauptnavigation mobil"
      className="border-t border-border bg-background lg:hidden"
    >
      <ul className="mx-auto max-w-6xl px-5 py-2">
        {navigation.map((punkt) =>
          "kinder" in punkt ? (
            <li key={punkt.label} className="border-b border-border py-2 last:border-b-0">
              <p className="py-1 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                {punkt.label}
              </p>
              <ul className="pl-4">
                {punkt.kinder.map((kind) => (
                  <li key={kind.to}>
                    <Link
                      to={kind.to}
                      onClick={schliessen}
                      className="block py-2 text-lg"
                      activeProps={{ className: "text-primary font-semibold" }}
                    >
                      {kind.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={punkt.to} className="border-b border-border last:border-b-0">
              <Link
                to={punkt.to}
                onClick={schliessen}
                activeOptions={{ exact: punkt.to === "/" }}
                className={`block py-3 text-lg ${
                  punkt.to === "/karriere" ? "font-semibold text-primary" : ""
                }`}
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {punkt.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
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
