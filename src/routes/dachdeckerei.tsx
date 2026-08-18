import { createFileRoute } from "@tanstack/react-router";
import { Bild } from "@/components/Bild";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { RecruitingBanner } from "@/components/RecruitingBanner";

export const Route = createFileRoute("/dachdeckerei")({
  head: () => ({
    meta: [
      { title: "Dachdeckerei München – neu decken, sanieren, begrünen | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Dachdecker in München Allach-Untermenzing: Dächer neu decken und reparieren, abdichten, Brandschutzwände, energetische Dachsanierung, Dachflächenfenster und Dachbegrünung.",
      },
      { property: "og:title", content: "Dachdeckerei in München" },
      {
        property: "og:description",
        content:
          "Dächer neu decken und reparieren, abdichten, energetisch sanieren, Dachflächenfenster und Dachbegrünung – aus Allach-Untermenzing.",
      },
      { property: "og:url", content: "/dachdeckerei" },
    ],
    links: [{ rel: "canonical", href: "/dachdeckerei" }],
  }),
  component: Dachdeckerei,
});

type Thema = {
  titel: string;
  text: string;
  /** Auf Kundenwunsch im Entwurf rot hervorgehoben. */
  hervorheben?: boolean;
};

const themen: Thema[] = [
  {
    titel: "Neu decken und reparieren",
    text: "Wir decken Dächer neu und setzen beschädigte Stellen instand. Nach einem Sturm schauen wir uns den Schaden an und sagen, ob eine Reparatur reicht.",
  },
  {
    titel: "Abdichten von Dächern und Terrassen",
    text: "Flachdächer, Anschlüsse und Terrassen dichten wir dauerhaft ab. Wo Wasser eindringt, suchen wir zuerst die Ursache.",
  },
  {
    titel: "Brandschutzwände",
    text: "Brandschutzwände führen wir fachgerecht aus und schließen sie dicht an die Dachfläche an.",
    hervorheben: true,
  },
  {
    titel: "Energetische Dachsanierung",
    text: "Wir sanieren bestehende Dächer und verbessern dabei ihre energetische Qualität: neue Dämmebene, dichte Anschlüsse, sauber ausgeführte Luft- und Winddichtung. Das senkt die Heizkosten, macht den Dachboden nutzbar und lässt sich im Zuge der Neueindeckung oder nachträglich ausführen.",
  },
  {
    titel: "Dachflächenfenster",
    text: "Einbau und Austausch von Dachflächenfenstern – herstellerunabhängig und mit dichtem Anschluss an die Dachhaut. Dazu die allgemeine Wartung und Reinigung der Fenster: Beschläge nachstellen, Dichtungen prüfen, Rahmen und Verglasung säubern.",
  },
];

const begruenung = [
  {
    titel: "Extensive Begrünung",
    text: "Pflegeleichter Aufbau mit niedriger Aufbauhöhe und geringem Gewicht, meist mit Sedum, Moosen und Kräutern. Die passende Lösung für Garagen, Anbauten und Flachdächer, die nicht betreten werden.",
  },
  {
    titel: "Intensive Begrünung",
    text: "Höherer Schichtaufbau mit größerer Pflanzenvielfalt – bis hin zu Stauden, Sträuchern und nutzbaren Dachgärten. Dafür prüfen wir vorab Statik, Zugang und Bewässerung.",
  },
  {
    titel: "Aufbau und Abdichtung",
    text: "Wurzelfeste Abdichtung, Schutz-, Drainage- und Filterschicht, Substrat und Bepflanzung – fachgerecht geschichtet, inklusive Anschlüsse, Rand- und Kiesstreifen sowie Notüberlauf.",
  },
  {
    titel: "Pflege und Wartung",
    text: "Begrünte Dächer brauchen regelmäßige Kontrolle: Aufwuchs entfernen, Abläufe und Notüberläufe frei halten, Randbereiche prüfen. Das übernehmen wir auf Wunsch dauerhaft.",
  },
];

function Dachdeckerei() {
  return (
    <>
      <SeitenKopf
        kicker="Handwerk am Dach"
        ueberschrift="Dachdeckerei"
        einleitung="Wir decken Dächer neu und reparieren sie. Dazu alles, was dicht und warm hält."
      />

      <Abschnitt>
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div className="space-y-10">
            {themen.map((thema, index) => (
              <Reveal key={thema.titel} delay={index < 3 ? ((index % 3) as 0 | 1 | 2) : 0}>
                <div
                  className={
                    thema.hervorheben
                      ? "border-l-2 border-primary bg-primary/5 py-4 pl-6"
                      : "border-l-2 border-primary pl-6"
                  }
                >
                  <h2 className={`text-2xl ${thema.hervorheben ? "text-primary" : ""}`}>
                    {thema.titel}
                  </h2>
                  <p
                    className={`mt-3 max-w-xl text-lg ${
                      thema.hervorheben ? "font-semibold text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {thema.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1}>
            <div className="space-y-5 md:sticky md:top-28">
              <Bild
                datei="Dach01.jpg"
                alt="Fertig gedecktes Ziegeldach eines Wohnhauses"
                verhaeltnis="4/3"
              />
              <Bild
                datei="Dach_Gaube2.jpg"
                alt="Gaube mit sauberem Anschluss an die Dachfläche"
                verhaeltnis="4/3"
              />
            </div>
          </Reveal>
        </div>
      </Abschnitt>

      <Abschnitt grau>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl">
              Dachbegrünung – nachhaltig, funktional und langlebig
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Wir realisieren fachgerechte Dachbegrünungen und stimmen Aufbau, Abdichtung und
              Begrünung auf das jeweilige Dach ab. Begrünte Dächer halten Regenwasser zurück,
              verbessern das Mikroklima und schützen die Dachabdichtung zusätzlich vor Hitze,
              Frost und UV-Strahlung – die Fläche hält dadurch in der Regel länger.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {begruenung.map((punkt, index) => (
            <Reveal key={punkt.titel} delay={(index % 3) as 0 | 1 | 2}>
              <div className="border-t-2 border-primary pt-4">
                <h3 className="text-2xl">{punkt.titel}</h3>
                <p className="mt-3 text-lg text-muted-foreground">{punkt.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 max-w-3xl border-l-2 border-primary pl-6">
            <h3 className="text-2xl">Sonderformen</h3>
            <p className="mt-3 text-lg text-muted-foreground">
              Je nach Anforderung sind auch Retentionsgründächer mit erhöhtem Wasserrückhalt,
              Biodiversitätsgründächer mit heimischer Bepflanzung sowie Solargründächer
              möglich, bei denen Photovoltaik und Begrünung auf derselben Fläche kombiniert
              werden.
            </p>
          </div>
        </Reveal>
      </Abschnitt>

      <RecruitingBanner />
    </>
  );
}
