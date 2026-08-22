import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Die frühere Seite "Betrieb & Team" ist auf /ueber-uns und /team aufgeteilt.
 * Die Route bleibt bestehen, damit vorhandene Links und Lesezeichen nicht ins
 * Leere laufen.
 */
export const Route = createFileRoute("/betrieb")({
  beforeLoad: () => {
    throw redirect({ to: "/ueber-uns", replace: true });
  },
});
