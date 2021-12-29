/// <reference types="cypress" />

describe('Test debug methods', { tags: '@debug' }, () => {
  before(() => {
    cy.log('Before hook')
  })

  beforeEach(() => {
    cy.log('Before each hook')
  })

  afterEach(() => {
    cy.log('After each hook')
  })

  after(() => {
    cy.log('After hook')
  })

  it('Should use assertions', () => {
    cy.visit('/commands/assertions')

    cy.get('.assertion-table')
      .find('tbody tr:last')
      .should('have.class', 'success')
      .find('td')
      .first()
      .should('have.text', 'Column content')
      .should('contain', 'Column content')
      .should('have.html', 'Column content')
      .should('match', 'td')
      .invoke('text')
      .should('match', /column content/i)

    cy.get('.assertions-link').then(el => {
      expect(el).to.have.attr('href')
      expect(el).to.have.attr('target', '_blank')
      expect(el).to.have.text('Cypress Docs')
      expect(el).to.contain('Cypress Docs')
      expect(el).to.be.an('object')
      expect(el).to.be.visible // eslint-disable-line no-unused-expressions
      expect(el).not.to.be.empty // eslint-disable-line no-unused-expressions
    })
  })

  it('Should use a fixture', () => {
    cy.fixture('example.json').as('example')
    cy.intercept('GET', '**/comments/*', { fixture: 'example.json' }).as('getComment')

    cy.visit('/commands/files')
    cy.get('.fixture-btn').click()
    cy.wait('@getComment').its('response.body')
      .should('have.property', 'name')
      .and('include', 'Using fixtures to represent data')
  })
})
