import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { RecruitingBanner } from "@/components/RecruitingBanner";
import { betrieb } from "@/lib/betrieb";
import { bilder, heroUrl } from "@/lib/bilder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dachdeckerei und Spenglerei in München | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Erwin Restle GmbH in München Allach-Untermenzing: Spenglerei, Dachdeckerei, Zimmerei, Reparatur und Dachwartung, Absturzsicherung und Taubenabwehr. Seit 1985 in München und Umgebung. Telefon 089 8202 0441.",
      },
      { property: "og:title", content: "Ihr Dach in besten Händen – seit 1985" },
      {
        property: "og:description",
        content:
          "Spenglerei, Dachdeckerei, Zimmerei, Reparatur und Dachwartung, Absturzsicherung und Taubenabwehr aus Allach-Untermenzing – seit 1985.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Startseite,
});

/** Die sechs Leistungskacheln der Startseite, Reihenfolge wie im Raster. */
const kacheln = [
  {
    titel: "Spenglerei",
    to: "/spenglerei" as const,
    datei: "Dach_kupfer.jpg",
    alt: "Dachfläche aus Kupfer mit angearbeiteter Rinne",
    text: "Dächer und Bauteile aus Kupfer, Aluminium und Blech, dazu Rinnen, Fallrohre und Kamineinfassungen.",
  },
  {
    titel: "Dachdeckerei",
    to: "/dachdeckerei" as const,
    datei: "Dach01.jpg",
    alt: "Neu eingedecktes Ziegeldach eines Wohnhauses in München",
    text: "Dächer neu decken und reparieren, abdichten, Brandschutzwände, energetische Dachsanierung und Dachflächenfenster.",
  },
  {
    titel: "Zimmerei & Holzbau",
    to: "/zimmerei" as const,
    datei: "zimmerer.jpg",
    alt: "Zimmerer bei der Arbeit an einer Dachkonstruktion aus Holz",
    text: "Dachstühle, Fachwerk, Balkone und Carports – gefertigt, errichtet und instand gesetzt.",
  },
  {
    titel: "Reparatur & Dachwartung",
    to: "/reparatur-dachwartung" as const,
    datei: "Dach_Gaube2.jpg",
    alt: "Gaube mit sauberem Anschluss an die Dachfläche",
    text: "Sturmschäden, undichte Stellen, Rinnenreinigung und die regelmäßige Kontrolle Ihres Dachs.",
  },
  {
    titel: "Absturzsicherung",
    to: "/sekuranten" as const,
    datei: "Dach-Alu.jpg",
    alt: "Dachfläche, die für Wartung und Kontrolle sicher begehbar sein muss",
    text: "Sekuranten, Seil- und Schienensysteme sowie sichere Zugänge und Laufwege – inklusive Prüfung.",
  },
  {
    titel: "Taubenabwehr",
    to: "/taubenabwehr" as const,
    datei: "Taubenabwehr.jpg",
    alt: "Taubenabwehr mit Spikes auf einem Dachsims",
    text: "Spikes und Netze, fachgerecht montiert – auch an schwer zugänglichen Stellen.",
  },
];

function Startseite() {
  return (
    <>
      <Hero />

      {/* Begrüßung und Einstieg */}
      <section>
        <div className="mx-auto max-w-3xl px-5 py-14 text-center md:py-20">
          <Reveal>
            <p className="text-xl font-bold md:text-2xl">
              Die Erwin Restle GmbH heißt Sie herzlich willkommen. Ihre familiengeführte Spenglerei
              und Dachdeckerei aus München {betrieb.stadtteil} – seit {betrieb.gegruendet} für
              fachgerechte Arbeiten aus Meisterhand.
            </p>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                Vom robusten Steildach über moderne Flachdachabdichtungen bis hin zu
                maßgeschneiderten Spenglerarbeiten: Als erfahrener Meisterbetrieb kümmern wir uns um
                die Langlebigkeit und Sicherheit Ihres Hauses. Auch bei schnellen Reparaturen oder
                Sturmschäden stehen wir Ihnen sofort zur Seite.
              </p>
              <p>
                Lassen Sie uns gemeinsam über Ihr Vorhaben sprechen – wir planen Hand in Hand mit
                Ihnen und erstellen ein transparentes, maßgeschneidertes Angebot.
              </p>
              <p>Nehmen Sie einfach Kontakt auf, wir freuen uns auf Ihr Projekt!</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sechs Kacheln – klappen beim Hereinscrollen auf wie in der Vorlage */}
      <Reveal as="section" stil="falten" className="scroll-mt-24">
        <div id="leistungen" className="mx-auto max-w-6xl px-5 pb-14 md:pb-20">
          <h2 className="text-center text-2xl md:text-4xl">
            Wir sind Ihr kompetenter Partner für Dach, Metall und Holz
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {kacheln.map((kachel) => (
              <li key={kachel.to}>
                <Link to={kachel.to} className="block">
                  <figure className="kachel-figur aspect-square">
                    <img
                      src={bilder[kachel.datei]}
                      alt={kachel.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <figcaption>
                      <h3 className="kachel-titel text-xl md:text-2xl">{kachel.titel}</h3>
                      <p className="kachel-text mt-3 text-[17px]">{kachel.text}</p>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

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
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-lg font-semibold">
                <Link
                  to="/ueber-uns"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Über uns
                </Link>
                <Link
                  to="/team"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Unser Team
                </Link>
              </div>
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

/** Vollflächiges Hero-Bild mit dunklem Overlay, Überschrift und Umriss-Button. */
/**
 * Hoehe und Einblendung wie bei der Vorlage gemessen: 50vh hoch, beim Laden
 * waechst der ganze Block von halber Groesse auf volle.
 */
function Hero() {
  return (
    <section className="hero-einblenden relative h-[50vh] max-h-[560px] min-h-[320px]">
      <img
        src={heroUrl}
        alt="Blick über die Münchner Dächer bei Sonnenuntergang"
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 px-5 text-center">
        <h1 className="max-w-4xl text-3xl text-white drop-shadow-md sm:text-4xl md:text-6xl">
          Ihr Dach in besten Händen – seit {betrieb.gegruendet}
        </h1>
        <a
          href="#leistungen"
          className="border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-foreground"
        >
          Mehr erfahren
        </a>
      </div>
    </section>
  );
}
