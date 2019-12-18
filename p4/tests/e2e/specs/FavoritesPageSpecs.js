describe('FavoritesPage', () => {

    // Define test blog card details
    let blogDetails = {
        imageId: 2,
        id: "the-commons",
        title: 'The Commons.',
        shortDesc: 'So when I first heard that LASO, a club at my school, was doing a skiing trip, I immediately signed up. I initially thought we’d go somewhere far from campus… but we went to the Commons, which is just behind Farley.'
    }
    it('Visits the page with no favorite posts', () => {
        cy.visit('/favorites');
        cy.url().should('include', 'favorites')
        cy.contains('div', 'You do not have favorite posts.')
    })

    it('Confirms that a favorite post gets added on the page', () => {
        cy.visit('/')

        // page displays the header
        cy.contains('h1', 'Grace\'s Blog')

        // confirm that there are 10 blog cards
        cy.get('.blogCard').its('length').should('be.gte', 10);

        // confirm that we can find the individual blog card
        cy.get('.blogCard').contains(blogDetails.title);
        cy.get('.blogCard').contains(blogDetails.shortDesc);

        // clicks on right button (add to favorites)
        cy.get('#the-commons #rightBtn').click();

        // User goes back to favorites page
        cy.get('#favorites').click();

        // confirm that url is update and only 1 blog post is displayed
        cy.url().should('include', 'favorites')
        cy.get('.blogCard').its('length').should('be.gte', 1);

        // User goes back to home page
        cy.get('#home').click();
        cy.get('.blogCard').its('length').should('be.gte', 10);
    })

    it('Clicks on a favorite blog to read more', () => {
        cy.visit('/')

        // page displays the header
        cy.contains('h1', 'Grace\'s Blog')

        // confirm that there are 10 blog cards
        cy.get('.blogCard').its('length').should('be.gte', 10);

        // confirm that we can find the individual blog card
        cy.get('.blogCard').contains(blogDetails.title);
        cy.get('.blogCard').contains(blogDetails.shortDesc);

        // clicks on right button (add to favorites)
        cy.get('#the-commons #rightBtn').click();

        cy.get('#favorites').click();

        // clicks on right button (add to favorites)
        cy.get('#the-commons #readMoreBtn').click();

        // confirm that url is update and only 1 blog post is displayed
        cy.url().should('include', blogDetails.imageId)
        cy.get('#blogPost').its('length').should('be.gte', 1);

        // User goes back to home page
        cy.get('#favorites').click();
        cy.get('.blogCard').its('length').should('be.gte', 1);
    })

    it('Removes a favorite post from the page', () => {
        cy.visit('/')

        // clicks on right button (add to favorites)
        cy.get('#the-commons #rightBtn').click();

        // User goes back to favorites page
        cy.get('#favorites').click();

        // confirm that url is update and only 1 blog post is displayed
        cy.get('.blogCard').its('length').should('be.gte', 1);

        // clicks on right button (remove from favorites)
        cy.get('#the-commons #rightBtn').click();

        // User goes back to favorites page
        cy.contains('div', 'You do not have favorite posts.')
    })


})