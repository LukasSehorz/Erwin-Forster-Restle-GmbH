import { createFileRoute, Link } from "@tanstack/react-router";
import { Bild } from "@/components/Bild";
import { Reveal } from "@/components/Reveal";
import { RecruitingBanner } from "@/components/RecruitingBanner";
import { betrieb } from "@/lib/betrieb";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dachdeckerei und Spenglerei in München | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Erwin Restle GmbH in München Allach-Untermenzing: Spenglerei, Dachdeckerei, Zimmerei, Sekuranten und Taubenabwehr. Seit 1985 in München und Umgebung. Telefon 089 8202 0441.",
      },
      { property: "og:title", content: "Dachdeckerei und Spenglerei in München" },
      {
        property: "og:description",
        content:
          "Spenglerei, Dachdeckerei, Zimmerei, Sekuranten und Taubenabwehr aus Allach-Untermenzing – seit 1985. Wir suchen Verstärkung.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Startseite,
});

const leistungen = [
  {
    titel: "Spenglerei",
    to: "/spenglerei" as const,
    datei: "Dach_kupfer.jpg",
    alt: "Dachfläche aus Kupfer mit angearbeiteter Rinne",
    text: "Metallarbeiten am Dach sind unsere Spezialität. Wir fertigen Dächer und Bauteile aus Kupfer, Aluminium und Blech, dazu Rinnen, Fallrohre und Kamineinfassungen.",
  },
  {
    titel: "Dachdeckerei",
    to: "/dachdeckerei" as const,
    datei: "Dach01.jpg",
    alt: "Neu eingedecktes Ziegeldach eines Wohnhauses in München",
    text: "Wir decken Dächer neu und reparieren sie. Dazu Abdichtungen, Brandschutzwände, energetische Dachsanierung, Dachflächenfenster und Dachbegrünung.",
  },
  {
    titel: "Zimmerei & Holzbau",
    to: "/zimmerei" as const,
    datei: "zimmerer.jpg",
    alt: "Zimmerer bei der Arbeit an einer Dachkonstruktion aus Holz",
    text: "Dachstühle, Fachwerk, Balkone und Carports. Wir fertigen Bauteile aus Holz, errichten sie und setzen sie instand – bis hin zum Innenausbau.",
  },
  {
    titel: "Sekuranten",
    to: "/sekuranten" as const,
    datei: "Dach-Alu.jpg",
    alt: "Dachfläche, die für Wartung und Kontrolle sicher begehbar sein muss",
    text: "Absturzsicherung und Dachverkehrssicherheit: Einzelanschlagpunkte, Seil- und Schienensysteme sowie sichere Zugänge und Laufwege – inklusive Prüfung und Wartung.",
  },
  {
    titel: "Taubenabwehr",
    to: "/taubenabwehr" as const,
    datei: "Taubenabwehr.jpg",
    alt: "Taubenabwehr mit Spikes auf einem Dachsims",
    text: "Taubenkot greift Bausubstanz an und ist ein Hygieneproblem. Wir montieren Spikes und Netze fachgerecht – auch an schwer zugänglichen Stellen.",
  },
];

function Startseite() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-[1.05fr_1fr] md:py-16">
          <Reveal>
            <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
              {betrieb.stadtteil} · München und Umgebung
            </p>
            <h1 className="text-4xl md:text-6xl">Dachdeckerei und Spenglerei in München</h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
              Familienbetrieb für Dach, Metall und Holz – seit {betrieb.gegruendet} vom Ziegel
              bis zur Kupferrinne.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={betrieb.telefonLink}
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Jetzt anrufen: {betrieb.telefonAnzeige}
              </a>
              <Link
                to="/karriere"
                className="inline-flex items-center justify-center border border-foreground px-6 py-4 text-lg font-semibold transition-colors hover:bg-foreground hover:text-background"
              >
                Offene Stellen
              </Link>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <Bild
              datei="Arbeit_Spengler.jpg"
              alt="Gelbes Münchner Wohnhaus mit neu gedecktem Ziegeldach und Kupferrinne"
              verhaeltnis="4/3"
              prioritaet
            />
          </Reveal>
        </div>
      </section>

      {/* Leistungen */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">Was wir machen</h2>
          </Reveal>
          <div className="mt-10 space-y-14 md:space-y-20">
            {leistungen.map((leistung, index) => (
              <Reveal key={leistung.titel} as="article">
                <div
                  className={`grid items-center gap-8 md:grid-cols-2 ${
                    index % 2 === 1 ? "md:[&>figure]:order-2" : ""
                  }`}
                >
                  <Bild
                    datei={leistung.datei}
                    alt={leistung.alt}
                    verhaeltnis="3/2"
                    className={index % 2 === 1 ? "md:ml-auto md:max-w-[26rem]" : "md:max-w-[26rem]"}
                  />
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <h3 className="text-2xl md:text-3xl">{leistung.titel}</h3>
                    <p className="mt-4 max-w-xl text-lg text-muted-foreground">{leistung.text}</p>
                    <Link
                      to={leistung.to}
                      className="mt-5 inline-block text-lg font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                    >
                      Mehr zu {leistung.titel}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Betrieb */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl">Seit {betrieb.gegruendet} am Dach</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Unser Unternehmen, die Dachdeckerei Spenglerei Erwin Restle, existiert seit{" "}
                {betrieb.gegruendet} und ist seit dieser Zeit ein Begriff für zuverlässig
                ausgeführte Dachdecker- und Spenglerarbeiten in München und Umgebung. Dach, Metall
                und Holz kommen bei uns aus einer Hand – das spart Absprachen und Wartezeit.
                Gearbeitet wird mit einer festen Mannschaft.
              </p>
              <Link
                to="/betrieb"
                className="mt-5 inline-block text-lg font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Betrieb & Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <RecruitingBanner />

      {/* Kontaktzeile */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-bold tracking-wide uppercase">Adresse</h2>
            <p className="mt-2 text-lg">
              {betrieb.strasse}
              <br />
              {betrieb.plz} {betrieb.ort}
            </p>
          </div>
          <div>
            <h2 className="text-base font-bold tracking-wide uppercase">Telefon</h2>
            <p className="mt-2 text-lg">
              <a href={betrieb.telefonLink} className="text-primary underline underline-offset-4">
                {betrieb.telefonAnzeige}
              </a>
            </p>
            <p className="text-lg">
              <a
                href={`mailto:${betrieb.email}`}
                className="text-primary underline underline-offset-4"
              >
                {betrieb.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-base font-bold tracking-wide uppercase">Bürozeiten</h2>
            <p className="mt-2 text-lg">{betrieb.oeffnungszeiten}</p>
            <p className="text-lg text-muted-foreground">{betrieb.emailHinweis}</p>
            <Link
              to="/kontakt"
              className="mt-2 inline-block text-lg font-semibold text-primary underline underline-offset-4"
            >
              Anfahrt und Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
