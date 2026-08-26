export const betrieb = {
  name: "Erwin Restle GmbH",
  zusatz: "Spenglerei · Dachdeckerei · Holz- und Bautenschutz",
  strasse: "Drieschstraße 8",
  plz: "80999",
  ort: "München",
  stadtteil: "Allach-Untermenzing",
  telefonAnzeige: "089 8202 0441",
  telefonLink: "tel:+498982020441",
  whatsapp: "https://wa.me/498982020441",
  faxAnzeige: "089 8188 5945",
  email: "info@restle.online",
  geschaeftsfuehrer: "Erwin Restle",
  handelsregister: "HRB 118991, Amtsgericht München",
  oeffnungszeiten: "Montag bis Freitag, 08:30 bis 12:30 Uhr",
  /** Zusatz unter den Bürozeiten – E-Mail-Adresse dabei immer verlinken. */
  emailHinweis: "Jederzeit per E-Mail erreichbar",
  gegruendet: 1985,
  /** Kurzer Claim für die Topbar über dem Logo. */
  claim: "Spengler- und Dachdeckerarbeiten aus Meisterhand – seit 1985.",
} as const;

/**
 * Hauptnavigation als zwei Ebenen: Einträge mit `kinder` klappen im Header als
 * Ordner auf und haben selbst keine eigene Seite. Header und Footer lesen beide
 * aus dieser Liste – neue Seiten hier ergänzen, dann erscheinen sie überall.
 */
export const navigation = [
  { to: "/", label: "Start" },
  {
    label: "Dachbau",
    kinder: [
      { to: "/spenglerei", label: "Spenglerei" },
      { to: "/dachdeckerei", label: "Dachdeckerei" },
    ],
  },
  { to: "/reparatur-dachwartung", label: "Reparatur & Dachwartung" },
  {
    label: "Sicherheit am Dach",
    kinder: [
      { to: "/sekuranten", label: "Absturzsicherung" },
      { to: "/taubenabwehr", label: "Taubenabwehr" },
    ],
  },
  { to: "/dachbegruenung", label: "Dachbegrünung" },
  {
    label: "Über uns",
    kinder: [
      { to: "/ueber-uns", label: "Über uns" },
      { to: "/team", label: "Team" },
    ],
  },
  { to: "/karriere", label: "Karriere" },
] as const;

type NavEintrag = (typeof navigation)[number];
type NavOrdner = Extract<NavEintrag, { readonly kinder: readonly unknown[] }>;
/** Ein Eintrag mit eigener Seite – oberste Ebene oder Untereintrag eines Ordners. */
export type NavZiel = Exclude<NavEintrag, NavOrdner> | NavOrdner["kinder"][number];

/** Dieselbe Navigation auf einer Ebene – der Footer listet nur Zielseiten. */
export const navigationFlach = navigation.flatMap<NavZiel>((punkt) =>
  "kinder" in punkt ? [...punkt.kinder] : [punkt],
);

/** Umsetzung der Website – verlinkt im Footer und im Impressum. */
export const agentur = {
  name: "Flowstate",
  url: "https://flowstateai.de/",
  hinweis: "Webseite erstellt von Flowstate",
} as const;
