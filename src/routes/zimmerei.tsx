import { createFileRoute } from "@tanstack/react-router";
import { Bild } from "@/components/Bild";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { RecruitingBanner } from "@/components/RecruitingBanner";

export const Route = createFileRoute("/zimmerei")({
  head: () => ({
    meta: [
      { title: "Zimmerei und Holzbau München | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Zimmerei und Holzbau in München: Dachkonstruktionen, Fachwerk, Balkone, Verschalungen im Betonbau, Holzschutz, Innenausbau sowie Carports und Vordächer.",
      },
      { property: "og:title", content: "Zimmerei und Holzbau in München" },
      {
        property: "og:description",
        content:
          "Dachstühle, Fachwerk, Balkone, Innenausbau und Bauwerke aus Holz – vom Betrieb in Allach-Untermenzing.",
      },
      { property: "og:url", content: "/zimmerei" },
    ],
    links: [{ rel: "canonical", href: "/zimmerei" }],
  }),
  component: Zimmerei,
});

const bereiche = [
  {
    titel: "Konstruktion",
    punkte: [
      "Dachkonstruktionen, Fachwerk, Balkone und Veranden",
      "Bauwerksteile fertigen, errichten und reparieren",
      "Verschalungen im Betonbau",
    ],
  },
  {
    titel: "Schutz und Dämmung",
    punkte: [
      "Wärme- und Schalldämmung",
      "Feuchtigkeitsschutz an Holzbauteilen",
      "Holzschutz an Dachstuhl und Fassade",
    ],
  },
  {
    titel: "Innenausbau",
    punkte: ["Wandverkleidungen und Holzdecken", "Fußböden", "Treppen"],
  },
  {
    titel: "Bauwerke aus Holz",
    punkte: ["Carports und Vordächer", "Nebengebäude", "Lagerhallen"],
  },
];

function Zimmerei() {
  return (
    <>
      <SeitenKopf
        kicker="Holz"
        ueberschrift="Zimmerei & Holzbau"
        einleitung="Vom Dachstuhl bis zur Holztreppe. Wir fertigen in der Werkstatt und bauen auf der Baustelle ein."
      />

      <Abschnitt>
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
          <Reveal>
            <Bild
              datei="zimmerer.jpg"
              alt="Zimmerer beim Aufrichten einer Holzkonstruktion"
              verhaeltnis="4/5"
              className="md:max-w-sm"
            />
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2">
            {bereiche.map((bereich, index) => (
              <Reveal key={bereich.titel} delay={index < 3 ? ((index % 3) as 0 | 1 | 2) : 0}>
                <div className="border-t-2 border-primary pt-4">
                  <h2 className="text-2xl">{bereich.titel}</h2>
                  <ul className="mt-3 space-y-2 text-lg text-muted-foreground">
                    {bereich.punkte.map((punkt) => (
                      <li key={punkt}>{punkt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Abschnitt>

      <RecruitingBanner />
    </>
  );
}
