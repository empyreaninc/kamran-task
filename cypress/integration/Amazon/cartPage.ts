import {
    cli
} from "cypress";

class cartPage {
    //get and click remove from cart button
    removeFromCart() {
        cy.get('.sc-action-delete > .a-declarative > .a-color-link').click({
            force: true
        })
    }
    //get and click proceed to checkout button
    proceedToCheckout() {
        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
    }

}

export default new cartPage();