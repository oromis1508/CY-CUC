import { defineConfig } from "cypress";
import * as cucSetup from "./cypress/plugins/index";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cucSetup(on, config);
      // implement node event listeners here
    },
    specPattern: "**/*.feature",
    fixturesFolder: false,
  },
});
