class landingPage {

    openLandingPage() {
        //by using just '/', Cypress goes to the baseUrl stores on its configuration file
        cy.visit('/');
    }

    assertThisIsLandingPage() {
        //Get the browser URL and compare with the stored URL on the Cypress configuration file
        cy.url().should('equal', Cypress.config().baseUrl);
    }

    assertProductsAreShown() {
        //Verify if the main column of content exists and if there is product inside it
        cy.get('.tb-column-inner').should('exist');
        cy.get('*[class^="col3-1"]').should('exist');
    }

} export default new landingPage();