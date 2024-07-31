const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    // specPattern: 'cypress/integration/login.feature',
    // baseUrl: 'https://dev.pamnas2.jp',
  },
});
