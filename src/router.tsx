import { createBrowserRouter } from "react-router";
import { wantedTrademarks } from "./content/wanted";
import { Layout, type RouteHandle } from "./layout/Layout";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { WantedPage } from "./pages/WantedPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/wanted",
        element: <WantedPage />,
        handle: { title: "Wanted list", footerNote: wantedTrademarks } satisfies RouteHandle,
      },
      {
        path: "/privacy",
        element: <PrivacyPage />,
        handle: { title: "Privacy" } satisfies RouteHandle,
      },
      {
        path: "*",
        element: <NotFoundPage />,
        handle: { title: "Not found" } satisfies RouteHandle,
      },
    ],
  },
]);
