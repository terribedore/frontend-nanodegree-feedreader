/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page? ME: I get a '1 spec, 1 failures'!
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined', function() {
          for (let i = 0; i < allFeeds.length; i++) { // loops through feed
            expect(allFeeds[i].url).toBeDefined();  // has a url
            expect(allFeeds[i].url.length).not.toBe(0); // url is not empty
          }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function() {
          for (let i = 0; i < allFeeds.length; i++) { // loops through feed
            expect(allFeeds[i].name).toBeDefined(); // has a name
            expect(allFeeds[i].name.length).not.toBe(0); // name is not empty
          }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu toggles on icon click', function() {
            const menuIcon = document.querySelector('.menu-icon-link');

            // first click, menu should be visible
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // second click, menu should be hidden
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) { // opens async call. This spec will not
         // start until the `done` function is called in the call to
         // `beforeEach` above.
           loadFeed(0, done);
        });

        it('min 1 entry in feed', function (done) {
            const entry = document.getElementsByClassName('entry');
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done(); // closes async call. This spec will not complete until its
            // `done` is called.
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */

}());
