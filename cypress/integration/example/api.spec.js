/// <reference types="cypress" />

describe('Test momentum', () => {

    it('GET', () => {
        cy.api('https://swapi.dev/api/people/1')
    })
})