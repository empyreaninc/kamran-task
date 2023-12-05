import { defineConfig } from "cypress";

export default defineConfig({
 
  e2e: {
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true

  },
  
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true,
  }
});

