describe('FavoritesPage', () => {

    // Define test blog card details
    let post = {
        id: "2",
        slug: "the-commons",
        title: 'The Commons.',
        shortDesc: 'So when I first heard that LASO, a club at my school, was doing a skiing trip, I immediately signed up. I initially thought we’d go somewhere far from campus… but we went to the Commons, which is just behind Farley.',
        post: "At first, I was sad because I really wanted to go off campus for the trip. But looking back, I was really glad I went. I learned that putting on skis could actually be complicated, especially when there’s ice stuck inside. If that ever happens, pour some hot water on it! I fell a lot of times and even crashed into a tree. But it’s okay. It was all part of the experience!"
    }

    it('Visits the page with no favorite posts', () => {
        cy.visit('/favorites');
        cy.contains('h1', 'Grace\'s Blog')
        cy.url().should('include', 'favorites')
        cy.contains('div', 'You do not have favorite posts.')
    })

    it('Confirms that a favorite post gets added on the page', () => {
        cy.visit('/')

        // confirm that we can find the individual blog card
        cy.get('.blogCard').contains(post.title);
        cy.get('.blogCard').contains(post.shortDesc);

        // clicks on right button to add to favorites
        cy.get('#the-commons #rightBtn').click();

        // User goes back to favorites page
        cy.get('#favorites').click();

        // confirm that url is update and only 1 blog post is displayed
        cy.url().should('include', 'favorites')
        cy.get('.blogCard').its('length').should('be.gte', 1);
        cy.get('.blogCard').contains(post.title);
        cy.get('.blogCard').contains(post.shortDesc);

        // User goes back to home page
        cy.get('#home').click();
        cy.get('.blogCard').its('length').should('be.gte', 10);
    })

    it('Clicks on a favorite blog to read more', () => {
        cy.visit('/')

        // Add post to favorites
        cy.get('#the-commons #rightBtn').click();

        cy.get('#favorites').click();

        // clicks to read more
        cy.get('#the-commons #readMoreBtn').click();

        // confirm that url is update and only 1 blog post is displayed
        cy.url().should('include', post.slug)
        cy.get('#blogPost').its('length').should('be.gte', 1);
        cy.get('#blogPost').contains(post.title);
        cy.get('#blogPost').contains(post.shortDesc);
        cy.get('#blogPost').contains(post.post);

        // User goes back to home page
        cy.get('#favorites').click();
        cy.get('.blogCard').its('length').should('be.gte', 1);
    })

    it('Removes a favorite post from the page', () => {
        cy.visit('/')

        // add to favorites
        cy.get('#the-commons #rightBtn').click();

        cy.get('#favorites').click();

        // confirm that url is update and only 1 blog post is displayed
        cy.get('.blogCard').its('length').should('be.gte', 1);
        cy.get('.blogCard').contains(post.title);
        cy.get('.blogCard').contains(post.shortDesc);

        // remove from favorites
        cy.get('#the-commons #rightBtn').click();

        // User goes back to favorites page
        cy.contains('div', 'You do not have favorite posts.')
    })


})