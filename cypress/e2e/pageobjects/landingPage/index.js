class landingPage {

    openLandingPage() {
        cy.visit('/');
    }

    assertThisIsLandingPage() {
        cy.url().should('equal', Cypress.config().baseUrl);
    }

    assertProductsAreShown() {
        //Verify if the main column of content exists and if there is product inside it
        cy.get('.tb-column-inner').should('exist');
        cy.get('*[class^="col3-1"]').should('exist');
    }

} export default new landingPage();