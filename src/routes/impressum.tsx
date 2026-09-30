import { createFileRoute } from "@tanstack/react-router";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { agentur, betrieb } from "@/lib/betrieb";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Erwin Restle GmbH München" },
      {
        name: "description",
        content: "Impressum der Erwin Restle GmbH, Drieschstraße 8, 80999 München.",
      },
      { property: "og:title", content: "Impressum – Erwin Restle GmbH" },
      { property: "og:description", content: "Angaben gemäß § 5 DDG." },
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
      <SeitenKopf ueberschrift="Impressum" einleitung="Angaben gemäß § 5 DDG." />

      <Abschnitt>
        <div className="max-w-2xl space-y-8 text-lg">
          <section>
            <address className="not-italic">
              {betrieb.name}
              <br />
              {betrieb.strasse}
              <br />
              {betrieb.plz} {betrieb.ort}
            </address>
            <p className="mt-3">
              Telefon: {betrieb.telefonAnzeige}
              <br />
              E-Mail: {betrieb.email}
            </p>
          </section>

          <section>
            <p>
              Geschäftsführer: {betrieb.geschaeftsfuehrer}
              <br />
              Registereintrag: {betrieb.handelsregister}
              <br />
              Zuständige Kammer: Handwerkskammer für München und Oberbayern
            </p>
          </section>

          <section>
            <p>
              Webseite erstellt von{" "}
              <a
                href={agentur.url}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4"
              >
                {agentur.name}
              </a>
            </p>
          </section>
        </div>
      </Abschnitt>
    </>
  );
}
