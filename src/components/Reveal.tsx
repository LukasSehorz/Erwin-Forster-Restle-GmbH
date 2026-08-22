import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Sanftes Einblenden beim Scrollen: fade + 12 px nach oben.
 * Verzögerung nur für maximal drei gestaffelte Elemente verwenden.
 *
 * `stil="falten"` klappt den Inhalt stattdessen um die senkrechte Achse auf –
 * das ist die Einblendung, die die Vorlage für den Kachelbereich verwendet.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  stil = "einblenden",
}: {
  children: ReactNode;
  delay?: 0 | 1 | 2;
  className?: string;
  as?: "div" | "section" | "li" | "article";
  stil?: "einblenden" | "falten";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const beobachter = new IntersectionObserver(
      (eintraege) => {
        for (const eintrag of eintraege) {
          if (eintrag.isIntersecting) {
            setSichtbar(true);
            beobachter.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    beobachter.observe(el);
    return () => beobachter.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`${stil === "falten" ? "falten" : "reveal"} ${className}`}
      data-visible={sichtbar ? "true" : "false"}
      style={stil === "falten" ? undefined : { transitionDelay: `${delay * 90}ms` }}
    >
      {children}
    </Tag>
  );
}
