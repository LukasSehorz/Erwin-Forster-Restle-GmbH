import { createFileRoute } from "@tanstack/react-router";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { betrieb } from "@/lib/betrieb";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | Erwin Restle GmbH München" },
      {
        name: "description",
        content: "Informationen zum Umgang mit personenbezogenen Daten auf dieser Website.",
      },
      { property: "og:title", content: "Datenschutz – Erwin Restle GmbH" },
      { property: "og:description", content: "Umgang mit personenbezogenen Daten." },
      { property: "og:url", content: "/datenschutz" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Datenschutz,
});

const abschnitte = [
  "Verantwortlicher und Kontaktdaten",
  "Erhebung und Speicherung personenbezogener Daten beim Besuch der Website",
  "Kontaktaufnahme per Telefon, E-Mail und Kontaktformular",
  "Bewerbungen und Bewerberdaten",
  "Eingebundene Kartendarstellung",
  "Speicherdauer",
  "Ihre Rechte als betroffene Person",
  "Beschwerderecht bei der Aufsichtsbehörde",
];

function Datenschutz() {
  return (
    <>
      <SeitenKopf
        ueberschrift="Datenschutz"
        einleitung="Informationen zum Umgang mit personenbezogenen Daten auf dieser Website."
      />

      <Abschnitt>
        <div className="max-w-2xl space-y-8 text-lg">
          <section>
            <h2 className="text-2xl">Verantwortlicher</h2>
            <address className="mt-3 not-italic">
              {betrieb.name}
              <br />
              {betrieb.strasse}
              <br />
              {betrieb.plz} {betrieb.ort}
              <br />
              Telefon: {betrieb.telefonAnzeige}
              <br />
              E-Mail: {betrieb.email}
            </address>
          </section>

          <p className="text-muted-foreground">
            Die vollständige Datenschutzerklärung wird vom Betrieb geliefert und hier eingesetzt.
            Vorgesehen sind folgende Abschnitte:
          </p>

          {abschnitte.map((titel) => (
            <section key={titel} className="border-l-2 border-primary pl-6">
              <h2 className="text-2xl">{titel}</h2>
              <p className="mt-3 text-muted-foreground">Text folgt.</p>
            </section>
          ))}
        </div>
      </Abschnitt>
    </>
  );
}
