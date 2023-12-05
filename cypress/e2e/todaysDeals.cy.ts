import homePage from "../integration/Amazon/homePage";
import productPage from "../integration/Amazon/productPage";
import resultsPage from "../integration/Amazon/resultsPage";
import todaysDealsShop from "../integration/Amazon/todaysDealsShop";
import cartPage from "../integration/Amazon/cartPage";
import loginPage from "../integration/Amazon/loginPage";
import checkoutPage from "../integration/Amazon/checkoutPage"
import * as data from '../fixtures/fixturevalues.json';



describe('Todays deals carting & checkout flow test', () => {
    it('Adds item to cart from todays deals and proceeds until payment is required.', () => {
//Change index of selectProductChild if test fails, likely is taking you to a page with no cartable product
        homePage.visit();
        homePage.clickTodaysDeals();
        todaysDealsShop.selectProductCategory(2);
        //checks for add to cart button and skips child product page click if found
        cy.get('#add-to-cart-button').should('exist').then(($btn) => {
            if ($btn.length > 0) {
              console.log("No secondary product page")
            } else {
                todaysDealsShop.selectProductChild(0);
            }
          })
            
       

        // Check for the presence of the error message
        //const errorMessageExists = cy.contains('This item cannot be shipped to your selected delivery location. Please choose a different delivery location').should('exist');

        // If your products are showing incompatible shipping due to location, enable the zip code changer.
        //productPage.changeZipCode()
        //cy.reload();




        productPage.addToCart()
        cartPage.proceedToCheckout();

        loginPage.enterEmail(data.email);
        loginPage.proceedToPassword();
        loginPage.enterPassword(data.password);
        loginPage.proceedWithlogin();

        cy.get('[data-testid="Address_selectShipToThisAddress"]').then(($element) => {
            if ($element.length > 0) {
                checkoutPage.clickUseThisAddress();
            } else {
                checkoutPage.chooseCountry(data.countryID);
                checkoutPage.enterFullName(data.fullName);
                checkoutPage.enterStreetAddress(data.street);
                checkoutPage.enterBuildingNumber(data.street2);
                checkoutPage.enterCity(data.city);
                checkoutPage.enterState(data.State);
                checkoutPage.enterZipCode(data.Zip);
                checkoutPage.enterPhoneNumber(data.Phone);
                checkoutPage.clickUseThisAddress();
            }

        });
        //Verify end of checkout reached using unique text
        cy.contains('Your available balance').should('be.visible');

    })
});;