import { elements as shopPageElements } from './elements';

class shopPage {

    //Verify if the div that contains all the products is displayed
    assertContentIsVisible() {
        cy.get(shopPageElements.content).should('be.visible');
    }

    //Click to filter by Android category
    clickAndroidCategoryButton() {
        cy.get(shopPageElements.androidCategoryButton).click();
    }

    //Click to filter by HTML category
    clickHtmlCategoryButton() {
        cy.get(shopPageElements.htmlCategoryButton).click();
    }

    //Click to filter by JavaScript category
    clickJsCategoryButton() {
        cy.get(shopPageElements.jsCategoryButton).click();
    }

    //Click to filter by Selenium category
    clickSeleniumCategoryButton() {
        cy.get(shopPageElements.seleniumCategoryButton).click();
    }

    //Get the text from the filter and check if it is the same selected
    assertContentFilterTextContains(text) {
        cy.get(shopPageElements.contentFilterText).then(($text) => {
            expect($text).to.contain(text);
        })
    }

    openShopPage() {
        cy.visit('/shop')
    }

    //Verify if I'm on the current url
    assertItIsShopPage() {
        cy.url().should('contain', "shop");
    }

    //Click on any product by passing the index. First product is index=0
    clickOnProductByIndex(index) {
        cy.get(shopPageElements.productExternalDiv).find(shopPageElements.product).eq(index).click();
    }

    //Return the number of products shown
    getNumberOfProductsShown() {
        cy.get(shopPageElements.productExternalDiv).find(shopPageElements.product);
    }

    //Search for the "Sale" symbol and click on the product that contains it
    clickOnProductOnSale(){
        cy.get(shopPageElements.productOnSale).eq(0).click();
    }

    //Get the count of the filter on the left of the screen, than counts the number of elements shown and compare them
    assertNumberOfProductsListedIsEqualToFilterCount() {
        cy.get(shopPageElements.filterCount).invoke('text')
            .invoke('replaceAll', '(', '')
            .invoke('replaceAll', ')', '')
            .then((filterCount) => {
                cy.get(shopPageElements.productExternalDiv).find(shopPageElements.product).should('have.length', filterCount)
        })
        
    }

} export default new shopPage();