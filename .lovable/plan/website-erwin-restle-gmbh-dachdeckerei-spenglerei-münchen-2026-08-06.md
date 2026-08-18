# Website Erwin Restle GmbH — Dachdeckerei & Spenglerei München

Neue, schlichte Website auf Deutsch. Hauptzweck: Mitarbeitergewinnung, danach Kundeninformation und schneller Anruf.

## Gestaltung

- Farben: Rot #C0392B nur als Akzent (Buttons, Links, aktive Navigation, feine Linien), Anthrazit #2B2B2B für Text und Überschriften, warmes Grau #F4F2EF für Abschnitte, Weiß als Grundfläche. Keine weiteren Farben.
- Eine serifenlose Schrift (Source Sans 3), Fließtext 18 px, großzügige Zeilenhöhe, kräftige Überschriften.
- Ruhige, asymmetrische Layouts mit viel Weißraum. Keine Dreier-Kartenraster, keine Icon-Kreise, keine Verläufe, kein Dark Mode.
- Animationen: sanftes Einblenden beim Scrollen (fade + 12 px, 250–350 ms, max. 3 gestaffelte Elemente), Bild-Hover Scale 1.03, ruhiger Farbwechsel auf Buttons. `prefers-reduced-motion` wird respektiert.
- Mobile First; Telefonnummer dauerhaft erreichbar über eine fixierte Leiste unten (mobil) und im Header (Desktop).

## Seiten

1. **Startseite** — Hero mit Dachfoto, Titel „Dachdeckerei und Spenglerei in München", ein Untertitelsatz, Buttons „Jetzt anrufen: 089 8202 0441" (tel:) und „Offene Stellen". Vier Leistungsblöcke (Spenglerei, Dachdeckerei, Zimmerei & Holzbau, Taubenabwehr) je mit Bild, Überschrift, 2–3 Sätzen, Link. Kurzer Betriebsabschnitt mit Link zu „Betrieb & Team". Auffälliger Recruiting-Banner in Rot mit Button zur Karriereseite. Kontaktzeile mit Adresse, Telefon, Öffnungszeiten.
2. **Spenglerei** — Kupfer, Aluminium, Blech; Rinnen, Fallrohre, Kamineinfassungen; Gauben; Sonderanfertigungen. Eigener Abschnitt „Auch außergewöhnliche Aufgaben" für Zwiebelturm und runde Fenstereinfassungen.
3. **Dachdeckerei** — Neu decken und reparieren, Abdichten, Wärmedämmung, Dachflächenfenster (Roto). Dachbegrünung kommt nirgends vor.
4. **Zimmerei & Holzbau** — Dachkonstruktionen, Fachwerk, Balkone, Verschalungen, Dämmung, Holzschutz, Innenausbau, Carports und Nebengebäude.
5. **Taubenabwehr** — Schäden durch Taubenkot, fachgerechte Abwehr mit Spikes und Netzen, Montage nur mit Absturzsicherung.
6. **Betrieb & Team** — Ehrlicher Kurztext (inhabergeführt, feste Mannschaft, alles aus einer Hand). Team-Raster für 6 Personen im Format 4:5 mit Vorname, Funktion, optionalem Satz; vorerst graue Platzhalterflächen „Foto folgt". Kleine Galerie ausgeführter Arbeiten.
7. **Karriere** (wichtigste Seite) — „Wir suchen Verstärkung". Vier Stellen (Dachdecker/in, Spengler/in, Auszubildende/r, Helfer/in Dach) je mit Aufgaben, Erwartungen, Angebot. Abschnitt „Was wir bieten" bodenständig. Bewerbung per Telefon („Ruf einfach an – auch ohne Unterlagen"), WhatsApp und E-Mail; kurzes Formular mit vier Feldern: Name, Telefon, Position, Nachricht. Kein Upload. Zwei bis drei Baustellenfotos.
8. **Kontakt** — Adresse, Telefon, Fax, E-Mail info@restle.online, Öffnungszeiten, eingebettete Karte Drieschstraße 8, Kontaktformular (Name, Telefon oder E-Mail, Nachricht).
9. **Impressum** und 10. **Datenschutzerklärung** — nur Struktur mit deutlich gekennzeichneten Platzhaltern, keine erfundenen Rechtstexte. Im Footer verlinkt.

Navigation: Start, Spenglerei, Dachdeckerei, Zimmerei & Holzbau, Taubenabwehr, Betrieb & Team, Karriere (rot hervorgehoben).

## Bilder

Die 14 Fotos liegen im Projekt noch nicht vor. Alle Bildflächen werden mit den geplanten Seitenverhältnissen, Rahmen und alt-Texten angelegt und zunächst mit ruhigen grauen Platzhaltern gefüllt. Sobald Sie die Dateien hochladen, werden sie eingesetzt — Bilder werden maßvoll dimensioniert, nicht bildschirmfüllend, `loading="lazy"`.

## Formulare und E-Mail

Karriere- und Kontaktformular senden an info@restle.online. Dafür wird Lovable Cloud aktiviert und der E-Mail-Versand eingerichtet; dazu muss einmalig eine E-Mail-Domain verifiziert werden (DNS-Einträge). Bis die Domain verifiziert ist, funktionieren Telefon, WhatsApp und der direkte E-Mail-Link bereits.

WhatsApp-Link verwendet vorerst 089 8202 0441. Falls es eine Mobilnummer gibt, bitte nachreichen — WhatsApp funktioniert mit Festnetz nur eingeschränkt.

## Nicht verwendet

Keine Jahreszahl „seit 1985", kein Meisterbetrieb, keine Innung oder Zertifikate, keine Mitarbeiter- oder Projektzahlen, keine Bewertungen oder Kundenstimmen, keine Dachbegrünung, keine Adresse info@restle-gmbh.de.

## Technisches

TanStack-Routen je Seite mit eigenen Meta-Titles und -Descriptions mit lokalem Bezug (München, Allach-Untermenzing), LocalBusiness-JSON-LD, semantisches HTML, saubere Überschriftenhierarchie, WCAG-AA-Kontraste. Farben und Typografie als Design-Tokens in `src/styles.css`. Team-Karte und Bildfläche als eigene Komponenten, damit der spätere Fotoaustausch einfach ist.
