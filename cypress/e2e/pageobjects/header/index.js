import { elements as headerElements } from './elements';

class header{

    clickShopButton() {
        cy.get(headerElements.shopButton).click();
    }

    clickMyAccountButton() {
        cy.get(headerElements.myAccountButton).click();
    }

    clickTestCasesButton() {
        cy.get(headerElements.testCasesButton).click();
    }

    clickAtSiteButton() {
        cy.get(headerElements.atSiteButton).click();
    }

    clickDemoSiteButton() {
        cy.get(headerElements.demoSiteButton).click();
    }

    clickCartButton() {
        cy.get(headerElements.cartButton).click();
    }

    getNumberOfItemsOnCart() {
        return cy.get(headerElements.cartButton).text();
    }

    clickMenuItemButton() {
        cy.get(headerElements.menuIconButton).click();
    }
} export default new header();