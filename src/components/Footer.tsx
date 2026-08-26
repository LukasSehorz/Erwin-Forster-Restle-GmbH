import { Link } from "@tanstack/react-router";
import { agentur, betrieb, navigationFlach } from "@/lib/betrieb";
import { LogoZeichen } from "./Header";
import { Mail, MapPin, Phone } from "lucide-react";

const wichtigeLinks = [
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/team", label: "Team" },
  { to: "/kontakt", label: "Kontakt und Anfahrt" },
  { to: "/karriere", label: "Offene Stellen" },
  { to: "/impressum", label: "Impressum" },
  { to: "/datenschutz", label: "Datenschutz" },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h2 className="text-base font-bold tracking-wide uppercase">Über uns</h2>
          <div className="mt-4 flex items-center gap-3">
            <LogoZeichen groesse={40} />
            <span className="text-lg font-bold">Erwin Restle GmbH</span>
          </div>
          <p className="mt-3 text-[17px] text-muted-foreground">
            Familienbetrieb aus {betrieb.ort} {betrieb.stadtteil} – seit {betrieb.gegruendet}{" "}
            Spenglerei und Dachdeckerei aus einer Hand.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold tracking-wide uppercase">Wichtige Links</h2>
          <ul className="mt-4 space-y-1 text-[17px]">
            {wichtigeLinks.map((punkt) => (
              <li key={punkt.to}>
                <Link to={punkt.to} className="hover:text-primary hover:underline">
                  {punkt.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold tracking-wide uppercase">Schnellnavigation</h2>
          <ul className="mt-4 space-y-1 text-[17px]">
            {navigationFlach.map((punkt) => (
              <li key={punkt.to}>
                <Link
                  to={punkt.to}
                  activeOptions={{ exact: punkt.to === "/" }}
                  className="hover:text-primary hover:underline"
                >
                  {punkt.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 text-[17px] md:grid-cols-3">
          <p className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <a href={betrieb.telefonLink} className="text-primary underline underline-offset-4">
                {betrieb.telefonAnzeige}
              </a>
              <br />
              <span className="text-muted-foreground">Telefax: {betrieb.faxAnzeige}</span>
            </span>
          </p>
          <p className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <a
                href={`mailto:${betrieb.email}`}
                className="text-primary underline underline-offset-4"
              >
                {betrieb.email}
              </a>
              <br />
              <span className="text-muted-foreground">Büro: {betrieb.oeffnungszeiten}</span>
              <br />
              <span className="text-muted-foreground">{betrieb.emailHinweis}</span>
            </span>
          </p>
          <address className="flex items-start gap-3 not-italic">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              {betrieb.strasse}
              <br />
              {betrieb.plz} {betrieb.ort}
            </span>
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-5 py-5 pb-24 text-[17px] md:pb-5">
          <span className="text-muted-foreground">
            © {new Date().getFullYear()} Erwin Restle GmbH
          </span>
          <Link to="/impressum" className="hover:text-primary hover:underline">
            Impressum
          </Link>
          <Link to="/datenschutz" className="hover:text-primary hover:underline">
            Datenschutz
          </Link>
          <a
            href={agentur.url}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary hover:underline"
          >
            {agentur.hinweis}
          </a>
        </div>
      </div>
    </footer>
  );
}
