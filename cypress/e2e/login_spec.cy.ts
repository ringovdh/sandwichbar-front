const auth_domain = 'http://127.0.0.1:9000';
const login_button ='input#submit';

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#login-link').click()
    })

    it('Login page contains title', () => {
        cy.origin(auth_domain, () => {
            cy.get('body').get('.login').contains('Login')
        })
    })

    it('Login page contains register link', () => {
        cy.origin(auth_domain, () => {
            cy.get('.registration').contains('Are you new?')
                .get('a')
                .should('have.attr', 'href')
                .and('contain', '/registration')
        })
    })

   it('Login page requires email', () => {
        cy.origin(auth_domain, () => {
            cy.get('input#password').type('S&cret-10')
            cy.get('input#submit').click()
            cy.get('.error').contains('Invalid email and password.')
        })
    })

   it('Login page requires password', () => {
        cy.origin(auth_domain, () => {
            cy.get('input#username').type('ringo@faros.be')
            cy.get('input#submit').click()
            cy.get('.error').contains('Invalid email and password.')
        })
    })

   it('Login page requires correct username and password', () => {
        cy.origin(auth_domain, () => {
            cy.get('input#username').type('ringo@faros.be')
            cy.get('input#password').type('S&cret-11')
            cy.get('input#submit').click()
            cy.get('.error').contains('Invalid email and password.')
        })
    })

   it('Login page redirect to homepage after successful login', () => {
        cy.origin(auth_domain, () => {
            cy.get('input#username').type('ringo@faros.be')
            cy.get('input#password').type('S&cret-10')
            cy.get('input#submit').click()
        })
        cy.hash().should('eq', '')
        cy.get('#home-page-container')
            .contains('Welcome in our sandwichbar!')
    })
})