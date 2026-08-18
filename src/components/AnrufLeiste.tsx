import { betrieb } from "@/lib/betrieb";
import { Phone } from "lucide-react";

/** Dauerhaft erreichbare Telefonleiste am unteren Bildschirmrand (mobil). */
export function AnrufLeiste() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background md:hidden">
      <a
        href={betrieb.telefonLink}
        className="flex items-center justify-center gap-3 bg-primary py-4 text-lg font-semibold text-primary-foreground"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Anrufen: {betrieb.telefonAnzeige}
      </a>
    </div>
  );
}
