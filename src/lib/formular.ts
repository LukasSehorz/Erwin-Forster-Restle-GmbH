import { z } from "zod";
import { betrieb } from "./betrieb";

export const kontaktSchema = z.object({
  name: z.string().trim().min(2, "Bitte Namen angeben").max(100),
  kontaktweg: z.string().trim().min(5, "Bitte Telefon oder E-Mail angeben").max(120),
  nachricht: z.string().trim().min(5, "Bitte kurz beschreiben, worum es geht").max(2000),
});

export const bewerbungSchema = z.object({
  name: z.string().trim().min(2, "Bitte Namen angeben").max(100),
  telefon: z.string().trim().min(5, "Bitte Telefonnummer angeben").max(60),
  position: z.string().trim().min(2).max(100),
  nachricht: z.string().trim().max(2000).optional(),
});

/**
 * Öffnet einen vorbereiteten E-Mail-Entwurf an das Büro.
 * Wird durch direkten Serverversand ersetzt, sobald die E-Mail-Domain
 * eingerichtet ist.
 */
export function oeffneMailEntwurf(betreff: string, felder: Record<string, string>) {
  const text = Object.entries(felder)
    .map(([label, wert]) => `${label}: ${wert}`)
    .join("\n");

  const url = `mailto:${betrieb.email}?subject=${encodeURIComponent(
    betreff,
  )}&body=${encodeURIComponent(text)}`;

  window.location.href = url;
}
