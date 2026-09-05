import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: true,
    outDir: "js/originkit-build",
    lib: {
      entry: "src/main.jsx",
      formats: ["es"],
      fileName: () => "season-sphere.js"
    }
  }
});
