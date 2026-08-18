import { createFileRoute } from "@tanstack/react-router";
import { Bild } from "@/components/Bild";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { RecruitingBanner } from "@/components/RecruitingBanner";
import { betrieb } from "@/lib/betrieb";

export const Route = createFileRoute("/sekuranten")({
  head: () => ({
    meta: [
      { title: "Sekuranten und Absturzsicherung am Dach in München | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Dachverkehrssicherheit in München: Einzelanschlagpunkte (Sekuranten), Seil- und Schienensicherungssysteme, sichere Dachzugänge sowie Prüfung und Wartung.",
      },
      { property: "og:title", content: "Sekuranten – Absturzsicherung am Dach" },
      {
        property: "og:description",
        content:
          "Anschlagpunkte, Seil- und Schienensysteme, sichere Verkehrswege am Dach – montiert und gewartet vom Betrieb in Allach-Untermenzing.",
      },
      { property: "og:url", content: "/sekuranten" },
    ],
    links: [{ rel: "canonical", href: "/sekuranten" }],
  }),
  component: Sekuranten,
});

const systeme = [
  {
    titel: "Einzelanschlagpunkte / Sekuranten",
    text: "Fest installierte Anschlagpunkte, an denen sich Personen mit persönlicher Schutzausrüstung gegen Absturz sichern können. Sie werden dort gesetzt, wo regelmäßig gearbeitet wird – am Kamin, an der Dachluke, an Anlagen auf dem Dach – und werden dicht und tragfähig in den Dachaufbau eingebunden.",
  },
  {
    titel: "Seilsicherungssysteme",
    text: "Horizontale Sicherungssysteme entlang festgelegter Arbeits- und Verkehrsbereiche. Das mitlaufende Verbindungsmittel bleibt beim Gehen eingehängt, so lassen sich auch größere Dachflächen durchgehend gesichert begehen.",
  },
  {
    titel: "Schienensicherungssysteme",
    text: "Feste Führungssysteme mit beweglichem Anschlagpunkt. Sie sind vor allem dort sinnvoll, wo Wartungs- und Verkehrswege regelmäßig genutzt werden und ein sauber definierter Laufweg gebraucht wird.",
  },
  {
    titel: "Sichere Dachzugänge und Verkehrswege",
    text: "Wir planen Zugänge, Laufwege und Arbeitsbereiche so, dass Wartung, Reinigung und technische Arbeiten am Dach ohne Improvisation möglich sind – vom Ausstieg bis zur letzten Anlage auf der Fläche.",
  },
  {
    titel: "Prüfung und Wartung",
    text: "Anschlag- und Sicherungseinrichtungen werden regelmäßig kontrolliert – entsprechend den Herstellerangaben und den geltenden Anforderungen. Wir übernehmen die wiederkehrende Prüfung und dokumentieren sie.",
  },
];

function Sekuranten() {
  return (
    <>
      <SeitenKopf
        kicker="Dachverkehrssicherheit"
        ueberschrift="Sekuranten und Absturzsicherung"
        einleitung="Damit auf dem Dach sicher gearbeitet werden kann: Anschlagpunkte, Seil- und Schienensysteme sowie sichere Wege für Wartung und Kontrolle."
      />

      <Abschnitt>
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div className="space-y-10">
            <Reveal>
              <div className="max-w-xl space-y-5 text-lg">
                <p>
                  Jedes Dach wird irgendwann wieder betreten – für die Wartung der Heizung, die
                  Reinigung der Rinne, den Schornsteinfeger oder die Kontrolle der Dachfläche
                  selbst. Absturzsicherung sorgt dafür, dass das nicht zur Ausnahmesituation wird,
                  sondern zur normalen, gesicherten Arbeit.
                </p>
                <p className="text-muted-foreground">
                  Wir planen und montieren die passende Lösung für Ihr Dach, binden sie dicht in
                  den Dachaufbau ein und kümmern uns auf Wunsch auch um die wiederkehrende
                  Prüfung.
                </p>
              </div>
            </Reveal>

            {systeme.map((system, index) => (
              <Reveal key={system.titel} delay={index < 3 ? ((index % 3) as 0 | 1 | 2) : 0}>
                <div className="border-l-2 border-primary pl-6">
                  <h2 className="text-2xl">{system.titel}</h2>
                  <p className="mt-3 max-w-xl text-lg text-muted-foreground">{system.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1}>
            <div className="space-y-5 md:sticky md:top-28">
              <Bild
                datei="Dach01.jpg"
                alt="Dachfläche eines Wohnhauses, auf der Wartungsarbeiten anfallen"
                verhaeltnis="4/3"
              />
              <Bild
                datei="kamin01.jpg"
                alt="Kaminbereich am Dach – typischer Ort für einen festen Anschlagpunkt"
                verhaeltnis="4/3"
              />
            </div>
          </Reveal>
        </div>
      </Abschnitt>

      <Abschnitt grau>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl">Welche Lösung passt?</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Das hängt davon ab, wie oft das Dach betreten wird, wo die Wege verlaufen und wie
              der Dachaufbau aussieht. Auf einem Steildach mit einem einzelnen Wartungspunkt
              reicht oft ein Anschlagpunkt; wird eine große Flachdachfläche regelmäßig begangen,
              ist ein durchgehendes System die bessere Wahl. Wir schauen uns das Dach an und sagen
              offen, was nötig ist – und was nicht.
            </p>
            <p className="mt-5 text-lg">
              <a
                href={betrieb.telefonLink}
                className="font-semibold text-primary underline underline-offset-4"
              >
                Rufen Sie an: {betrieb.telefonAnzeige}
              </a>
            </p>
          </div>
        </Reveal>
      </Abschnitt>

      <RecruitingBanner />
    </>
  );
}
