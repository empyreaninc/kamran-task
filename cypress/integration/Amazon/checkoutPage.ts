import {
    cli
} from "cypress";

class checkoutPage {
    //open country selection drop down
    openCountryDropdown() {
        cy.get('#address-ui-widgets-countryCode > .a-button-inner > .a-button-text').click({
            force: true
        });
    }
    //choose country value 0-245
    chooseCountry(countryID) {
        cy.get(`#a-popover-3 > .a-popover-wrapper > .a-popover-inner > .a-nostyle > [aria-labelledby="address-ui-widgets-countryCode-dropdown-nativeId_231"] > #address-ui-widgets-countryCode-dropdown-nativeId_${countryID}`)
            .click()
    }
    //enters full name value
    enterFullName(fullName) {
        cy.get('#address-ui-widgets-enterAddressFullName').click().type(fullName)
    }
    //enters street address value
    enterStreetAddress(streetAddress) {
        cy.get('#address-ui-widgets-enterAddressLine1').click().type(streetAddress)
    }
    //enters building number
    enterBuildingNumber(buildingNumber) {
        cy.get('#address-ui-widgets-enterAddressLine2').click().type(buildingNumber)
    }
    //enters city
    enterCity(city) {
        cy.get('#address-ui-widgets-enterAddressCity').click().type(city)
    }
    //enters state
    enterState(state) {
        cy.get('#address-ui-widgets-enterAddressStateOrRegion').click().type(state)
    }
    //enters zipcode
    enterZipCode(zipCode) {
        cy.get('#address-ui-widgets-enterAddressStateOrRegion').click().type(zipCode)
    }
    //enters phone num
    enterPhoneNumber(phoneNumber) {
        cy.get('#address-ui-widgets-enterAddressPhoneNumber').click().type(phoneNumber)
    }
    //clicks 'use this address' button
    clickUseThisAddress() {
        cy.get('[data-testid="Address_selectShipToThisAddress"]').click();

    }
}

export default new checkoutPage();