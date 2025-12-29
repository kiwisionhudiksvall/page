import { defineConfig } from "vite";
import graphqlLoader from "vite-plugin-graphql-loader";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), graphqlLoader()],
  assetsInclude: ["**/*.ttf", "**/*.otf"],
});
