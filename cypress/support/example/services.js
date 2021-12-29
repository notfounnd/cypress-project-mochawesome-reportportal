/// <reference types="cypress" />

Cypress.Commands.add('exampleServiceIntercept', () => {
  cy.fixture('example.json').as('example')
  cy.intercept('GET', '**/comments/*', { fixture: 'example.json' })
})
