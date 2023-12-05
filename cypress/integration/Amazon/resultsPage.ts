import {
  cli
} from "cypress";

class resultsPage {


  //clicks first available result
  clickFirstResult() {
      cy.get('[data-index="4"]').find('a').first().click();
  }




}

export default new resultsPage();