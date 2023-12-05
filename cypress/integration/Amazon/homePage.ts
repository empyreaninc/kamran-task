class homePage {
  visit() {
      cy.visit('https://www.amazon.com/cybermonday?ref_=nav_cs_td_cm_dt_cr');
  }
  //click login button
  accountLogin() {
      cy.get('#nav-link-accountList').click();
  }
  //open hamburger menu
  openHamburgerMenu() {
      cy.get('.hm-icon').click({
          force: true
      });
  }
  //open computers section in menu
  openComputersMenu() {
      cy.contains('Computers').click({
          force: true
      });
  }
  //visit computer components section from menu
  visitComputerComponents() {
      cy.contains('Computer Components').click({
          force: true
      });;
  }
  //type search term into search box
  inputSearchTerm(searchTerm) {
      cy.get('#twotabsearchtextbox').type(searchTerm)
  }
  //submit search term
  clickSearchButton() {
      cy.get('#nav-search-submit-button').click();
  }
  //open 'todays deals' section
  clickTodaysDeals() {
      cy.contains("Today's Deals").click({
          force: true
      });
  }

}

export default new homePage();