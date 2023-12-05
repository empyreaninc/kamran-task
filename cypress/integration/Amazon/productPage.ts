import {
    cli
} from "cypress";

class productPage {




    addToCart() {
        //cy.get('#dealsx_atc_btn').click()
        cy.get('#add-to-cart-button').should('be.enabled').click({
            force: true
        })
    }
    //clicks "delete" button for item in cart
    removeFromCart() {
        cy.get('.sc-action-delete > .a-declarative > .a-color-link').click({
            force: true
        })
    }
    //goes to cart page
    openCart() {
        cy.get('.nav-cart-icon').click({
            force: true
        })
    }
    //changes zip code from address section in top left
    changeZipCode() {
        cy.get('#nav-global-location-data-modal-action').click()
        cy.get('#GLUXZipUpdateInput').type('90210')
        cy.get('#GLUXZipUpdate').click()
        // cy.get('.a-popover-footer > .a-declarative > .a-button > .a-button-inner > .a-button-text').click()
        cy.get('.a-popover-footer > .a-button').click()

    }
}
export default new productPage();