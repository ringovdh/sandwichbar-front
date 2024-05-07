describe('Login', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('Login page contains title', () => {
        cy.get('.login-container')
            .contains('Login')
    })

    it('Login page contains register link', () => {
        cy.contains('Please register first.')
            .should('have.attr', 'href', '/register')
    })

    it('Login page requires email', () => {
        cy.get('#logInButton')
            .click()
        cy.get('#email-error-message')
            .contains('Please enter a valid email')
    })

    it('Login page requires password', () => {
        cy.get('#email-input')
            .type('test@mail.com')
        cy.get('#logInButton')
            .click()
        cy.get('#password-error-message')
            .contains('Please enter a strong password')
    })

    it('Login page requires correct username and password', () => {
        cy.get('#email-input')
            .type('test@mail.com')
        cy.get('#password-input')
            .type('123')
        cy.get('#logInButton')
            .click()
        cy.get('.alert-danger')
            .contains('Bad credentials, please try again')
    })

    it('Login page redirect to homepage after successful login', () => {
        cy.get('#email-input')
            .type('ringo@faros.be')
        cy.get('#password-input')
            .type('S&cret-10')
        cy.get('#logInButton')
            .click()
        cy.hash().should('eq', '')
        cy.get('#home-page-container')
            .contains('Welcome Ringo in our sandwichbar!')
    })
})