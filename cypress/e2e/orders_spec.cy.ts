describe('Orders', () => {
    beforeEach(() => {
        cy.login()
        cy.wait(1000)
        cy.get('#orders-link').click()
    })

    it('Orders has a title', () => {
        cy.get('#orders-page-container')
            .get('h2')
            .contains('My Orders')
    })

    it('Orders has a list of orders', () => {
        cy.get('#orders-table')
            .get('#orders-table-body')
    })

})