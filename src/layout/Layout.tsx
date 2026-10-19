import { useEffect } from "react";
import { Outlet, ScrollRestoration, useMatches } from "react-router";
import { site } from "../content/site";
import { Footer } from "./Footer";
import { Header } from "./Header";

/** Per-route data set in the router: the tab title and optional footer fine print. */
export type RouteHandle = { title?: string; footerNote?: string };

function useRouteHandle(): RouteHandle {
  const matches = useMatches();
  return (matches.at(-1)?.handle ?? {}) as RouteHandle;
}

export function Layout() {
  const { title, footerNote } = useRouteHandle();

  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : site.name;
  }, [title]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer note={footerNote} />
      {/* Restores scroll on back/forward and scrolls to #section links. */}
      <ScrollRestoration />
    </>
  );
}
