import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function RecruitingBanner() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <Reveal>
          <div className="border-2 border-primary bg-background px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl">
                  Wir suchen Verstärkung – Spengler, Monteure und Azubis (m/w/d)
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">
                  Feste Mannschaft, Baustellen im Raum München und Umgebung, abends daheim. Meld
                  dich gern auch ohne Unterlagen.
                </p>
              </div>
              <Link
                to="/karriere"
                className="inline-flex shrink-0 items-center justify-center bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Offene Stellen ansehen
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
