/// <reference types="cypress" />

describe('Example context test', { tags: ['@debug', '@example'] }, () => {
  before(() => {
    cy.log('Before suite test')
  })

  beforeEach(() => {
    cy.log('Before each test')
  })

  afterEach(() => {
    cy.log('After each test')
  })

  after(() => {
    cy.log('After suite test')
  })

  it('Should use assertions', () => {
    const target = '_blank'

    cy.visit('/commands/assertions')
    cy.exampleAssertTable()
    cy.exampleAssertLinks(target)
  })

  it('Should use a fixture', () => {
    cy.exampleServiceIntercept().as('getComment')

    cy.visit('/commands/files')
    cy.get('.fixture-btn').click()
    cy.wait('@getComment').its('response.body')
      .should('have.property', 'name')
      .and('include', 'Using fixtures to represent data')
  })
})
