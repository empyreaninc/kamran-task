class commitQuality {
    visitCQ() {
        cy.visit('https://www.commitquality.com')
    }
    //fills filter value into filter field
    useFilterSearch(filterString) {
        cy.get('.filter-textbox').click().type(filterString)
    }
    //initiates search with filter
    clickFilterSearch() {
        cy.get('[data-testid="filter-button"]').click()
    }
    //checks results on page
    getResults() {
        cy.get('.add-product-message').should('include.text', 'No products found')
    }
    //resets filters
    resetFilters() {
        cy.get('[data-testid="reset-filter-button"]').click()
    }



}

export default new commitQuality();