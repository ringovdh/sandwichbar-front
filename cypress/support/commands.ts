Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('#login-link').click()

    cy.origin('http://127.0.0.1:9000', () => {
        cy.get('input#username').type('ringo@faros.be')
        cy.get('input#password').type('S&cret-10')
        cy.get('input#submit').click()
    })

})
