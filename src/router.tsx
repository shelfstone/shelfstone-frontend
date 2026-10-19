import { Navigate, createBrowserRouter } from "react-router";
import { Layout, type RouteHandle } from "./layout/Layout";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      // The wanted list moved onto the home page; keep old links working.
      { path: "/wanted", element: <Navigate to="/#wanted" replace /> },
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
