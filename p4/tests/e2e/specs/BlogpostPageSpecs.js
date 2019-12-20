describe('BlogpostPage', () => {

    // Define test blog card details
    let blogDetails = {
        id: "2",
        slug: "the-commons",
        title: 'The Commons.',
        shortDesc: 'So when I first heard that LASO, a club at my school, was doing a skiing trip, I immediately signed up. I initially thought we’d go somewhere far from campus… but we went to the Commons, which is just behind Farley.',
        post: "At first, I was sad because I really wanted to go off campus for the trip. But looking back, I was really glad I went. I learned that putting on skis could actually be complicated, especially when there’s ice stuck inside. If that ever happens, pour some hot water on it! I fell a lot of times and even crashed into a tree. But it’s okay. It was all part of the experience!"
    }

    it('Visits the page and sees a blog post', () => {
        cy.visit('/blogpost/' + blogDetails.slug);
        cy.contains('h1', 'Grace\'s Blog');
        cy.get('#blogPost').its('length').should('be.gte', 1);
    })

    it('Visits the page and sees a favorite blog post', () => {
        cy.visit('/')
        cy.get('.blogCard').its('length').should('be.gte', 10);

        // confirm that we can find the individual blog card on home page
        cy.get('.blogCard').contains(blogDetails.title);
        cy.get('.blogCard').contains(blogDetails.shortDesc);

        cy.get('#the-commons #rightBtn').click();
        cy.get('#the-commons #readMoreBtn').click();

        // confirm that we can find entire blog post
        cy.get('#blogPost').its('length').should('be.gte', 1);
        cy.get('#blogPost').contains(blogDetails.title);
        cy.get('#blogPost').contains(blogDetails.shortDesc);
        cy.get('#blogPost').contains(blogDetails.post);

        // indicated that the post is already a favorite
        cy.contains('Remove from Favorites');
    })

    it('Confirms that a favorited post gets added to favorites page', () => {
        cy.visit('/blogpost/' + blogDetails.slug);

        cy.get('#blogPost').its('length').should('be.gte', 1);

        cy.get('#blogPost').contains(blogDetails.title);
        cy.get('#blogPost').contains(blogDetails.shortDesc);
        cy.get('#blogPost').contains(blogDetails.post);

        // add to favorites
        cy.get('#favoritesBtn').click();
        cy.get('.page').contains('Remove from Favorites');

        cy.get('#favorites').click();

        // confirm that url is update and only 1 blog post is displayed
        cy.url().should('include', 'favorites')
        cy.get('.blogCard').contains(blogDetails.title);
        cy.get('.blogCard').contains(blogDetails.shortDesc);
    });

    it('Confirms that a post on the page can be removed from favorites', () => {
        cy.visit('/blogpost/' + blogDetails.slug);

        cy.get('#blogPost').its('length').should('be.gte', 1);

        // confirm that we can find the individual blog card
        cy.get('#blogPost').contains(blogDetails.title);
        cy.get('#blogPost').contains(blogDetails.shortDesc);

        // clicks on favoritesBtn (add to favorites)
        cy.get('#favoritesBtn').click();
        cy.get('.page').contains('Remove from Favorites');

        // clicks on favoritesBtn (remove from favorites)
        cy.get('#favoritesBtn').click();
        cy.get('.page').contains('Add to Favorites');
    })
})
