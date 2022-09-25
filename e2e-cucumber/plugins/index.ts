// e2e-cumber/plugins/index.ts

import * as browserify from "@cypress/browserify-preprocessor";
import { preprocessor } from "@badeball/cypress-cucumber-preprocessor/browserify";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";


export default async function (on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    preprocessor(config, {
      ...browserify.defaultOptions,
      typescript: require.resolve("typescript"),
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

