// https://docs.cypress.io/api/introduction/api.html

describe('HomePage', () => {

    // Define test blog card details
    let blogDetails = {
        imageId: 2,
        id: "the-commons",
        title: 'The Commons.',
        shortDesc: 'So when I first heard that LASO, a club at my school, was doing a skiing trip, I immediately signed up. I initially thought we’d go somewhere far from campus… but we went to the Commons, which is just behind Farley.'
    }

    it('Visits the homepage', () => {
        cy.visit('/')

        // page displays the header
        cy.contains('h1', 'Grace\'s Blog')

        // confirm that there are 10 blog cards
        cy.get('.blogCard').its('length').should('be.gte', 10);

        // confirm that we can find the individual blog card
        cy.get('.blogCard').contains(blogDetails.title);
        cy.get('.blogCard').contains(blogDetails.shortDesc);

        // clicks on read more button and
        cy.get('#the-commons #readMoreBtn').click();

        // confirm that url is update and only 1 blog post is displayed
        cy.url().should('include', blogDetails.imageId)
        cy.get('#blogPost').its('length').should('be.gte', 1);

        // User goes back to home page
        cy.get('#home').click();
        cy.get('.blogCard').its('length').should('be.gte', 10);
    })


})
