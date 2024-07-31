describe('My First Test', () => {
  it('Visits the Cypress documentation page', () => {
    cy.visit('https://docs.cypress.io')
    cy.contains('Getting Started').click()
    cy.url().should('include', '/why-cypress')
  })
})