import { elements as productPageElements } from './elements';

class productPage {

    assertProductIsOutOfStock() {
        cy.get(productPageElements.stock).should('have.text', 'Out of Stock');
    }

    assertAddToCartButtonIsNotVisible() {
        cy.get(productPageElements.addToCartButton).should('not.exist');
    }

    getProductOldPrice() {
        cy.get(productPageElements.oldPrice);
    }

    getProductSalePrice() {
        cy.get(productPageElements.salePrice);
    }

    getProductNormalPrice() {
        cy.get(productPageElements.normalPrice);
    }

    assertSalePriceIsSmallerThanOldPrice() {
        const salePrice = "";
        const oldPrice = "";
        this.getProductSalePrice.should(($salePrice) => {
            salePrice = $salePrice.text();
        })
        this.getProductOldPrice.should(($oldPrice) => {
            oldPrice = $oldPrice.text();
        })
        salePrice.then(parseFloat).should('be.lessThan', oldPrice.then(parseFloat));
    }

    getProductCategory() {
        cy.get(productPageElements.category)
    }

    assertProductCategoryIs(text) {
        cy.get(productPageElements.category).then(($text) => {
            expect($text).to.contain(text);
        })
    }

} export default new productPage();