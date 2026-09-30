import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { RecruitingBanner } from "@/components/RecruitingBanner";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Unser Team – Meisterhandwerk, das zusammenschweißt | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Meister, Gesellen und Auszubildende der Erwin Restle GmbH aus München: eine feste Mannschaft für Spengler- und Dachdeckerarbeiten aus Meisterhand.",
      },
      { property: "og:title", content: "Meisterhandwerk, das zusammenschweißt" },
      {
        property: "og:description",
        content:
          "Qualifizierte Fachkräfte, familiärer Zusammenhalt und regelmäßige Weiterbildung – das Team der Erwin Restle GmbH.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamSeite,
});

function TeamSeite() {
  return (
    <>
      <SeitenKopf
        kicker="Unsere Mannschaft"
        ueberschrift="Meisterhandwerk, das zusammenschweißt"
        einleitung="Eine feste Mannschaft, die sich kennt und aufeinander eingespielt ist – deshalb steht bei Ihnen nicht jede Woche jemand anderes auf dem Dach."
      />

      <Abschnitt>
        <Reveal>
          <div className="max-w-3xl space-y-5 text-lg">
            <p>
              Hinter unserem Familienunternehmen steht ein starkes Team aus qualifizierten
              Fachkräften, die ihr Handwerk von der Pike auf gelernt haben. Bei uns arbeiten
              erfahrene Meister, Gesellen und motivierte Mitarbeiter Hand in Hand, um Ihre Wünsche
              mit höchster Präzision auf das Dach zu bringen.
            </p>
            <p>
              Was uns auszeichnet, ist der familiäre Zusammenhalt und die gemeinsame Leidenschaft
              für das Spengler- und Dachdeckerhandwerk. Durch regelmäßige Weiterbildungen halten wir
              unser traditionelles Wissen stets auf dem neuesten Stand der Technik. So garantieren
              wir Ihnen bei jedem Projekt – ob groß oder klein – eine saubere, zuverlässige und
              fachgerechte Ausführung.
            </p>
            <p>Wir sind erst zufrieden, wenn die Arbeit perfekt ist und Sie es auch sind.</p>
            <p className="text-muted-foreground">
              Ausgebildet wird im eigenen Betrieb: Wer bei uns anfängt, lernt das Handwerk auf der
              Baustelle und bleibt oft über die Ausbildung hinaus. Die Fotos werden gerade gemacht
              und danach hier eingesetzt.
            </p>
            <p>
              <Link
                to="/ueber-uns"
                className="font-semibold text-primary underline underline-offset-4"
              >
                Mehr über den Betrieb
              </Link>
            </p>
          </div>
        </Reveal>
      </Abschnitt>

      <RecruitingBanner />
    </>
  );
}
