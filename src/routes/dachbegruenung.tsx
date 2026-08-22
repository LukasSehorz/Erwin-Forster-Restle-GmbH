import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { betrieb } from "@/lib/betrieb";

export const Route = createFileRoute("/dachbegruenung")({
  head: () => ({
    meta: [
      { title: "Dachbegrünung in München – Vermittlung an den Fachbetrieb | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Dachbegrünung in München: Wir bereiten das Dach vor und vermitteln die Begrünung an einen spezialisierten Partnerbetrieb – Abdichtung und Anschlüsse kommen von uns.",
      },
      { property: "og:title", content: "Dachbegrünung" },
      {
        property: "og:description",
        content:
          "Wurzelfeste Abdichtung und Anschlüsse von uns, die Begrünung selbst von einem spezialisierten Partnerbetrieb.",
      },
      { property: "og:url", content: "/dachbegruenung" },
    ],
    links: [{ rel: "canonical", href: "/dachbegruenung" }],
  }),
  component: Dachbegruenung,
});

/** Kurztext bis zur Lieferung des endgueltigen Kundentexts. */
const teile = [
  {
    titel: "Das kommt von uns",
    text: "Die Grundlage unter der Begrünung: wurzelfeste Abdichtung, saubere Anschlüsse, Entwässerung mit Notüberlauf und die Spenglerarbeiten am Dachrand. Damit passt der Aufbau, bevor die erste Pflanze auf das Dach kommt.",
  },
  {
    titel: "Das übernimmt der Fachbetrieb",
    text: "Substrat, Bepflanzung und die spätere Pflege der begrünten Fläche. Darauf ist ein Partnerbetrieb spezialisiert, mit dem wir zusammenarbeiten – wir stellen den Kontakt her und stimmen die Arbeiten am Dach ab.",
  },
];

function Dachbegruenung() {
  return (
    <>
      <SeitenKopf
        kicker="In Zusammenarbeit mit einem Fachbetrieb"
        ueberschrift="Dachbegrünung"
        einleitung="Ein begrüntes Dach hält Regenwasser zurück, verbessert das Kleinklima und schützt die Abdichtung vor Hitze, Frost und UV-Strahlung."
      />

      <Abschnitt>
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-5 text-center text-lg">
            <p>
              Die Begrünung selbst führen wir nicht aus. Wenn Sie Ihr Dach begrünen möchten,
              vermitteln wir Sie an einen spezialisierten Fachbetrieb, mit dem wir zusammenarbeiten
              – Sie müssen sich also nicht selbst auf die Suche machen.
            </p>
            <p className="text-muted-foreground">
              Sprechen Sie uns einfach an, dann klären wir gemeinsam, was Ihr Dach trägt und wer
              welchen Teil übernimmt.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {teile.map((teil, index) => (
            <Reveal key={teil.titel} delay={index as 0 | 1}>
              <div className="h-full border-t-2 border-primary bg-sand p-6 md:p-8">
                <h2 className="text-2xl">{teil.titel}</h2>
                <p className="mt-3 text-lg text-muted-foreground">{teil.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={betrieb.telefonLink}
              className="inline-flex items-center justify-center bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Rufen Sie an: {betrieb.telefonAnzeige}
            </a>
            <Link
              to="/dachdeckerei"
              className="text-lg font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Zur Dachdeckerei: Abdichtung, Sanierung und Anschlüsse
            </Link>
          </div>
        </Reveal>
      </Abschnitt>
    </>
  );
}
