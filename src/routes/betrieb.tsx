import { createFileRoute, Link } from "@tanstack/react-router";
import { Bild } from "@/components/Bild";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { TeamKarte, type Mitarbeiter } from "@/components/TeamKarte";
import { betrieb } from "@/lib/betrieb";

export const Route = createFileRoute("/betrieb")({
  head: () => ({
    meta: [
      { title: "Betrieb und Team – seit 1985 in München | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Die Dachdeckerei Spenglerei Erwin Restle existiert seit 1985 und ist seitdem ein Begriff für zuverlässig ausgeführte Dachdecker- und Spenglerarbeiten in München und Umgebung.",
      },
      { property: "og:title", content: "Betrieb und Team – Erwin Restle GmbH" },
      {
        property: "og:description",
        content:
          "Familienbetrieb aus Allach-Untermenzing, seit 1985 am Dach. Dach, Metall und Holz aus einer Hand.",
      },
      { property: "og:url", content: "/betrieb" },
    ],
    links: [{ rel: "canonical", href: "/betrieb" }],
  }),
  component: BetriebSeite,
});

/**
 * Mitarbeiterfotos und Vornamen liegen noch nicht vollständig vor. Sobald sie da
 * sind, jeweils nur `vorname` und `foto` belegen – Layout bleibt unverändert.
 */
const team: Mitarbeiter[] = [
  {
    vorname: "Erwin",
    funktion: "Geschäftsführer",
    satz: "Führt den Betrieb seit den Anfängen. Er schaut sich jedes Dach selbst an, macht das Angebot und ist auf den Baustellen dabei – bei ihm laufen Termine, Material und Ausführung zusammen.",
  },
  {
    vorname: "Name",
    funktion: "Dachdecker",
    satz: "Deckt Steil- und Flachdächer neu ein, saniert bestehende Flächen und findet auch die Undichtigkeiten, die man von unten nicht sieht. Ziegeleindeckung, Abdichtung, Anschlüsse.",
  },
  {
    vorname: "Name",
    funktion: "Spengler",
    satz: "Schneidet und biegt die Bleche für Rinnen, Fallrohre, Kaminverkleidungen und Sonderteile – in der eigenen Werkstatt, passend zum Haus statt aus dem Katalog.",
  },
  {
    vorname: "Name",
    funktion: "Zimmerer",
    satz: "Kümmert sich um alles aus Holz: Dachstuhl, Gauben, Balkone und Verschalungen. Dadurch muss beim Dachumbau nicht zwischen zwei Firmen abgestimmt werden.",
  },
  {
    vorname: "Name",
    funktion: "Monteur",
    satz: "Übernimmt Montage, Terrassen- und Dachsanierungen sowie die Reinigungs- und Abdichtungsarbeiten rund um das Dach – und übergibt die Baustelle sauber.",
  },
  {
    vorname: "Name",
    funktion: "Azubi im 2. Lehrjahr",
    satz: "Ist von Anfang an auf der Baustelle mit dabei und lernt das Handwerk Schritt für Schritt: Blecharbeiten, Dach und Holz.",
  },
  {
    vorname: "Name",
    funktion: "Büro",
    satz: "Nimmt Anrufe entgegen, koordiniert Termine und kümmert sich um Angebote und Rechnungen. Erste Ansprechperson, wenn Sie sich melden.",
  },
];

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

function BetriebSeite() {
  return (
    <>
      <SeitenKopf
        kicker={`Seit ${betrieb.gegruendet} in München`}
        ueberschrift="Betrieb & Team"
        einleitung="Ein Familienbetrieb aus Allach-Untermenzing – mit den Leuten, die tatsächlich auf Ihrem Dach stehen."
      />

      <Abschnitt>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <Reveal>
            <div className="max-w-2xl space-y-5 text-lg">
              <p>
                Unser Unternehmen, die Dachdeckerei Spenglerei Erwin Restle, existiert seit{" "}
                {betrieb.gegruendet} und ist seit dieser Zeit ein Begriff für zuverlässig
                ausgeführte Dachdecker- und Spenglerarbeiten in München und Umgebung.
              </p>
              <p>
                Dach, Metall und Holz kommen bei uns aus einer Hand. Das heißt: Eindeckung,
                Spenglerarbeiten und Zimmererarbeiten müssen nicht zwischen drei Firmen abgestimmt
                werden. Überschaubare Größe, feste Mannschaft, kurze Wege – wer die Arbeit
                angeschaut hat, macht sie in der Regel auch.
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
              <p>
                <Link
                  to="/karriere"
                  className="font-semibold text-primary underline underline-offset-4"
                >
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
          <h2 className="text-3xl md:text-4xl">Unsere Mannschaft</h2>
          <div className="mt-4 max-w-2xl space-y-4 text-lg text-muted-foreground">
            <p>
              Bei uns arbeiten Dachdecker, Spengler, Zimmerer, Monteure und Auszubildende
              zusammen – eine feste Mannschaft, die sich kennt und aufeinander eingespielt ist.
              Deshalb steht bei Ihnen nicht jede Woche jemand anderes auf dem Dach, sondern
              dieselben Leute, die die Baustelle von Anfang an kennen.
            </p>
            <p>
              Ausgebildet wird im eigenen Betrieb: Wer bei uns anfängt, lernt das Handwerk auf der
              Baustelle und bleibt oft über die Ausbildung hinaus. Die Fotos werden gerade gemacht
              und danach hier eingesetzt.
            </p>
          </div>
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
          {team.map((person, index) => (
            <TeamKarte key={`${person.vorname}-${index}`} person={person} />
          ))}
        </ul>
      </Abschnitt>

      <Abschnitt>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl">Woran wir arbeiten</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Das sind die Arbeiten, die bei uns täglich anfallen – vom kleinen Wartungstermin
              bis zur kompletten Sanierung.
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

      <Abschnitt grau>
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
