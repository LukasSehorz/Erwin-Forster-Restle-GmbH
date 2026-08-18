import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { Feld } from "@/components/Feld";
import { betrieb } from "@/lib/betrieb";
import { kontaktSchema, oeffneMailEntwurf } from "@/lib/formular";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt und Anfahrt – Drieschstraße 8, München | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Erwin Restle GmbH, Drieschstraße 8, 80999 München Allach-Untermenzing. Telefon 089 8202 0441, info@restle.online, Büro Mo–Fr 8:30 bis 12:30 Uhr, jederzeit per E-Mail erreichbar.",
      },
      { property: "og:title", content: "Kontakt – Erwin Restle GmbH München" },
      {
        property: "og:description",
        content: "Drieschstraße 8, 80999 München. Telefon 089 8202 0441.",
      },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <>
      <SeitenKopf
        ueberschrift="Kontakt"
        einleitung="Am schnellsten geht es telefonisch. Das Büro ist werktags von 08:30 bis 12:30 Uhr besetzt – per E-Mail erreichen Sie uns jederzeit."
      />

      <Abschnitt>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal>
            <h2 className="text-2xl">Erwin Restle GmbH</h2>
            <address className="mt-4 space-y-2 text-lg not-italic">
              <p>
                {betrieb.strasse}
                <br />
                {betrieb.plz} {betrieb.ort} ({betrieb.stadtteil})
              </p>
              <p>
                Telefon:{" "}
                <a href={betrieb.telefonLink} className="text-primary underline underline-offset-4">
                  {betrieb.telefonAnzeige}
                </a>
              </p>
              <p>Telefax: {betrieb.faxAnzeige}</p>
              <p>
                E-Mail:{" "}
                <a
                  href={`mailto:${betrieb.email}`}
                  className="text-primary underline underline-offset-4"
                >
                  {betrieb.email}
                </a>
              </p>
              <p>Büro: {betrieb.oeffnungszeiten}</p>
              <p className="text-muted-foreground">
                {betrieb.emailHinweis} –{" "}
                <a
                  href={`mailto:${betrieb.email}`}
                  className="text-primary underline underline-offset-4"
                >
                  {betrieb.email}
                </a>
              </p>
            </address>

            <div className="mt-8 overflow-hidden border border-border">
              <iframe
                title="Karte: Drieschstraße 8, 80999 München"
                src="https://www.openstreetmap.org/export/embed.html?bbox=11.4530%2C48.1930%2C11.4730%2C48.2030&layer=mapnik&marker=48.1980%2C11.4630"
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-2 text-[17px]">
              <a
                href="https://www.openstreetmap.org/?mlat=48.1980&mlon=11.4630#map=17/48.1980/11.4630"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4"
              >
                Karte in neuem Fenster öffnen
              </a>
            </p>
          </Reveal>

          <Reveal delay={1}>
            <KontaktFormular />
          </Reveal>
        </div>
      </Abschnitt>
    </>
  );
}

function KontaktFormular() {
  const [fehler, setFehler] = useState<Record<string, string>>({});

  function absenden(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const daten = Object.fromEntries(new FormData(event.currentTarget));
    const ergebnis = kontaktSchema.safeParse(daten);

    if (!ergebnis.success) {
      const neu: Record<string, string> = {};
      for (const problem of ergebnis.error.issues) {
        neu[String(problem.path[0])] = problem.message;
      }
      setFehler(neu);
      return;
    }

    setFehler({});
    oeffneMailEntwurf("Anfrage über die Website", {
      Name: ergebnis.data.name,
      "Telefon oder E-Mail": ergebnis.data.kontaktweg,
      Nachricht: ergebnis.data.nachricht,
    });
  }

  return (
    <form onSubmit={absenden} className="border border-border bg-sand p-6 md:p-8" noValidate>
      <h2 className="text-2xl">Anfrage schreiben</h2>
      <div className="mt-6 space-y-5">
        <Feld label="Name" name="name" fehler={fehler["name"]} autoComplete="name" />
        <Feld
          label="Telefon oder E-Mail"
          name="kontaktweg"
          fehler={fehler["kontaktweg"]}
          autoComplete="tel"
        />
        <div>
          <label htmlFor="nachricht" className="block text-lg font-semibold">
            Nachricht
          </label>
          <textarea
            id="nachricht"
            name="nachricht"
            rows={5}
            aria-invalid={fehler["nachricht"] ? true : undefined}
            className="mt-2 w-full border border-input bg-background px-4 py-3 text-lg"
          />
          {fehler["nachricht"] ? (
            <p className="mt-1 text-[17px] text-primary">{fehler["nachricht"]}</p>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
      >
        Anfrage abschicken
      </button>
      <p className="mt-3 text-[17px] text-muted-foreground">
        Das Formular öffnet eine vorbereitete E-Mail an {betrieb.email}.
      </p>
    </form>
  );
}
