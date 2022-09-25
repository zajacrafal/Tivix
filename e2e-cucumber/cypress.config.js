const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: 'fixtures',
  screenshotsFolder: 'reports/screenshots',
  screenshotOnRunFailure: true,
  videosFolder: 'reports/videos',
  video: false,
  defaultCommandTimeout: 15000,
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./plugins/index.ts').default(on, config)
    },
    specPattern: 'features/**/*.{feature,features}',
    supportFile: 'support/commands.ts',
    baseUrl: 'http://qalab.pl.tivixlabs.com/',
  },
})
