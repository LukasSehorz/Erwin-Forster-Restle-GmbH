import { bilder } from "@/lib/bilder";

type Verhaeltnis = "4/3" | "3/2" | "4/5" | "16/9" | "1/1";

/**
 * Maßvolle Bildfläche mit Rahmen.
 *
 * `datei` verweist auf ein Foto aus `src/lib/bilder.ts`. Fehlt das Foto noch,
 * wird eine ruhige graue Fläche mit dem Dateinamen angezeigt.
 */
export function Bild({
  src,
  alt,
  datei,
  verhaeltnis = "4/3",
  className = "",
  zoom = true,
  prioritaet = false,
}: {
  src?: string | undefined;
  alt: string;
  datei?: string | undefined;
  verhaeltnis?: Verhaeltnis;
  className?: string;
  zoom?: boolean;
  prioritaet?: boolean;
}) {
  const quelle = src ?? (datei ? bilder[datei] : undefined);

  return (
    <figure
      className={`overflow-hidden rounded-sm border border-border bg-sand ${className}`}
      style={{ aspectRatio: verhaeltnis.replace("/", " / ") }}
    >
      {quelle ? (
        <img
          src={quelle}

          alt={alt}
          loading={prioritaet ? "eager" : "lazy"}
          decoding="async"
          className={`h-full w-full object-cover transition-transform duration-500 ease-out ${
            zoom ? "hover:scale-[1.03]" : ""
          }`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-1 px-4 text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Foto folgt
          </span>
          {datei ? (
            <span className="text-xs text-muted-foreground/80">{datei}</span>
          ) : null}
        </div>
      )}
    </figure>
  );
}
