import {
  cli
} from "cypress";

class loginPage {



  //enters email into field
  enterEmail(email) {
      cy.get('#ap_email').click({
          force: true
      }).type(email)
  }
  //submits email to proceed to password entry
  proceedToPassword() {
      cy.get('.a-button-inner > #continue').click({
          force: true
      });
  }
  //enters password
  enterPassword(password) {
      cy.get('#ap_password').click({
          force: true
      }).type(password)
  }
  //submits password to proceed with login
  proceedWithlogin() {
      cy.get('#signInSubmit').click({
          force: true
      })
  }

}

export default new loginPage();