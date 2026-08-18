import { createFileRoute } from "@tanstack/react-router";
import { Bild } from "@/components/Bild";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { RecruitingBanner } from "@/components/RecruitingBanner";

export const Route = createFileRoute("/spenglerei")({
  head: () => ({
    meta: [
      { title: "Spenglerei München – Kupfer, Alu und Blech | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Spenglerarbeiten in München: Dächer und Bauteile aus Kupfer, Aluminium und Blech, Rinnen und Fallrohre inklusive Reinigung, Kamineinfassungen, Gauben und Sonderanfertigungen.",
      },
      { property: "og:title", content: "Spenglerei in München – Kupfer, Aluminium, Blech" },
      {
        property: "og:description",
        content:
          "Metallarbeiten am Dach aus Allach-Untermenzing: Rinnen, Fallrohre, Kamineinfassungen, Gauben und Sonderanfertigungen.",
      },
      { property: "og:url", content: "/spenglerei" },
    ],
    links: [{ rel: "canonical", href: "/spenglerei" }],
  }),
  component: Spenglerei,
});

function Spenglerei() {
  return (
    <>
      <SeitenKopf
        kicker="Unsere Spezialität"
        ueberschrift="Spenglerei"
        einleitung="Alles, was am Dach aus Metall ist, machen wir selbst – von der Rinne bis zur kompletten Kupferdeckung."
      />

      <Abschnitt>
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start">
          <Reveal>
            <div className="space-y-6 text-lg">
              <div>
                <h2 className="text-2xl">Dächer und Bauteile aus Metall</h2>
                <p className="mt-3 text-muted-foreground">
                  Wir decken Dächer und Dachteile mit Kupfer, Aluminium und Blech ein. Das hält
                  lange, ist wartungsarm und lässt sich auch an schwierigen Anschlüssen sauber
                  ausführen.
                </p>
              </div>
              <div>
                <h2 className="text-2xl">Rinnen und Fallrohre</h2>
                <p className="mt-3 text-muted-foreground">
                  Dachrinnen und Fallrohre fertigen und montieren wir passend zum Haus, auf
                  Wunsch aus Kupfer. Dazu gehört auch die Reinigung: Wir räumen Rinnen und
                  Fallrohre frei, spülen sie durch und prüfen dabei gleich Halter, Nähte und
                  Abläufe. Eine verstopfte Rinne ist die häufigste Ursache für Wasser an Fassade
                  und Dachrand.
                </p>
              </div>
              <div>
                <h2 className="text-2xl">Kamineinfassungen</h2>
                <p className="mt-3 text-muted-foreground">
                  Kamine, Wandanschlüsse und Durchdringungen fassen wir dicht ein – sauber
                  angearbeitet an die Dachfläche und dauerhaft wetterfest. Bestehende Einfassungen
                  reinigen und warten wir, wenn wir ohnehin am Dach sind.
                </p>
              </div>
              <div>
                <h2 className="text-2xl">Gauben</h2>
                <p className="mt-3 text-muted-foreground">
                  Neue Gauben oder Verkleidung bestehender Gauben in Metall – vom Aufmaß bis zur
                  fertigen Ausführung.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="grid grid-cols-2 gap-4">
              <Bild
                datei="Dach_kupfer.jpg"
                alt="Dachfläche aus Kupfer nach der Fertigstellung"
                verhaeltnis="4/3"
              />
              <Bild
                datei="Dach-Alu.jpg"
                alt="Dacheindeckung aus Aluminium an einem Wohnhaus"
                verhaeltnis="4/3"
              />
              <Bild datei="Dach_Gaube1.jpg" alt="Mit Metall verkleidete Gaube" verhaeltnis="4/3" />
              <Bild
                datei="Dach_Gaube2.jpg"
                alt="Zweite Ansicht einer fertig ausgeführten Gaube"
                verhaeltnis="4/3"
              />
              <Bild
                datei="kamin01.jpg"
                alt="Kamineinfassung aus Kupfer auf einem Ziegeldach"
                verhaeltnis="4/3"
                className="col-span-2 md:max-w-md"
              />
            </div>
          </Reveal>
        </div>
      </Abschnitt>

      <Abschnitt grau>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl">Auch außergewöhnliche Aufgaben</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Nicht jedes Bauteil kommt aus dem Katalog. Runde Fenstereinfassungen, Erker,
              geschwungene Anschlüsse, Türme und historische Bauteile: Individuelle
              Spenglerarbeiten und Spezialprojekte gehören bei uns zum Alltag. Wir messen auf,
              fertigen die Sonderteile in der eigenen Werkstatt und passen sie auf der Baustelle
              ein – auch dort, wo es kein Standardmaß gibt.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          <Reveal>
            <Bild
              datei="zwiebelturm01.jpg"
              alt="Mit Metall eingedeckter Zwiebelturm"
              verhaeltnis="4/5"
            />
          </Reveal>
          <Reveal delay={1}>
            <Bild
              datei="Fenster_Rund2.jpg"
              alt="Rundes Dachfenster mit handgefertigter Metalleinfassung"
              verhaeltnis="4/5"
            />
          </Reveal>
          <Reveal delay={2}>
            <Bild
              datei="Fenster_Rund3.jpg"
              alt="Detail einer runden Fenstereinfassung aus Blech"
              verhaeltnis="4/5"
            />
          </Reveal>
          <Reveal delay={2}>
            <Bild
              datei="Fenster_Rund4.jpg"
              alt="Fertig eingebautes Rundfenster im Dach"
              verhaeltnis="4/5"
            />
          </Reveal>
        </div>
      </Abschnitt>

      <RecruitingBanner />
    </>
  );
}
