import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { RecruitingBanner } from "@/components/RecruitingBanner";
import { betrieb } from "@/lib/betrieb";

export const Route = createFileRoute("/reparatur-dachwartung")({
  head: () => ({
    meta: [
      { title: "Dachreparatur und Dachwartung in München | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Reparaturarbeiten und Dachwartung in München: Sturmschäden, undichte Stellen, Rinnen und Fallrohre reinigen, regelmäßige Dachkontrolle. Telefon 089 8202 0441.",
      },
      { property: "og:title", content: "Reparatur und Dachwartung" },
      {
        property: "og:description",
        content:
          "Sturmschäden, Undichtigkeiten und die regelmäßige Kontrolle Ihres Dachs – schnell und aus einer Hand.",
      },
      { property: "og:url", content: "/reparatur-dachwartung" },
    ],
    links: [{ rel: "canonical", href: "/reparatur-dachwartung" }],
  }),
  component: ReparaturDachwartung,
});

const arbeiten = [
  {
    titel: "Sturm- und Unwetterschäden",
    text: "Nach einem Sturm zählt jeder Tag: Wir schauen uns den Schaden an, sichern die offene Stelle provisorisch ab und setzen sie anschließend dauerhaft instand. Auf Wunsch dokumentieren wir den Schaden für Ihre Versicherung.",
  },
  {
    titel: "Undichte Stellen finden und beheben",
    text: "Wo Wasser durchkommt, ist der Fleck an der Decke selten die Ursache. Wir suchen die Stelle am Dach, prüfen Anschlüsse, Kehlen und Durchdringungen und reparieren gezielt statt großflächig.",
  },
  {
    titel: "Dachdurchsicht",
    text: "Bei der Durchsicht kontrollieren wir Eindeckung, Anschlüsse, Abdichtung und Entwässerung, tauschen einzelne beschädigte Ziegel aus und ziehen lose Bauteile nach. Kleine Mängel bleiben so klein.",
  },
  {
    titel: "Rinnen und Fallrohre reinigen",
    text: "Laub und Moos setzen die Entwässerung zu, das Wasser steht und läuft über. Wir reinigen Rinnen, Einläufe und Fallrohre und prüfen dabei gleich Halter und Anschlüsse.",
  },
  {
    titel: "Dachkontrolle nach Termin",
    text: "Vor dem Hauskauf, nach dem Winter oder einfach zur Sicherheit: Wir begehen das Dach, halten den Zustand fest und sagen Ihnen offen, was jetzt ansteht und was noch Zeit hat.",
  },
];

function ReparaturDachwartung() {
  return (
    <>
      <SeitenKopf
        kicker="Schnelle Hilfe am Dach"
        ueberschrift="Reparaturarbeiten und Dachwartung"
        einleitung="Vom Sturmschaden über die undichte Stelle bis zur regelmäßigen Kontrolle – wir halten Ihr Dach in Ordnung, bevor daraus eine Sanierung wird."
      />

      <Abschnitt>
        <div>
          <div className="space-y-10">
            <Reveal>
              <div className="max-w-xl space-y-5 text-lg">
                <p>
                  Ein Dach altert unauffällig: eine verrutschte Ziegelreihe, ein aufgegangener
                  Anschluss, eine volle Rinne. Bemerkt wird das oft erst, wenn Wasser im Haus steht.
                  Deshalb lohnt sich die regelmäßige Kontrolle – und im Ernstfall die schnelle
                  Reparatur.
                </p>
                <p className="text-muted-foreground">
                  Wir arbeiten mit einer festen Mannschaft im Raum München und Umgebung. Melden Sie
                  sich telefonisch, dann sagen wir Ihnen, wann wir vorbeikommen können.
                </p>
              </div>
            </Reveal>

            {arbeiten.map((arbeit, index) => (
              <Reveal key={arbeit.titel} delay={index < 3 ? ((index % 3) as 0 | 1 | 2) : 0}>
                <div className="border-l-2 border-primary pl-6">
                  <h2 className="text-2xl">{arbeit.titel}</h2>
                  <p className="mt-3 max-w-xl text-lg text-muted-foreground">{arbeit.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Abschnitt>

      <Abschnitt grau>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl">Dachwartung nur mit Verkehrssicherheit</h2>
            <div className="mt-5 space-y-5 text-lg">
              <p>
                Wir bieten Wartungsverträge konsequent nur in Verbindung mit der gesetzlichen
                Dachverkehrssicherheit an. Nach den Unfallverhütungsvorschriften der
                Berufsgenossenschaft (BG BAU) dürfen Dachflächen nur mit ordnungsgemäßen
                Absturzsicherungen betreten werden. Sollten diese Vorrichtungen an Ihrem Gebäude
                fehlen, rüsten wir sie fachgerecht für Sie nach.
              </p>
              <p>
                So sichern Sie den Werterhalt Ihrer Immobilie und erfüllen lückenlos alle
                rechtlichen Auflagen gegenüber Handwerkern und Passanten.
              </p>
              <p className="font-semibold">
                Sichern Sie Ihr Dach jetzt rechtlich und fachlich ab – kontaktieren Sie uns für Ihr
                individuelles Angebot!
              </p>
              <p>
                <Link
                  to="/sekuranten"
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  Mehr zur Absturzsicherung
                </Link>
              </p>
            </div>
          </div>
        </Reveal>
      </Abschnitt>

      <Abschnitt>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl">Wasser im Haus? Rufen Sie an.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Bei akuten Schäden ist der schnellste Weg das Telefon. Das Büro erreichen Sie{" "}
              {betrieb.oeffnungszeiten}. {betrieb.emailHinweis}:{" "}
              <a
                href={`mailto:${betrieb.email}`}
                className="text-primary underline underline-offset-4"
              >
                {betrieb.email}
              </a>
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
