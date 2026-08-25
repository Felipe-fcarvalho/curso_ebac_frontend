const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatório',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'ddmmyyyy_HHMMss'
  }
});
