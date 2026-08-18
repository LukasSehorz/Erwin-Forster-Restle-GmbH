import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bild } from "@/components/Bild";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { Feld } from "@/components/Feld";
import { betrieb } from "@/lib/betrieb";
import { bewerbungSchema, oeffneMailEntwurf } from "@/lib/formular";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/karriere")({
  head: () => ({
    meta: [
      { title: "Jobs für Spengler und Monteure in München | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Offene Stellen in München: Spengler, Monteure und Auszubildende (m/w/d). Feste Mannschaft, Baustellen im Raum München und Umgebung, abends daheim.",
      },
      { property: "og:title", content: "Wir suchen Verstärkung – Jobs in München" },
      {
        property: "og:description",
        content:
          "Spengler, Monteure und Azubis (m/w/d) für einen inhabergeführten Betrieb in Allach-Untermenzing.",
      },
      { property: "og:url", content: "/karriere" },
    ],
    links: [{ rel: "canonical", href: "/karriere" }],
  }),
  component: Karriere,
});

const stellen = [
  {
    titel: "Spengler/in (m/w/d)",
    aufgaben: [
      "Rinnen, Fallrohre und Kamineinfassungen fertigen und montieren",
      "Dachflächen und Bauteile aus Kupfer, Aluminium und Blech",
      "Sonderteile in der Werkstatt anfertigen",
      "Allgemeine Reinigungsarbeiten rund um das Dach",
    ],
    erwartung: [
      "Ausbildung als Spengler oder Klempner, gern auch Berufserfahrung im Metallbau am Dach",
      "Sauberes Arbeiten und Freude an kniffligen Anschlüssen",
      "Schwindelfreiheit",
    ],
    bieten: [
      "Abwechslung: von der Standardrinne bis zur Sonderanfertigung",
      "Fortbildungen und Weiterbildungen",
      "Pünktliche Bezahlung",
    ],
  },
  {
    titel: "Monteur/in (m/w/d)",
    aufgaben: [
      "Montage von Spenglerarbeiten und Bauteilen am Dach",
      "Material vorbereiten, einbauen und Anschlüsse herstellen",
      "Allgemeine Reinigungsarbeiten rund um das Dach",
      "Baustelle sichern und sauber übergeben",
    ],
    erwartung: [
      "Handwerkliche Erfahrung, gern aus dem Metall- oder Baubereich",
      "Zuverlässigkeit und körperliche Belastbarkeit",
      "Schwindelfreiheit, Führerschein Klasse B von Vorteil",
    ],
    bieten: [
      "Einarbeitung durch erfahrene Kollegen",
      "Baustellen im Raum München und Umgebung, abends daheim",
      "Pünktliche Bezahlung",
    ],
  },
  {
    titel: "Auszubildende/r Spengler (m/w/d)",
    aufgaben: [
      "Von Anfang an auf der Baustelle mitarbeiten",
      "Handwerk Schritt für Schritt lernen – Blecharbeiten, Dach und Holz",
      "Allgemeine Reinigungsarbeiten rund um das Dach",
      "Berufsschule und Betrieb im Wechsel",
    ],
    erwartung: [
      "Schulabschluss, Pünktlichkeit und Lust auf Arbeit im Freien",
      "Kein Problem mit Höhe",
      "Deutschkenntnisse für Baustelle und Berufsschule",
    ],
    bieten: [
      "Ausbildung im kleinen Betrieb mit festen Ansprechpartnern",
      "Überbetriebliche Weiterbildungen sowie schulische und interne Fort- und Weiterbildungen",
      "Übernahme bei guter Leistung",
    ],
  },
];

const bieten = [
  "Feste Mannschaft statt wechselnder Kolonnen",
  "Baustellen im Raum München und Umgebung – abends daheim",
  "Pünktliche Bezahlung",
  "Fortbildungen und Weiterbildungen",
];

