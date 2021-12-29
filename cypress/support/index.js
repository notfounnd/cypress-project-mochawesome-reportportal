/// <reference types="cypress" />

// import custom commands
import './helpers/commands'
import './example/actions'
import './example/services'

// import context from mochawesome
import addContext from 'mochawesome/addContext'

// set 'cypress-xpath' plugin reference
// https://github.com/cypress-io/cypress-xpath#readme
require('cypress-xpath')

// set 'cypress-grep' plugin reference
// https://github.com/cypress-io/cypress-grep#install
require('cypress-grep')()

// setup report portal custom commands
// https://github.com/reportportal/agent-js-cypress
require('@reportportal/agent-js-cypress/lib/commands/reportPortalCommands')

// set selector priority for cypress
Cypress.SelectorPlayground.defaults({
  selectorPriority: [
    'data-cy',
    'data-test',
    'data-testid',
    'id',
    'attributes',
    'class',
    'tag',
    'nth-child'
  ]
})

// turn off all uncaught exception handling
// https://docs.cypress.io/api/events/catalog-of-events#Uncaught-Exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err) {
    console.log(err.stack)
  }
  return false
})

// insert report screenshot on failed test
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshot = `../../screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`

    addContext({ test }, screenshot)
  }
})
