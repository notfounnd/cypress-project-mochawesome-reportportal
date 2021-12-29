/// <reference types="cypress" />
// https://github.com/cypress-io/cypress-example-todomvc#custom-commands

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom command example for assertations
     *
     * @example
     *    cy.exampleAssertTable()
     */
    exampleAssertTable(): Chainable<any>

    /**
     * Custom command example for assertations
     * 
     * @param target Value for target link attribute
     * @example
     *    cy.exampleAssertLinks('_blank')
     */
    exampleAssertLinks(target: string): Chainable<any>

    /**
     * Custom command example to support test
     *
     * @example
     *    cy.exampleServiceIntercept()
     *    cy.exampleServiceIntercept().as('getComment')
     */
    exampleServiceIntercept(): Chainable<any>
  }
}