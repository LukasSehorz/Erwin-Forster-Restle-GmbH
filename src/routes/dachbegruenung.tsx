import { createFileRoute } from "@tanstack/react-router";
import { Bild } from "@/components/Bild";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { RecruitingBanner } from "@/components/RecruitingBanner";
import { betrieb } from "@/lib/betrieb";

export const Route = createFileRoute("/dachbegruenung")({
  head: () => ({
    meta: [
      { title: "Dachbegrünung in München – Planung und Umsetzung | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Dachbegrünung in München: Von der pflegeleichten Sedum-Begrünung für Garagen bis zum begehbaren Dachgarten – Planung und fachgerechte Umsetzung aus einer Hand.",
      },
      { property: "og:title", content: "Dachbegrünung" },
      {
        property: "og:description",
        content:
          "Ungenutzte Dachflächen werden zu lebendigen Ökosystemen – und schützen zugleich die Bausubstanz.",
      },
      { property: "og:url", content: "/dachbegruenung" },
    ],
    links: [{ rel: "canonical", href: "/dachbegruenung" }],
  }),
  component: Dachbegruenung,
});

function Dachbegruenung() {
  return (
    <>
      <SeitenKopf
        ueberschrift="Dachbegrünung"
        einleitung="Eine professionelle Dachbegrünung verwandelt ungenutzte Dachflächen in lebendige Ökosysteme und schützt gleichzeitig nachhaltig Ihre Bausubstanz."
      />

      <Abschnitt>
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
          <Reveal>
            <div className="max-w-xl space-y-5 text-lg">
              <p>
                Die natürliche Pflanzenschicht schirmt die Dachabdichtung effektiv vor UV-Strahlung
                sowie extremen Wettereinflüssen ab und verdoppelt so oft deren Lebensdauer.
              </p>
              <p>
                Zudem wirkt das Gründach wie eine natürliche Klimaanlage: Es kühlt das Gebäude im
                Sommer, isoliert im Winter und senkt spürbar Ihre Energiekosten. Gleichzeitig
                entlastet der Wasserspeicher bei Starkregen die Kanalisation und schafft wertvollen
                Lebensraum für Insekten.
              </p>
              <p>
                Von der pflegeleichten Sedum-Begrünung für Garagen bis hin zum begehbaren Dachgarten
                übernehmen wir für Sie die komplette Planung und fachgerechte Umsetzung.
              </p>
              <p>
                <a
                  href={betrieb.telefonLink}
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  Rufen Sie an: {betrieb.telefonAnzeige}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <Bild
              datei="dachbegruenung.jpg"
              alt="Begrünte Flachdachfläche mit Kiesstreifen und Dachaufbauten"
              verhaeltnis="4/3"
            />
          </Reveal>
        </div>
      </Abschnitt>

      <RecruitingBanner />
    </>
  );
}
