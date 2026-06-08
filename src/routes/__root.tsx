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
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Loader } from "@/components/Loader";
import { AuthProvider } from "@/hooks/use-auth";

/* ─── 404 ──────────────────────────────────────────────── */
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-lg text-center">
        {/* Luxury 404 */}
        <div className="pointer-events-none mb-8 flex items-center justify-center">
          <span className="text-[120px] font-semibold leading-none text-gradient-gold opacity-20 select-none">
            404
          </span>
        </div>
        <h1 className="text-5xl font-semibold text-gradient-gold">Lost in transit.</h1>
        <p className="mx-auto mt-4 max-w-sm text-muted-foreground">
          The page you're looking for doesn't exist or has set sail for somewhere else.
          Let us guide you back.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Return home
          </Link>
          <Link
            to="/explore"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5"
          >
            Browse destinations
          </Link>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          Developer: Krishna Sangavi &nbsp;·&nbsp; Violet Voyage
        </p>
      </div>
    </div>
  );
}

/* ─── Error ─────────────────────────────────────────────── */
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="glass max-w-md rounded-3xl p-10 text-center shadow-glow">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-red-500/15 text-3xl">
          ✦
        </div>
        <h1 className="text-2xl font-semibold text-gradient-gold">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          An unexpected error occurred. You can try again or return home.
        </p>
        {error?.message && (
          <p className="mt-3 rounded-xl bg-white/5 px-3 py-2 text-xs text-red-400 font-mono">
            {error.message}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Route definition ───────────────────────────────────── */
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Violet Voyage — Travel Beyond Borders" },
      {
        name: "description",
        content:
          "Violet Voyage is a premium international travel platform for immersive destination discovery, curated culture, food, music, and AI-powered trip planning.",
      },
      { name: "author", content: "Developer: Krishna Sangavi" },
      { property: "og:title", content: "Violet Voyage — Travel Beyond Borders" },
      {
        property: "og:description",
        content:
          "Discover the world through culture, food, music, and memories. Premium travel curation by Violet Voyage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@VioletVoyage" },
      { name: "twitter:title", content: "Violet Voyage — Travel Beyond Borders" },
      {
        name: "twitter:description",
        content:
          "Discover the world through culture, food, music, and memories. Premium travel curation.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
      <AuthProvider>
        <Loader />
        <ScrollProgress />
        <Outlet />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "oklch(0.18 0.01 250)",
              border: "1px solid oklch(0.3 0.01 250)",
              color: "oklch(0.92 0.02 60)",
            },
          }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
}
