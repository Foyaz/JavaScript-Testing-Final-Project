/* 
feedreader.js 
*/

$(function() {

    //first test suite
    describe('RSS Feeds', function() {
        //allFeeds variable has been defined 
        it('are defined', function() {
            //checks if allFeeds variable has been defined
            expect(allFeeds).toBeDefined();
            //checks if feed length is not empty
            expect(allFeeds.length).not.toBe(0);
        });
        //loops through each feed in the allFeeds object that has an url
        it('should loop through each feed in the allFeeds, have a defined URL', function() {
            allFeeds.forEach(function(feed) {
                //checks if URL is defined
                expect(feed.url).toBeDefined();
                //checks if URL is not empty 
                expect(feed.url.length).not.toBe(0);
            });
        });
        //loops through each feed in the allFeed has a defined name
        it('should loop through each feed in the allFeeds,have a defined name', function() {
            allFeeds.forEach(function(feed) {
                //checks if name is defined
                expect(feed.name).toBeDefined();
                //checks if name is not defined or not an empty string
                expect(feed.name.length).not.toBe('');
            });
        });
    });

    //the 2nd test suit
    describe('The menu', function() {
        it('is hidden by default', function() {
            let body = document.querySelector('body');
            //checks if menu-hidden is hidden by default
            expect(body.getAttribute('menu-hidden')).toBeDefined(true);
        });
        it('changes visibility on click', function() {
            let body = document.querySelector('body');
            let menu = document.querySelector('.menu-icon-link');
            menu.click();
            //checks if menu-hidden is false when clicked the first time
            expect(body.getAttribute('menu-hidden')).toBeDefined(false);
            menu.click();
            //checks if menu-hidden is true when clicked the second time
            expect(body.getAttribute('menu-hidden')).toBeDefined(true);
        });
    });
    
    //3rd test suit
    describe('Initial Entries', function() {
        //calls the loadfeed function
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('are present', function() {
            let feedEntry = document.querySelector('.feed .entry');
            //expects that there is at least one entry
            expect(feedEntry.getAttribute.length).toBeGreaterThan(0);
        });

    });

    // 4th test suit
    describe('New Feed Selection', function() {
        let oldFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = document.querySelector('.feed');
                loadFeed(1, done);
            });
        });

        it('is different from old', function() {
            let newFeed = document.querySelector('.feed')
            // checks the new Url does not match the Url of the previous feed
            expect(document.newFeed).not.toBe(oldFeed);
        });
    });
}());