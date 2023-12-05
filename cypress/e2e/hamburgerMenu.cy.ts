import homePage from "../integration/Amazon/homePage";
import loginPage from "../integration/Amazon/loginPage";

describe('Hamburger Menu Search', () => {
    it('Opens hamburger menu, opens computers menu, clicks computer components option, and asserts the selection', () => {

        homePage.visit();


        homePage.openHamburgerMenu();


        homePage.openComputersMenu();


        homePage.visitComputerComponents();

        //check we have arrived in the correct department
        return cy.get('select[aria-describedby="searchDropdownDescription"]')
            .should('contain', 'Computer Components');
    });
});