function Karriere() {
  return (
    <>
      <SeitenKopf
        kicker="Offene Stellen"
        ueberschrift="Wir suchen Verstärkung"
        einleitung="Spengler, Monteure und Azubis. Meld dich einfach – ein Anruf reicht, Unterlagen können warten."
      />

      <Abschnitt>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { datei: "Dach_kupfer.jpg", alt: "Arbeit an einer Dachfläche aus Kupfer" },
            { datei: "Dach_Gaube1.jpg", alt: "Gaube während der Ausführung" },
            { datei: "zimmerer.jpg", alt: "Zimmererarbeiten auf der Baustelle" },
          ].map((bild, index) => (
            <Reveal key={bild.datei} delay={index as 0 | 1 | 2}>
              <Bild datei={bild.datei} alt={bild.alt} verhaeltnis="4/3" />
            </Reveal>
          ))}
        </div>
      </Abschnitt>

      <Abschnitt grau className="!pt-0 md:!pt-0">
        <Reveal>
          <h2 className="pt-14 text-3xl md:pt-20 md:text-4xl">Diese Stellen sind frei</h2>
        </Reveal>
        <div className="mt-10 space-y-12">
          {stellen.map((stelle) => (
            <Reveal key={stelle.titel} as="article">
              <div className="border-t-2 border-primary bg-background p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl">{stelle.titel}</h3>
                <div className="mt-6 grid gap-8 md:grid-cols-3">
                  <StellenSpalte titel="Aufgaben" punkte={stelle.aufgaben} />
                  <StellenSpalte titel="Das erwarten wir" punkte={stelle.erwartung} />
                  <StellenSpalte titel="Das bieten wir" punkte={stelle.bieten} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Abschnitt>

      <Abschnitt>
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">Was wir bieten</h2>
          </Reveal>
          <Reveal delay={1}>
            <ul className="space-y-3 text-lg">
              {bieten.map((punkt) => (
                <li key={punkt} className="border-b border-border pb-3 last:border-b-0">
                  {punkt}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Abschnitt>

      <Abschnitt grau>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">Bewerbung ist einfach</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ruf einfach an – auch ohne Unterlagen. Wir sprechen kurz, und wenn es passt, schau
              bei uns vorbei.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={betrieb.telefonLink}
                className="flex items-center gap-3 bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {betrieb.telefonAnzeige}
              </a>
              <a
                href={betrieb.whatsapp}
                className="flex items-center gap-3 border border-foreground px-6 py-4 text-lg font-semibold transition-colors hover:bg-foreground hover:text-background"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Über WhatsApp schreiben
              </a>
              <a
                href={`mailto:${betrieb.email}?subject=${encodeURIComponent("Bewerbung")}`}
                className="flex items-center gap-3 border border-foreground px-6 py-4 text-lg font-semibold transition-colors hover:bg-foreground hover:text-background"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                {betrieb.email}
              </a>
            </div>
            <p className="mt-4 text-[17px] text-muted-foreground">
              Einen Lebenslauf brauchst du für den ersten Kontakt nicht.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <BewerbungsFormular />
          </Reveal>
        </div>
      </Abschnitt>
    </>
  );
}

function StellenSpalte({ titel, punkte }: { titel: string; punkte: string[] }) {
  return (
    <div>
      <h4 className="text-base font-bold tracking-wide uppercase">{titel}</h4>
      <ul className="mt-3 space-y-2 text-[17px] text-muted-foreground">
        {punkte.map((punkt) => (
          <li key={punkt}>{punkt}</li>
        ))}
      </ul>
    </div>
  );
}

function BewerbungsFormular() {
  const [fehler, setFehler] = useState<Record<string, string>>({});

  function absenden(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const daten = Object.fromEntries(new FormData(event.currentTarget));
    const ergebnis = bewerbungSchema.safeParse(daten);

    if (!ergebnis.success) {
      const neu: Record<string, string> = {};
      for (const problem of ergebnis.error.issues) {
        neu[String(problem.path[0])] = problem.message;
      }
      setFehler(neu);
      return;
    }

    setFehler({});
    oeffneMailEntwurf(`Bewerbung: ${ergebnis.data.position}`, {
      Name: ergebnis.data.name,
      Telefon: ergebnis.data.telefon,
      Position: ergebnis.data.position,
      Nachricht: ergebnis.data.nachricht ?? "",
    });
  }

  return (
    <form onSubmit={absenden} className="border border-border bg-background p-6 md:p-8" noValidate>
      <h3 className="text-2xl">Kurz melden</h3>
      <p className="mt-2 text-[17px] text-muted-foreground">
        Vier Felder genügen. Wir rufen dich zurück.
      </p>

      <div className="mt-6 space-y-5">
        <Feld label="Name" name="name" fehler={fehler["name"]} autoComplete="name" />
        <Feld
          label="Telefon"
          name="telefon"
          type="tel"
          fehler={fehler["telefon"]}
          autoComplete="tel"
        />
        <div>
          <label htmlFor="position" className="block text-lg font-semibold">
            Position
          </label>
          <select
            id="position"
            name="position"
            defaultValue="Spengler/in (m/w/d)"
            className="mt-2 w-full border border-input bg-background px-4 py-3 text-lg"
          >
            {stellen.map((stelle) => (
              <option key={stelle.titel} value={stelle.titel}>
                {stelle.titel}
              </option>
            ))}
            <option value="Initiativbewerbung">Initiativbewerbung</option>
          </select>
        </div>
        <div>
          <label htmlFor="nachricht" className="block text-lg font-semibold">
            Nachricht <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="nachricht"
            name="nachricht"
            rows={4}
            className="mt-2 w-full border border-input bg-background px-4 py-3 text-lg"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
      >
        Bewerbung abschicken
      </button>
      <p className="mt-3 text-[17px] text-muted-foreground">
        Das Formular öffnet eine vorbereitete E-Mail an {betrieb.email}.
      </p>
    </form>
  );
}
