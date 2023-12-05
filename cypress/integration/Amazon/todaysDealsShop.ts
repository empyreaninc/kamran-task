class todaysDealsPage {
    //selects a product category to visit
    selectProductCategory(index) {

        cy.get('.DealGridItem-module__dealItemDisplayGrid_e7RQVFWSOrwXBX4i24Tqg').eq(index).scrollIntoView().click();
    }
    //select child product from section
    selectProductChild(index) {
        cy.get(`[data-testid="grid-deals-container"] > :nth-child(${index})`).click();
    }


}

export default new todaysDealsPage();