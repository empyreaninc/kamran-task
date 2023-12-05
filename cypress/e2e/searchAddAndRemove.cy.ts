import homePage from "../integration/Amazon/homePage";
import productPage from "../integration/Amazon/productPage";
import resultsPage from "../integration/Amazon/resultsPage";
import cartPage from "../integration/Amazon/cartPage";
import * as data from '../fixtures/fixturevalues.json';


describe('test for search & basket functionality', () => {
    it('Searches for a product, adds to basket and removes from basket', () => {
        // Visit the page and open the hamburger menu
        homePage.visit();
        homePage.inputSearchTerm(data.searchTerm);

        // Open the Computers menu
        homePage.clickSearchButton();

        // Click on the Computer Components option
        resultsPage.clickFirstResult();

        productPage.addToCart();

        productPage.openCart();

        cartPage.removeFromCart();


        //confirm that the Amazon cart has had the products removed
        cy.contains('Your Amazon Cart is empty.').should('be.visible');

    });
});