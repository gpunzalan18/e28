// https://docs.cypress.io/api/introduction/api.html

describe('HomePage', () => {

    // Define test blog card details
    let post = {
        id: "2",
        slug: "the-commons",
        title: 'The Commons.',
        shortDesc: 'So when I first heard that LASO, a club at my school, was doing a skiing trip, I immediately signed up. I initially thought we’d go somewhere far from campus… but we went to the Commons, which is just behind Farley.',
        post: "At first, I was sad because I really wanted to go off campus for the trip. But looking back, I was really glad I went. I learned that putting on skis could actually be complicated, especially when there’s ice stuck inside. If that ever happens, pour some hot water on it! I fell a lot of times and even crashed into a tree. But it’s okay. It was all part of the experience!"
    }

    it('Visits the page and sees that there are 10 blog cards', () => {
        cy.visit('/')
        cy.contains('h1', 'Grace\'s Blog')
        cy.get('.blogCard').its('length').should('be.gte', 10);
    })

    it('Clicks on a blog to read more', () => {
        cy.visit('/')

        // confirm that we can find the individual blog card
        cy.get('.blogCard').contains(post.title);
        cy.get('.blogCard').contains(post.shortDesc);

        cy.get('#the-commons #readMoreBtn').click();

        // confirm that url is updated and the blog post page displays 1 post
        cy.url().should('include', post.slug)
        cy.get('#blogPost').its('length').should('be.gte', 1);
        cy.get('#blogPost').contains(post.title);
        cy.get('#blogPost').contains(post.shortDesc);
        cy.get('#blogPost').contains(post.post);

    })

    it('Adds a blog to favorites and visits the favorites page to confirm', () => {
        cy.visit('/')
        cy.get('.blogCard').its('length').should('be.gte', 10);

        // Add to favorites
        cy.get('#the-commons #rightBtn').click();
        cy.get('#favorites').click();

        cy.get('#the-commons #rightBtn').contains("Remove from Favorites")

        cy.get('.blogCard').its('length').should('be.gte', 1);
        cy.get('.blogCard').contains(post.title);
        cy.get('.blogCard').contains(post.shortDesc);
    })

    it('Removes a favorite post from the home page', () => {
        cy.visit('/')

        // clicks on right button (add to favorites)
        cy.get('#the-commons #rightBtn').click();

        // confirm that url is update and only 1 favorite blog card is displayed 
        cy.get('#favorites').click();
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
