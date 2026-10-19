import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// The site is served from a sub-path on GitHub Pages (/website/) and from the root on a custom
// domain. The deploy workflow sets BASE_PATH; local runs default to the root.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react()],
});
