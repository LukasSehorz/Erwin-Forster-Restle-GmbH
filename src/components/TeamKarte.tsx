import { Bild } from "./Bild";

export type Mitarbeiter = {
  vorname: string;
  funktion: string;
  satz?: string;
  /** Sobald ein Foto vorliegt: importiertes Bild hier eintragen. */
  foto?: string;
};

export function TeamKarte({ person }: { person: Mitarbeiter }) {
  return (
    <li>
      <Bild
        src={person.foto}
        alt={`${person.vorname}, ${person.funktion} bei der Erwin Restle GmbH`}
        verhaeltnis="4/5"
      />
      <h3 className="mt-3 text-xl">{person.vorname}</h3>
      <p className="text-lg text-primary">{person.funktion}</p>
      {person.satz ? <p className="mt-1 text-[17px] text-muted-foreground">{person.satz}</p> : null}
    </li>
  );
}
