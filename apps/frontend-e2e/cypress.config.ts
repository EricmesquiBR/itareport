import { nxE2EPreset } from "@nx/cypress/plugins/cypress-preset.js";
import { fileURLToPath } from "node:url";
import { defineConfig } from "cypress";

const filename = fileURLToPath(import.meta.url);

export default defineConfig({
  e2e: {
    ...nxE2EPreset(filename, {
      cypressDir: "cypress",
      bundler: "vite",
    }),
  },
});
