// https://docs.cypress.io/api/introduction/api.html

describe('HomePage', () => {

    // Define test blog card details
    let blogDetails = {
        id: "2",
        slug: "the-commons",
        title: 'The Commons.',
        shortDesc: 'So when I first heard that LASO, a club at my school, was doing a skiing trip, I immediately signed up. I initially thought we’d go somewhere far from campus… but we went to the Commons, which is just behind Farley.'
    }

    it('Visits the page and sees that there are 10 blog cards', () => {
        cy.visit('/')
        cy.contains('h1', 'Grace\'s Blog')
        cy.get('.blogCard').its('length').should('be.gte', 10);
    })

    it('Clicks on a blog to read more', () => {
        cy.visit('/')

        // confirm that we can find the individual blog card
        cy.get('.blogCard').contains(blogDetails.title);
        cy.get('.blogCard').contains(blogDetails.shortDesc);

        cy.get('#the-commons #readMoreBtn').click();

        // confirm that url is updated and the blog post page displays 1 post
        cy.url().should('include', blogDetails.slug)
        cy.get('#blogPost').its('length').should('be.gte', 1);

        // User goes back to home page
        cy.get('#home').click();
        cy.get('.blogCard').its('length').should('be.gte', 10);
    })

    it('Adds a blog to favorites and visits the favorites page to confirm', () => {
        cy.visit('/')
        cy.get('.blogCard').its('length').should('be.gte', 10);

        // confirm that we can find the individual blog card
        cy.get('.blogCard').contains(blogDetails.title);
        cy.get('.blogCard').contains(blogDetails.shortDesc);

        cy.get('#the-commons #rightBtn').click();
        cy.get('#favorites').click();

        cy.get('#the-commons #rightBtn').contains("Remove from Favorites")

        cy.get('.blogCard').its('length').should('be.gte', 1);

        // User goes back to home page
        cy.get('#home').click();
        cy.get('.blogCard').its('length').should('be.gte', 10);
    })

    it('Removes a favorite post from the home page', () => {
        cy.visit('/')

        // clicks on right button (add to favorites)
        cy.get('#the-commons #rightBtn').click();

        // User goes back to favorites page
        cy.get('#favorites').click();

        // confirm that url is update and only 1 blog post is displayed
        cy.get('.blogCard').its('length').should('be.gte', 1);

        // User goes back to home page
        cy.get('#home').click();

        // clicks on right button (remove from favorites)
        cy.get('#the-commons #rightBtn').click();

        // User goes back to favorites page
        cy.get('#favorites').click();
        cy.contains('div', 'You do not have favorite posts.')
    })


})
