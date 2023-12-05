import commitquality from "../integration/commitquality";
import demoblaze from "../integration/demoblaze";
import * as data from '../fixtures/fixturevalues.json';

describe('Cross domain testing', () => {
    it('Completes some actions on one site, changes site and continues to complete further actions', () => {
        commitquality.visitCQ();
        commitquality.visitCQ();
        commitquality.useFilterSearch(data.demoQaFilterValue);
        commitquality.clickFilterSearch();
        commitquality.getResults();
        commitquality.resetFilters();
        //"add product" should not be present
        cy.should('not.contain', '.add-product-message');;

        demoblaze.visitDemoBlaze();
        cy.origin('https://demoblaze.com', () => {
            cy.readFile('cypress/fixtures/fixturevalues.json').then((data) => {
                const demoblazePage = Cypress.require("../integration/demoblaze");

                cy.get('[data-target="#exampleModal"]').click();

                cy.get('#recipient-email').click({
                    force: true
                }).type(data.supportEmail)

                cy.get('#recipient-name').click({
                    force: true
                }).type(data.supportName)

                cy.get('#message-text').click({
                    force: true
                }).type(data.supportMessage)

                cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

                cy.on('window:alert', (str) => {
                    //page should alert with "Thanks for the message!!"
                    expect(str).to.equal('Thanks for the message!!')
                })
            })
        });
    })
});