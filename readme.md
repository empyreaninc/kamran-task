# Kamran Lautier Automation Suite Example

Browser automation framework for testing cross domain & a few features on Amazon.com US.


Page object model utilised to maintain readability and clarity.

All login details & test data can be filled in the fixturevalues.json file.

All tests have supporting assertions to validate success or failure.

If your products are showing incompatible shipping due to location, enable the zip code changer in todaysDeals.cy.

There are many product combinations and some are incompatble with the todaysDeals test I was able to produce within the time limit, so please change the indexes on these if need be.

Open the folder in your preferred IDE.

## Make sure you have Cypress & Mocha installed. If not, you can install it with:

npm install -g cypress

npm install -g mocha
## Run Tests using

npm run test

Your test runs from terminal headless(default) should produce a full mocha test report. 

There are many product combinations and some are incompatble with the todaysDeals test I was able to produce within the time limit, so please change the indexes on these if need be.
