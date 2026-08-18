/**
 * Vorhandene Fotos des Betriebs, nach Dateiname.
 *
 * Die Dateien liegen unter `public/fotos/` und werden damit vom Server der
 * Website selbst ausgeliefert – lokal wie im Deployment unter demselben Pfad.
 *
 * Bewusst nicht `public/assets/`: Dieser Ordner landet im Build im selben
 * Verzeichnis wie die gehashten Bundles von Vite, die per `_headers` ein Jahr
 * unveränderlich ausgeliefert werden – für austauschbare Fotos ungeeignet.
 *
 * Die Dateien in `src/assets/*.asset.json` verweisen dagegen auf den
 * Asset-Speicher von Lovable und werden nur unter `/__l5e/…` bedient. Diesen
 * Pfad kennt ausschließlich der Lovable-Server; auf Netlify läuft er ins Leere.
 * Deshalb liegen die Fotos hier im Projekt.
 *
 * Neue Fotos nach `public/fotos/` legen und hier ergänzen – die Seiten greifen
 * automatisch darauf zu, solange der Dateiname im <Bild datei="..."> übereinstimmt.
 */
const dateinamen = [
  "Arbeit_Spengler.jpg",
  "Dach_Gaube1.jpg",
  "Dach_Gaube2.jpg",
  "Dach_kupfer.jpg",
  "Dach01.jpg",
  "Dach-Alu.jpg",
  "Taubenabwehr.jpg",
  "zimmerer.jpg",
  "zwiebelturm01.jpg",
] as const;

export const bilder: Record<string, string> = Object.fromEntries(
  dateinamen.map((name) => [name, `/fotos/${name}`]),
);

export const logoUrl = "/fotos/cropped-ER_logo-e1614101004758.png";
