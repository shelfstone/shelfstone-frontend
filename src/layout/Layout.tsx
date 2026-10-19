import { useEffect } from "react";
import { Outlet, ScrollRestoration, useMatches } from "react-router";
import { site } from "../content/site";
import { Footer } from "./Footer";
import { Header } from "./Header";

/** Per-route data set in the router: the tab title. */
export type RouteHandle = { title?: string };

function useRouteTitle(): string | undefined {
  const matches = useMatches();
  return (matches.at(-1)?.handle as RouteHandle | undefined)?.title;
}

export function Layout() {
  const title = useRouteTitle();

  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : site.name;
  }, [title]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* Restores scroll on back/forward and scrolls to #section links. */}
      <ScrollRestoration />
    </>
  );
}
