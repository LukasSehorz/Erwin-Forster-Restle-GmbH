import { createFileRoute } from "@tanstack/react-router";
import { Bild } from "@/components/Bild";
import { Reveal } from "@/components/Reveal";
import { SeitenKopf, Abschnitt } from "@/components/SeitenKopf";
import { betrieb } from "@/lib/betrieb";

export const Route = createFileRoute("/taubenabwehr")({
  head: () => ({
    meta: [
      { title: "Taubenabwehr am Dach in München | Erwin Restle GmbH" },
      {
        name: "description",
        content:
          "Taubenabwehr in München: Spikes und Netze fachgerecht am Dach montiert. Schutz vor Schäden durch Taubenkot an Bausubstanz und Dachrinnen.",
      },
      { property: "og:title", content: "Taubenabwehr am Dach in München" },
      {
        property: "og:description",
        content:
          "Spikes und Netze, fachgerecht montiert mit Absturzsicherung – vom Dachdeckerbetrieb aus Allach-Untermenzing.",
      },
      { property: "og:url", content: "/taubenabwehr" },
    ],
    links: [{ rel: "canonical", href: "/taubenabwehr" }],
  }),
  component: Taubenabwehr,
});

function Taubenabwehr() {
  return (
    <>
      <SeitenKopf
        ueberschrift="Taubenabwehr"
        einleitung="Wo Tauben sitzen, bleibt Kot. Der schadet dem Gebäude – und wird mit der Zeit teuer."
      />

      <Abschnitt>
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div className="space-y-8">
            <Reveal>
              <div>
                <h2 className="text-2xl">Warum Taubenkot ein Problem ist</h2>
                <p className="mt-3 max-w-xl text-lg text-muted-foreground">
                  Taubenkot ist säurehaltig. Er greift Putz, Blech und Dichtungen an, verstopft
                  Rinnen und Fallrohre und führt dazu, dass Wasser dort läuft, wo es nicht laufen
                  soll. Dazu kommt die hygienische Seite: In getrocknetem Kot und in alten Nestern
                  sitzen Keime und Parasiten.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div>
                <h2 className="text-2xl">Wie wir vorgehen</h2>
                <p className="mt-3 max-w-xl text-lg text-muted-foreground">
                  Zuerst schauen wir uns an, wo die Tauben tatsächlich sitzen – Sims, Gaube,
                  Rinne, Dachkante. Danach wählen wir die passende Abwehr: Spikes an schmalen
                  Sitzflächen, Netze vor größeren Öffnungen und Nischen. Die Befestigung wird so
                  gesetzt, dass sie das Bauteil nicht beschädigt und im Winter hält.
                </p>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="border-l-2 border-primary pl-6">
                <h2 className="text-2xl">Montage gehört auf das Dach – und in Fachhände</h2>
                <p className="mt-3 max-w-xl text-lg text-muted-foreground">
                  Die meisten Sitzplätze liegen an Stellen, an die man nur mit Absturzsicherung
                  kommt. Wir sind ohnehin am Dach unterwegs, haben die Ausrüstung dabei und sehen
                  gleich, ob nebenan noch etwas anderes zu machen ist.
                </p>
                <p className="mt-4 text-lg">
                  <a
                    href={betrieb.telefonLink}
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Rufen Sie an: {betrieb.telefonAnzeige}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <Bild
              datei="Taubenabwehr.jpg"
              alt="Montierte Taubenabwehr mit Spikes an einer Dachkante"
              verhaeltnis="4/3"
            />
          </Reveal>
        </div>
      </Abschnitt>
    </>
  );
}
