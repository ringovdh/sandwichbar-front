describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Header has a title', () => {
        cy.get('.header')
            .get('h1')
            .contains('Faros Sandwich-bar')
    })


    it('Header has a Login button', () => {
        cy.get('.header')
            .get('.navbar-text li')
            .contains('Login')
    })

    it('Header has a (empty) Cart button', () => {
        cy.get('.header')
            .get('.navbar-text li button')
            .contains('Cart (0)')
    })

})

export {}