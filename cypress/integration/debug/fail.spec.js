/// <reference types="cypress" />

describe('Fail debug methods', { tags: '@debug' }, () => {
  it('Should fail test', () => {
    cy.visit('/')
    cy.wrap(Cypress.env('environment')).then(obj => {
      expect(obj).equal('debug')
      expect(obj).equal('fail')
    })
  })
})
