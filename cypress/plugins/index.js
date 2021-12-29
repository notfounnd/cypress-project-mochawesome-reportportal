/// <reference types="cypress" />

const deepmerge = require('deepmerge')
const path = require('path')
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin')

// merge environment file with globals configs in cypress.json
// https://github.com/bahmutov/config-extends-example/blob/master/cypress/plugins/index.js
function loadConfig (filename) {
  const configJson = require(filename)
  if (configJson.extends) {
    const baseConfigFilename = path.join(
      path.dirname(filename), configJson.extends)
    const baseConfig = loadConfig(baseConfigFilename)
    console.log('merging %s with %s', baseConfigFilename, filename)
    return deepmerge(baseConfig, configJson)
  } else {
    return configJson
  }
}

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  require('cypress-grep/src/plugin')(config)

  // setup report portal plugin
  // https://github.com/reportportal/agent-js-cypress
  registerReportPortalPlugin(on, config)

  return loadConfig(config.configFile)
}
