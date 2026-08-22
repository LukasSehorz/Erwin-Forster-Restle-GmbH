import { createFileRoute, Link } from "@tanstack/react-router";
import { Bild } from "@/components/Bild";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { betrieb } from "@/lib/betrieb";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – Tradition und Handwerk aus Leidenschaft | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Seit 1985 und über zwei Generationen steigen wir auf die Dächer in und um München. Inhabergeführtes Familienunternehmen für Spenglerei und Dachdeckerei in Allach-Untermenzing.",
      },
      { property: "og:title", content: "Tradition und Handwerk aus Leidenschaft" },
      {
        property: "og:description",
        content:
          "Inhabergeführtes Familienunternehmen aus München – seit 1985 hochwertiges Handwerk am Dach.",
      },
      { property: "og:url", content: "/ueber-uns" },
    ],
    links: [{ rel: "canonical", href: "/ueber-uns" }],
  }),
  component: UeberUns,
});

/** Leistungsschwerpunkte des Betriebs. */
const schwerpunkte = [
  "Dachwartungen",
  "Dachsanierungen für Steil- und Flachdächer",
  "Terrassensanierungen",
  "Reinigungs- und Abdichtungsarbeiten rund um das Dach",
  "Bleche schneiden und biegen",
  "Kaminverkleidungen",
  "Ziegeleindeckung",
];

const galerie = [
  { datei: "Dach_kupfer.jpg", alt: "Fertige Dachfläche aus Kupfer" },
  { datei: "Dach-Alu.jpg", alt: "Dacheindeckung aus Aluminium" },
  { datei: "Dach_Gaube1.jpg", alt: "Verkleidete Gaube nach der Fertigstellung" },
  { datei: "kamin01.jpg", alt: "Kamineinfassung aus Kupfer" },
  { datei: "Fenster_Rund2.jpg", alt: "Rundes Dachfenster mit Metalleinfassung" },
  { datei: "zwiebelturm01.jpg", alt: "Eingedeckter Zwiebelturm" },
  { datei: "zimmerer.jpg", alt: "Zimmererarbeiten an einer Dachkonstruktion" },
  { datei: "Dach01.jpg", alt: "Neu gedecktes Ziegeldach" },
];

function UeberUns() {
  return (
    <>
      <SeitenKopf
        kicker={`Seit ${betrieb.gegruendet} in München`}
        ueberschrift="Tradition und Handwerk aus Leidenschaft"
        einleitung="Ein inhabergeführtes Familienunternehmen aus Allach-Untermenzing – mit den Leuten, die tatsächlich auf Ihrem Dach stehen."
      />

      <Abschnitt>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <Reveal>
            <div className="max-w-2xl space-y-5 text-lg">
              <p>
                Seit {betrieb.gegruendet} und zwei Generationen hinweg steigen wir auf die Dächer in
                und um München. Als inhabergeführtes Familienunternehmen stehen wir für hochwertiges
                Handwerk, absolute Zuverlässigkeit und die fachgerechte Gestaltung von Dächern. Die
                Begeisterung für das Spengler- und Dachdeckerhandwerk liegt uns im Blut – dieses
                fundierte Wissen geben wir von Generation zu Generation weiter.
              </p>
              <p>
                Wir machen aus bestehenden Dächern zukunftssichere und zeitgemäße Lösungen. Ob
                energetische Sanierung, optische Aufwertung oder individuelle Umbauten und
                Umgestaltungen – wir verbinden traditionelles Handwerkskönnen aus Meisterhand mit
                innovativen Techniken.
              </p>
              <p>
                Als regional verwurzeltes Unternehmen legen wir besonderen Wert auf eine persönliche
                Beratung auf Augenhöhe. Wir begleiten Sie von der ersten Idee bis zur finalen
                Umsetzung Ihres Projekts.
              </p>
              <p className="text-muted-foreground">
                Geschäftsführer ist {betrieb.geschaeftsfuehrer}. Das Büro erreichen Sie{" "}
                {betrieb.oeffnungszeiten}.
              </p>
              <p className="text-muted-foreground">
                {betrieb.emailHinweis}:{" "}
                <a
                  href={`mailto:${betrieb.email}`}
                  className="text-primary underline underline-offset-4"
                >
                  {betrieb.email}
                </a>
              </p>
              <p className="flex flex-wrap gap-x-8 gap-y-2 font-semibold">
                <Link to="/team" className="text-primary underline underline-offset-4">
                  Unser Team kennenlernen
                </Link>
                <Link to="/karriere" className="text-primary underline underline-offset-4">
                  Wir suchen Verstärkung – offene Stellen
                </Link>
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <Bild
              datei="Arbeit_Spengler.jpg"
              alt="Fertig ausgeführtes Dach mit Kupferrinne an einem Münchner Wohnhaus"
              verhaeltnis="4/3"
            />
          </Reveal>
        </div>
      </Abschnitt>

      <Abschnitt grau>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl">Woran wir arbeiten</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Das sind die Arbeiten, die bei uns täglich anfallen – vom kleinen Wartungstermin bis
              zur kompletten Sanierung.
            </p>
          </div>
        </Reveal>
        <ul className="mt-8 grid gap-x-10 gap-y-3 text-lg sm:grid-cols-2">
          {schwerpunkte.map((punkt) => (
            <li key={punkt} className="border-b border-border pb-3">
              {punkt}
            </li>
          ))}
        </ul>
      </Abschnitt>

      <Abschnitt>
        <Reveal>
          <h2 className="text-3xl md:text-4xl">Ausgeführte Arbeiten</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galerie.map((bild) => (
            <Bild key={bild.datei} datei={bild.datei} alt={bild.alt} verhaeltnis="4/3" />
          ))}
        </div>
      </Abschnitt>
    </>
  );
}
