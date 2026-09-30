import { createFileRoute, Link } from "@tanstack/react-router";
import { Bild } from "@/components/Bild";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { RecruitingBanner } from "@/components/RecruitingBanner";

export const Route = createFileRoute("/dachdeckerei")({
  head: () => ({
    meta: [
      { title: "Dachdeckerei München – neu decken, sanieren, abdichten | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Dachdecker in München Allach-Untermenzing: Dächer neu decken und reparieren, abdichten, Brandschutzwände, energetische Dachsanierung und Dachflächenfenster.",
      },
      { property: "og:title", content: "Dachdeckerei in München" },
      {
        property: "og:description",
        content:
          "Dächer neu decken und reparieren, abdichten, energetisch sanieren und Dachflächenfenster einbauen – aus Allach-Untermenzing.",
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
                <div className="border-l-2 border-primary pl-6">
                  <h2 className="text-2xl">{thema.titel}</h2>
                  <p className="mt-3 max-w-xl text-lg text-muted-foreground">{thema.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1}>
            <div className="grid grid-cols-2 gap-4 md:sticky md:top-28">
              <Bild
                datei="dachdecker-1.jpg"
                alt="Fertig gedecktes Ziegeldach eines Wohnhauses"
                verhaeltnis="4/3"
                className="col-span-2"
              />
              <Bild
                datei="dachdecker-2.jpg"
                alt="Sanierte Dachfläche mit sauberen Anschlüssen"
                verhaeltnis="4/3"
              />
              <Bild
                datei="fenster-allgemein.jpg"
                alt="Eingebaute Dachflächenfenster mit dichtem Anschluss an die Dachhaut"
                verhaeltnis="4/3"
              />
              <Bild
                datei="dachdecker-8.jpg"
                alt="Ziegeldach mit Kamineinfassungen und Zinkdeckung"
                verhaeltnis="4/3"
              />
              <Bild
                datei="dachdecker-9.jpg"
                alt="Neubau mit weißer Metallfassade und großen Schiebefenstern"
                verhaeltnis="4/3"
              />
            </div>
          </Reveal>
        </div>
      </Abschnitt>

      <Abschnitt grau>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl">Dachbegrünung</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Eine professionelle Dachbegrünung verwandelt ungenutzte Dachflächen in lebendige
              Ökosysteme und schützt gleichzeitig nachhaltig Ihre Bausubstanz – von der
              pflegeleichten Sedum-Begrünung für Garagen bis hin zum begehbaren Dachgarten.
            </p>
            <p className="mt-5 text-lg">
              <Link
                to="/dachbegruenung"
                className="font-semibold text-primary underline underline-offset-4"
              >
                Mehr zur Dachbegrünung
              </Link>
            </p>
          </div>
        </Reveal>
      </Abschnitt>

      <RecruitingBanner />
    </>
  );
}
