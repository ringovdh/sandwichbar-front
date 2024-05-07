describe('Cart', () => {
    beforeEach(() => {
        cy.login()
        cy.wait(1000)
        cy.get('#cart-link').click()
    })

    it('Cart has a title', () => {
        cy.get('#cart-container')
            .get('h2')
            .contains('Cart')
    })

})