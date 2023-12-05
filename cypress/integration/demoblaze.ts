class demoBlaze {
    visitDemoBlaze() {
        cy.visit('https://demoblaze.com')
    }
    //opens contact form from navbar
    clickContactForm() {
        cy.contains('Contact').click()
    }
    //fills email field
    fillEmail(formEmail) {
        cy.get('#recipient-email').click().type(formEmail)
    }
    //fills name field
    fillName(formName) {
        cy.get('#recipient-name').click().type(formName)
    }
    //fills message field
    fillMessage(formMessage) {
        cy.get('#message-text').click().type(formMessage)
    }




}

export default new demoBlaze();