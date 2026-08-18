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
} as const;

export const navigation = [
  { to: "/", label: "Start" },
  { to: "/spenglerei", label: "Spenglerei" },
  { to: "/dachdeckerei", label: "Dachdeckerei" },
  { to: "/zimmerei", label: "Zimmerei & Holzbau" },
  { to: "/sekuranten", label: "Sekuranten" },
  { to: "/taubenabwehr", label: "Taubenabwehr" },
  { to: "/betrieb", label: "Betrieb & Team" },
  { to: "/karriere", label: "Karriere" },
] as const;
