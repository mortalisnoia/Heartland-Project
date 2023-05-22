import { elements as shopPageElements } from './elements';

class shopPage {
    assertContentIsVisible() {
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

    assertContentFilterTextContains(text) {
        cy.get(shopPageElements.contentFilterText).then(($text) => {
            expect($text).to.contain(text);
        })
    }

    openShopPage() {
        cy.visit('/shop')
    }

    assertItIsShopPage() {
        cy.url().should('contain', "shop");
    }

    clickOnProductByIndex(index) {
        cy.get(shopPageElements.productExternalDiv).find(shopPageElements.product).eq(index).click();
    }

    getNumberOfProductsShown() {
        cy.get(shopPageElements.productExternalDiv).find(shopPageElements.product);
    }

    clickOnProductOnSale(){
        cy.get(shopPageElements.productOnSale).eq(0).click();
    }

    assertNumberOfProductsListedIsEqualToFilterCount() {
        cy.get(shopPageElements.filterCount).invoke('text')
            .invoke('replaceAll', '(', '')
            .invoke('replaceAll', ')', '')
            .then((filterCount) => {
                cy.get(shopPageElements.productExternalDiv).find(shopPageElements.product).should('have.length', filterCount)
        })
        
    }

} export default new shopPage();