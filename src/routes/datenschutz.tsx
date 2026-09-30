import { createFileRoute } from "@tanstack/react-router";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { betrieb } from "@/lib/betrieb";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | Erwin Restle GmbH München" },
      {
        name: "description",
        content: "Informationen zum Umgang mit personenbezogenen Daten auf dieser Website.",
      },
      { property: "og:title", content: "Datenschutz – Erwin Restle GmbH" },
      { property: "og:description", content: "Umgang mit personenbezogenen Daten." },
      { property: "og:url", content: "/datenschutz" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <>
      <SeitenKopf ueberschrift="Datenschutz" einleitung="Informationen nach Art. 13 DSGVO." />

      <Abschnitt>
        <div className="max-w-2xl space-y-8 text-lg">
          <Teil titel="Verantwortlicher">
            <address className="not-italic">
              {betrieb.name}, {betrieb.strasse}, {betrieb.plz} {betrieb.ort}
              <br />
              Telefon: {betrieb.telefonAnzeige} · E-Mail: {betrieb.email}
            </address>
          </Teil>

          <Teil titel="Aufruf der Website">
            <p>
              Beim Aufruf der Seite werden technisch notwendige Daten verarbeitet (IP-Adresse,
              Zeitpunkt, aufgerufene Seite, Browser). Sie dienen nur der sicheren Auslieferung der
              Website (Art. 6 Abs. 1 lit. f DSGVO). Gehostet wird die Seite bei Netlify, Inc., 101
              2nd Street, San Francisco, CA 94105, USA. Netlify ist nach dem EU-US Data Privacy
              Framework zertifiziert. Wir setzen keine Cookies und keine Analyse- oder
              Tracking-Dienste ein. Schriften werden von unserem eigenen Server geladen.
            </p>
          </Teil>

          <Teil titel="Karte">
            <p>
              Auf der Kontaktseite ist eine Karte von OpenStreetMap eingebunden (OpenStreetMap
              Foundation, Cambridge, Vereinigtes Königreich). Dabei wird Ihre IP-Adresse an
              OpenStreetMap übertragen (Art. 6 Abs. 1 lit. f DSGVO). Für das Vereinigte Königreich
              besteht ein Angemessenheitsbeschluss der EU-Kommission.
            </p>
          </Teil>

          <Teil titel="Kontakt und Bewerbung">
            <p>
              Wenn Sie uns anrufen oder schreiben, verarbeiten wir Ihre Angaben, um Ihre Anfrage
              oder Bewerbung zu bearbeiten (Art. 6 Abs. 1 lit. b DSGVO). Die Formulare auf dieser
              Seite speichern nichts, sie öffnen nur eine vorbereitete E-Mail in Ihrem
              E-Mail-Programm. Anfragen löschen wir, wenn sie erledigt sind und keine gesetzlichen
              Aufbewahrungspflichten bestehen. Bewerbungen löschen wir spätestens sechs Monate
              nach Abschluss des Verfahrens.
            </p>
          </Teil>

          <Teil titel="Ihre Rechte">
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15 bis 21 DSGVO). Sie können
              sich außerdem beim Bayerischen Landesamt für Datenschutzaufsicht, Promenade 18, 91522
              Ansbach, beschweren.
            </p>
          </Teil>
        </div>
      </Abschnitt>
    </>
  );
}

function Teil({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl">{titel}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
