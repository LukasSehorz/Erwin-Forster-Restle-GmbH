import { Link } from "@tanstack/react-router";
import { betrieb, navigation } from "@/lib/betrieb";
import { LogoZeichen } from "./Header";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 pb-28 md:grid-cols-3 md:pb-14">
        <div>
          <div className="flex items-center gap-3">
            <LogoZeichen groesse={36} />
            <span className="text-lg font-bold">Erwin Restle GmbH</span>
          </div>
          <p className="mt-3 text-[17px] text-muted-foreground">{betrieb.zusatz}</p>
        </div>

        <div>
          <h2 className="text-base font-bold tracking-wide uppercase">Kontakt</h2>
          <address className="mt-3 space-y-1 text-[17px] not-italic">
            <p>
              {betrieb.strasse}
              <br />
              {betrieb.plz} {betrieb.ort}
            </p>
            <p>
              Telefon:{" "}
              <a href={betrieb.telefonLink} className="text-primary underline underline-offset-4">
                {betrieb.telefonAnzeige}
              </a>
            </p>
            <p>Telefax: {betrieb.faxAnzeige}</p>
            <p>
              <a
                href={`mailto:${betrieb.email}`}
                className="text-primary underline underline-offset-4"
              >
                {betrieb.email}
              </a>
            </p>
            <p className="text-muted-foreground">Büro: {betrieb.oeffnungszeiten}</p>
            <p className="text-muted-foreground">{betrieb.emailHinweis}</p>
          </address>
        </div>

        <div>
          <h2 className="text-base font-bold tracking-wide uppercase">Seiten</h2>
          <ul className="mt-3 space-y-1 text-[17px]">
            {navigation.map((punkt) => (
              <li key={punkt.to}>
                <Link to={punkt.to} className="hover:text-primary hover:underline">
                  {punkt.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/kontakt" className="hover:text-primary hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
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
        </div>
      </div>
    </footer>
  );
}
