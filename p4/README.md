# Project 4
+ By: Grace Punzalan
+ Production URL: <https://p4.singlepage.tech/>

## Improvements based on P3 peer review feedback
- Peer reviewer was confused with the purpose of `session.js.` I had created a class called `LocalStorageHandler` to take care of localStorage related processing.

## Outline of features
- Pages:
    - Home page that shows a list of blog summaries
    - Favorites page that shows a list of favorite blog summaries
    - Blog post page that shows individual blog posts
    - A create page that shows a form to create a nwe blog post
    - A PageNotFout for any unrecognized url patterns

- Functionalities:
    - Navigation bar to toggle between home and favorites pages
    - Add to favorites (via home and blog post pages)
    - Remove from favorites (via all three pages)
    - Form validation using Vuelidate
    - Save new post (using Firebase)


## Outside resources
- [P3 outside resources](https://github.com/gpunzalan18/e28/tree/master/p3)
- Bootstrap CSS
    - [Form Examples](https://getbootstrap.com/docs/3.4/css/#forms-example)
    - [Disabling Buttons](https://getbootstrap.com/docs/4.0/components/buttons/)
- Issues
    - [Converting session.js to LocalStorageHandler class](https://stackoverflow.com/questions/14432165/uncaught-syntaxerror-unexpected-token-with-json-parse)
    - [Issue when I first ran Cypress; needed to reinstall Cypress](https://github.com/cypress-io/cypress/issues/4625)
        ```
        Verifying Cypress can run /Library/Caches/Cypress/3.8.0/Cypress.app
        → Cypress Version: 3.8.0
        Cypress verification timed out.

        This command failed with the following output:

        /Library/Caches/Cypress/3.8.0/Cypress.app/Contents/MacOS/Cypress --no-sandbox --smoke-test --ping=792
        ```
        
    - [Custom Regex Matcher](https://github.com/vuelidate/vuelidate/issues/89)
    - [Initial Build Failure on Netlify](https://github.com/susanBuck/e28-fall19/issues/163)
        ```
        6:20:17 PM: > vue-cli-service build
        6:20:18 PM: -  Building for production...
        6:20:29 PM:  ERROR  Failed to compile with 1 errors11:20:29 PM
        6:20:29 PM: This dependency was not found:
        6:20:29 PM: * vuex in ./src/store/index.js
        6:20:29 PM: To install it, you can run: npm install --save vuex
        6:20:29 PM:  ERROR  Build failed with errors.
        ```
- JavaScript
    - [Using .replace()](https://www.w3schools.com/jsref/jsref_replace.asp)
    - [Basic Regex](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)
    - [For of Loop Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iterationnp)
    - [Math.random()](https://www.w3schools.com/jsref/jsref_random.asp)
- Input Validation
    - [Date Regex](https://www.regextester.com/99555)
    - [Vuelidate - Regex Validators](https://vuelidate.js.org/#sub-regex-based-validator)

- Content & Images
    - [My old tumblr account](https://spraysomegrace.tumblr.com/)

## Notes for instructor
- When creating a new post, you can use the following:
    -  Title, Date, Slug
        ```
        date: "12/13/2018",
        title: "Philippines: La Mesa Eco Park",
        slug: "philippines-la-mesa-eco-park",
        ```
    - `A Snippet: `
        ```
        "Two summers ago, I visited the Philippines and went to was the La Mesa Eco Park! There were so many things to do at the park. You can go fishing, ride a horse carriage, and visit the Butterfly Haven!"
        ```
    - `Remaining Content`
        ```
        "I went on a zip line and I was really scared. I mean, if I were to fall, no one could save me! But honestly, it was so worth it, especially because of the view. I could see almost the entire park! The trees were so green and the flowers were blooming. And on my left, there was the LaMesa Dam, which was really really really pretty! I will never ever forget it this experience! It made me feel like I was flying... but in a sitting positing with my hands firmly holding on to the harness for my life!"
        ```
- Please note that when a user saves a new post, the associated the image is randomly selected in the backgound to maintain consistency. 
- Additionally, I am using only one firebase server, which means that testing is using the same one. You can find the corresponing test for this in `CreatePageSpec.js`. 
