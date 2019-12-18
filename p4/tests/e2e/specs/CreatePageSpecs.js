// https://docs.cypress.io/api/introduction/api.html

describe('CreatePage', () => {

    // Define test blog card details
    // let blogDetails = {
    //     imageId: 2,
    //     id: "the-commons",
    //     title: 'The Commons.',
    //     shortDesc: 'So when I first heard that LASO, a club at my school, was doing a skiing trip, I immediately signed up. I initially thought we’d go somewhere far from campus… but we went to the Commons, which is just behind Farley.'
    // }

    it('Visits the page and sees a form to create a post', () => {
        cy.visit('/create');
        cy.contains('h1', 'Grace\'s Blog');
        cy.contains('h3', 'Fill out the form below to create a post.')
        cy.get('.form-control').its('length').should('be.gte', 5);
    })

    it('cancels creating a post and is redirected to home page', () => {
        cy.visit('/create');
        cy.get('.form-control').its('length').should('be.gte', 5);
        cy.get('#cancelBtn').click();

        cy.url().should('be', '/')
    })
})
