describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#login-link').click()
    })

    it('Login page contains title', () => {
        cy.origin('https://sandwichbar.eu.auth0.com', () => {
            cy.get('header').get('h1').contains('Welcome')
        })
    })

    it('Login page contains register link', () => {
        cy.origin('https://sandwichbar.eu.auth0.com', () => {
            cy.contains('Sign up')
                .should('have.attr', 'href')
                .and('contain', '/u/signup?state=')
        })
    })

    it('Login page requires email', () => {
        cy.origin('https://sandwichbar.eu.auth0.com', () => {
            cy.get('input#password').type('S&cret-10')
            cy.get('button[name=action]').click()
            cy.get('input:invalid').should('have.length', 1)
            cy.get('#username').then(($input) => {
                expect($input[0].validationMessage).to.eq('Please fill out this field.')
            })
        })
    })

    it('Login page requires password', () => {
        cy.origin('https://sandwichbar.eu.auth0.com', () => {
            cy.get('input#username').type('ringo@faros.be')
            cy.get('button[name=action]').click()
            cy.get('input:invalid').should('have.length', 1)
            cy.get('#password').then(($input) => {
                expect($input[0].validationMessage).to.eq('Please fill out this field.')
            })
        })
    })

    it('Login page requires correct username and password', () => {
        cy.origin('https://sandwichbar.eu.auth0.com', () => {
            cy.get('input#username').type('ringo@faros.be')
            cy.get('input#password').type('S&cret-11')
            cy.get('button[name=action]').click()
            cy.get('input:invalid').should('have.length', 1)
            cy.get('#error-element-password').contains('Wrong email or password')
        })
    })

    it('Login page redirect to homepage after successful login', () => {
        cy.origin('https://sandwichbar.eu.auth0.com', () => {
            cy.get('input#username').type('ringo@faros.be')
            cy.get('input#password').type('S&cret-10')
            cy.get('button[name=action]').click()
        })
        cy.hash().should('eq', '')
        cy.get('#home-page-container')
            .contains('Welcome in our sandwichbar!')
    })
})