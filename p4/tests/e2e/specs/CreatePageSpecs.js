describe('CreatePage', () => {

    const post = {
        id: 11,
        date: "12/13/2018",
        title: "Philippines: La Mesa Eco Park",
        slug: "test-philippines-la-mesa-eco-park",
        shortDesc:
            "Two summers ago, I visited the Philippines and went to was the La Mesa Eco Park! There were so many things to do at the park. You can go fishing, ride a horse carriage, visit the Butterfly Haven, etc.",
        post:
            "I went on a zip line and I was really scared. I mean, if I were to fall, no one could save me! But honestly, it was so worth it, especially because of the view. I could see almost the entire park! The trees were so green and the flowers were blooming. And on my left, there was the LaMesa Dam, which was really really really pretty! I will never ever forget it this experience! It made me feel like I was flying... but in a sitting positing with my hands firmly holding on to the harness for my life!"
    }

    it('Visits the page and sees a form to create a post', () => {
        cy.visit('/create');
        cy.contains('h1', 'Grace\'s Blog');
        cy.contains('h4', 'Fill out the form below to create a post.')
        cy.get('.form-control').its('length').should('be.gte', 5);
    })

    it('Tries to save an invalid form to create a post', () => {
        cy.visit('/create');
        cy.contains('h1', 'Grace\'s Blog');
        cy.get('#title').type(post.title);
        cy.get('#date').type(post.date);
        cy.get('#slug').type("the-commons");
        cy.get('#shortDesc').type("Invalid ShortDesc");
        cy.contains('div', 'Please enter a valid answer.');

        cy.get('#saveBtn').click();

        // Indicates the the user did not get redirected
        cy.url().should('include', 'create')

    })

    it('Creates a new post successfully', () => {
        cy.visit('/create');
        cy.contains('h1', 'Grace\'s Blog');
        cy.get('#title').type(post.title);
        cy.get('#date').type(post.date);
        cy.get('#slug').type(post.slug);
        cy.get('#shortDesc').type(post.shortDesc);

        cy.get('#saveBtn').click();

        // Indicates the the user is redirected to see new post
        cy.url().should('include', post.slug)

        // home page includes the newly added post
        cy.get('#home').click();
        cy.get('.blogCard').contains(post.title);
    })
})
