const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}']
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss"
  }

});
