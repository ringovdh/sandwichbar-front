Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('#login-link').click()

    cy.origin('https://sandwichbar.eu.auth0.com', () => {
        cy.get('input#username').type('ringo@faros.be')
        cy.get('input#password').type('S&cret-10')
        cy.get('button[name=action]').click()
    })

})
