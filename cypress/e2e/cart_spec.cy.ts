describe('Cart', () => {
    beforeEach(() => {
        cy.login()
        cy.get('#cart-link').click()
    })

    it('Cart has a title', () => {
        cy.get('#cart-container')
            .get('h2')
            .contains('Cart')
    })

})

export {}