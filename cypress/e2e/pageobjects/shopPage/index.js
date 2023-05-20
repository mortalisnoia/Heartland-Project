import { elements as shopPageElements } from './elements';

class shopPage {
    validateContentIsVisible() {
        cy.get(shopPageElements.content).should('be.visible');
    }

    clickAndroidCategoryButton() {
        cy.get(shopPageElements.androidCategoryButton).click();
    }

    clickHtmlCategoryButton() {
        cy.get(shopPageElements.htmlCategoryButton).click();
    }

    clickJsCategoryButton() {
        cy.get(shopPageElements.jsCategoryButton).click();
    }

    clickSeleniumCategoryButton() {
        cy.get(shopPageElements.seleniumCategoryButton).click();
    }

    validateContentFilterText(text) {
        cy.get(shopPageElements.contentFilterText).then(($text) => {
            expect($text).to.contain(text);
        })
    }

    clickProductDisplayedByIndex(index) {
        cy.get(shopPageElements.productDisplayed).eq(index);
    }
} export default new shopPage();