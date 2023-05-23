const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  creenshotOnRunFailure: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    experimentalRunAllSpecs: true,
    specPattern: "**/*.feature",
    baseUrl: "https://practice.automationtesting.in/"
  },
});
