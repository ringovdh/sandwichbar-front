describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Homepage has a welcome text', () => {
        cy.get('#home-page-container')
            .contains('Welcome in our sandwichbar!')
    })

    it('Homepage has a menucard', () => {
        cy.get('#menucard')
            .contains('Menucard')
    })

    it('Click on item, add an item to cart', () => {
        cy.get('#menucard')
            .get('#add-to-cart-button-5').click()
        cy.get('.header')
            .get('.navbar-text li button')
            .contains('Cart (1)')
    })

})

export {}