import arbeitSpengler from "@/assets/Arbeit_Spengler.jpg.asset.json";
import dachGaube1 from "@/assets/Dach_Gaube1.jpg.asset.json";
import dachGaube2 from "@/assets/Dach_Gaube2.jpg.asset.json";
import dachKupfer from "@/assets/Dach_kupfer.jpg.asset.json";
import dach01 from "@/assets/Dach01.jpg.asset.json";
import dachAlu from "@/assets/Dach-Alu.jpg.asset.json";
import taubenabwehr from "@/assets/Taubenabwehr.jpg.asset.json";
import zimmerer from "@/assets/zimmerer.jpg.asset.json";
import zwiebelturm01 from "@/assets/zwiebelturm01.jpg.asset.json";
import logo from "@/assets/cropped-ER_logo-e1614101004758.png.asset.json";

/**
 * Die Fotos liegen auf dem Asset-Speicher von Lovable und werden dort unter
 * `/__l5e/…` ausgeliefert. Diesen Pfad kennt nur der Lovable-Server – lokal
 * läuft er ins Leere und die Bilder blieben leer.
 *
 * Deshalb liegen dieselben Dateien zusätzlich unter `public/assets/`. In der
 * lokalen Entwicklung wird diese Kopie verwendet, im Deployment unverändert
 * die Original-URL von Lovable.
 */
function quelle(asset: { url: string; original_filename: string }): string {
  return import.meta.env.DEV ? `/assets/${asset.original_filename}` : asset.url;
}

/**
 * Vorhandene Fotos des Betriebs, nach Dateiname.
 * Neue Fotos hier ergänzen – die Seiten greifen automatisch darauf zu,
 * solange der Dateiname im <Bild datei="..."> übereinstimmt.
 */
export const bilder: Record<string, string> = {
  "Arbeit_Spengler.jpg": quelle(arbeitSpengler),
  "Dach_Gaube1.jpg": quelle(dachGaube1),
  "Dach_Gaube2.jpg": quelle(dachGaube2),
  "Dach_kupfer.jpg": quelle(dachKupfer),
  "Dach01.jpg": quelle(dach01),
  "Dach-Alu.jpg": quelle(dachAlu),
  "Taubenabwehr.jpg": quelle(taubenabwehr),
  "zimmerer.jpg": quelle(zimmerer),
  "zwiebelturm01.jpg": quelle(zwiebelturm01),
};

export const logoUrl = quelle(logo);
