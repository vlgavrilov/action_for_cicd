const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      config.baseUrl = config.env.BASE_URL;

      return config;
    },

    excludeSpecPattern: [
      //'*/**/**/**/sorting'
      // '*/**/**/Links/sorting/sorting-for-embed.cy.js',
      // '*/**/**/Media/sorting/sorting-for-video.cy.js',
      // '*/**/**/Media/sorting/sorting-for-audio.cy.js',
    ],

    //specPattern: "cypress/integration",
    video: false,
    experimentalRunAllSpecs: true,
    fixturesFolder: "cypress/",
  },
});
