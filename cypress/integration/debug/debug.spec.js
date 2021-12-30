/// <reference types="cypress" />

describe('Execute debug methods', { tags: '@debug' }, () => {
  it('Should log environment arg', () => {
    cy.log(Cypress.env('argExample'))
  })

  it('Should read Cypress.config()', () => {
    Object.entries(Cypress.config()).forEach(entry => {
      cy.log(entry[0] + ': ' + entry[1])
    })
    console.log(Cypress.config())
    console.log(Cypress.config().reporterOptions)
  })

  it('Should read Cypress.env()', () => {
    Object.entries(Cypress.env()).forEach(entry => {
      cy.log(entry[0] + ': ' + entry[1])
    })
  })
})
