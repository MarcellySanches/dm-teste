import { defineConfig } from 'cypress';

export default defineConfig ({
  defaultCommandTimeout: 20000,
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  numTestsKeptInMemory: 0,
  trashAssetsBeforeRuns: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
