import { defineConfig } from "vite";
import { resolve } from "node:path";

/* Site com várias páginas (abas). Cada .html da raiz vira uma página. */
const paginas = ["index", "musculacao", "danca", "jiu-jitsu", "muay-thai", "funcional", "contato"];

export default defineConfig({
  base: "./",
  esbuild: { jsx: "automatic" },
  build: {
    rollupOptions: {
      input: Object.fromEntries(paginas.map((p) => [p, resolve(__dirname, `${p}.html`)]))
    }
  }
});
