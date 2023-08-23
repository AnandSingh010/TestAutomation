const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  // retries: {
  //   runMode: 0,
  //   openMode: 0,
  // },
  video: true,
  chromeWebSecurity: false,
  // failOnStatusCode: false,
  // videoUploadOnPasses: false,
  // failOnNonZeroExit: false,
  // defaultCommandTimeout: 60000,
  // execTimeout: 30000,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 80000,
  // viewportWidth: 1600,
  // viewportHeight: 1200,
  // clientRoute: '/',  
  // screenshotOnRunFailure: true,
//   "reporter": "../node_modules/mochawesome/src/mochawesome.js",
// "reporterOptions": {
//     "overwrite": false,
//     "html": false,
//     "json": true
// },
  // numTestsKeptInMemory: 0, 
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
     
    },
    specPattern: 'cypress/integration/*.feature',
  },
})
