import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnrufLeiste } from "@/components/AnrufLeiste";
import { betrieb } from "@/lib/betrieb";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold text-foreground">Seite nicht gefunden</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Diese Seite gibt es nicht oder sie wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary px-5 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Diese Seite konnte nicht geladen werden
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Bitte laden Sie die Seite neu. Sie erreichen uns jederzeit telefonisch unter{" "}
          <a href={betrieb.telefonLink} className="text-primary underline underline-offset-4">
            {betrieb.telefonAnzeige}
          </a>
          .
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-primary px-5 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Neu laden
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-input bg-background px-5 py-3 text-lg font-semibold transition-colors hover:bg-sand"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Erwin Restle GmbH" },
      { property: "og:site_name", content: "Erwin Restle GmbH" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          name: betrieb.name,
          description:
            "Spenglerei, Dachdeckerei sowie Holz- und Bautenschutz in München Allach-Untermenzing – seit 1985.",
          foundingDate: String(betrieb.gegruendet),
          telephone: "+49 89 82020441",
          faxNumber: "+49 89 81885945",
          email: betrieb.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: betrieb.strasse,
            postalCode: betrieb.plz,
            addressLocality: betrieb.ort,
            addressCountry: "DE",
          },
          areaServed: "München und Umgebung",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:30",
              closes: "12:30",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <AnrufLeiste />
    </QueryClientProvider>
  );
}
