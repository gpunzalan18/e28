describe('PageNotFound', () => {

    it('Visits a page that does not exist', () => {
        cy.visit('/fakePage');
        cy.contains('h1', 'Grace\'s Blog');
        cy.contains('h4', 'Sorry, we could not find this site');
    })
})