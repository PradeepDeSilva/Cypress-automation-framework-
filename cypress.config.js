const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.gov.uk/calculate-your-holiday-entitlement',
    experimentalStudio: true
  },
  
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": true,
      "json": true
    },
    
      "video": false,
      "env": {
        "log": {
          "level": "verbose" // Set log level to "info" or "verbose"
        }
    }
  


});
