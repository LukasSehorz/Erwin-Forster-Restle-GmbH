import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SeitenKopf({
  ueberschrift,
  einleitung,
  kicker,
}: {
  ueberschrift: string;
  einleitung: string;
  kicker?: string;
}) {
  return (
    <section className="border-b border-border bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <Reveal>
          {kicker ? (
            <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
              {kicker}
            </p>
          ) : null}
          <h1 className="max-w-3xl text-3xl md:text-5xl">{ueberschrift}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">{einleitung}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Abschnitt({
  children,
  grau = false,
  className = "",
}: {
  children: ReactNode;
  grau?: boolean;
  className?: string;
}) {
  return (
    <section className={grau ? "bg-sand" : ""}>
      <div className={`mx-auto max-w-6xl px-5 py-14 md:py-20 ${className}`}>{children}</div>
    </section>
  );
}
