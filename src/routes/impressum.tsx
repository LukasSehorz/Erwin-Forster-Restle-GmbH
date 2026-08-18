import { createFileRoute } from "@tanstack/react-router";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { betrieb } from "@/lib/betrieb";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Erwin Restle GmbH München" },
      {
        name: "description",
        content: "Impressum der Erwin Restle GmbH, Drieschstraße 8, 80999 München.",
      },
      { property: "og:title", content: "Impressum – Erwin Restle GmbH" },
      { property: "og:description", content: "Angaben gemäß § 5 TMG." },
      { property: "og:url", content: "/impressum" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <>
      <SeitenKopf ueberschrift="Impressum" einleitung="Angaben gemäß § 5 TMG." />

      <Abschnitt>
        <div className="max-w-2xl space-y-8 text-lg">
          <section>
            <h2 className="text-2xl">Anbieter</h2>
            <address className="mt-3 not-italic">
              {betrieb.name}
              <br />
              {betrieb.zusatz}
              <br />
              {betrieb.strasse}
              <br />
              {betrieb.plz} {betrieb.ort}
            </address>
          </section>

          <section>
            <h2 className="text-2xl">Kontakt</h2>
            <p className="mt-3">
              Telefon: {betrieb.telefonAnzeige}
              <br />
              Telefax: {betrieb.faxAnzeige}
              <br />
              E-Mail: {betrieb.email}
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Vertretungsberechtigt</h2>
            <p className="mt-3">Geschäftsführer: {betrieb.geschaeftsfuehrer}</p>
          </section>

          <section>
            <h2 className="text-2xl">Registereintrag</h2>
            <p className="mt-3">{betrieb.handelsregister}</p>
          </section>

          <Platzhalter titel="Umsatzsteuer-Identifikationsnummer" />
          <Platzhalter titel="Zuständige Aufsichts- bzw. Handwerkskammer" />
          <Platzhalter titel="Berufsbezeichnung und berufsrechtliche Regelungen" />
          <Platzhalter titel="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV" />
          <Platzhalter titel="Hinweis zur Streitbeilegung" />
          <Platzhalter titel="Haftung für Inhalte und Links, Urheberrecht" />
        </div>
      </Abschnitt>
    </>
  );
}

function Platzhalter({ titel }: { titel: string }) {
  return (
    <section className="border-l-2 border-primary pl-6">
      <h2 className="text-2xl">{titel}</h2>
      <p className="mt-3 text-muted-foreground">
        Dieser Text wird vom Betrieb geliefert und hier eingesetzt.
      </p>
    </section>
  );
}
