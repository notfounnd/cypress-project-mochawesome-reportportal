/// <reference types="cypress" />

const el = require('./elements')

Cypress.Commands.add('exampleAssertTable', () => {
  cy.get(el.ASSERTATION_TABLE)
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
})

Cypress.Commands.add('exampleAssertLinks', (target) => {
  cy.get(el.ASSERTATIONS_LINK).then(obj => {
    expect(obj).to.have.attr('href')
    expect(obj).to.have.attr('target', target)
    expect(obj).to.have.text('Cypress Docs')
    expect(obj).to.contain('Cypress Docs')
    expect(obj).to.be.an('object')
    expect(obj).to.be.visible // eslint-disable-line no-unused-expressions
    expect(obj).not.to.be.empty // eslint-disable-line no-unused-expressions
  })
})
