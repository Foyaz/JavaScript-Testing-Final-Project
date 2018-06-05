# Feed Reader Testing project

This projrct is originated from Front-End Web Developer Nanodegree in Udacity: 
wrote a number of tests against a pre-existing application with Jasmine.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers Wrote tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What did I learn?

I learn how to use Jasmine to Wrote a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests will give me the ability to quickly analyze whether new code breaks an existing feature within my codebase, without having to manually test all of the functionality.


# How did I complete this project?

Reviewed the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

Took the JavaScript Testing [course](https://www.udacity.com/course/ud549)

Downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).

Reviewed the functionality of the application within Ir browser.

Explored the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.

Explored the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).

Edited the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in Ir application.

![alt text](http://gifmaker.me/files/download/home/20180604/17/VTPbWHF1tIKRzb6au3DZX0/output_2xf8hE.gif)

Returned the `allFeeds` variable to a passing state.
Wrote a test that loops through each feed in the `allFeeds` object and ensured it has a URL defined and that the URL is not empty.

Wrote a test that loops through each feed in the `allFeeds` object and ensured it has a name defined and that the name is not empty.

Wrote a new test suite named `"The menu"`.

Wrote a test that ensured the menu element is hidden by default. I'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

Wrote a test that ensured the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

Wrote a test suite named `"Initial Entries"`.

Wrote a test that ensured when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

Wrote a test suite named `"New Feed Selection"`.

Wrote a test that ensured when a new feed is loaded by the `loadFeed` function that the content actually changes.

No test should be dependent on the results of another.
![alt text](http://gifmaker.me/files/download/home/20180604/17/CJ0H8MzrR6M5jiIjkNiKpO/output_ncYtYU.gif)

Callbacks were used to ensure that feeds are loaded before they are tested.

Wrote a README file detailing all steps required to successfully run the application. 
![alt text](http://gifmaker.me/files/download/home/20180604/17/jpiPSTBWTS5vDOqKFVvo7D/output_cRejIf.gif)
