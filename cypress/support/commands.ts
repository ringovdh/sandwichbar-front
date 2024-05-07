Cypress.Commands.add('login', () => {
    cy.visit('/login')
    cy.get('#email-input').type('ringo@faros.be')
    cy.get('#password-input').type('S&cret-10')
    cy.get('#logInButton').click()
    cy.hash().should('eq', '')
})
