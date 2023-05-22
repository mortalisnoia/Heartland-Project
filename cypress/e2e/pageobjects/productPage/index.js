import { elements as productPageElements } from './elements';

class productPage {

    assertProductIsOutOfStock() {
        cy.get(productPageElements.stock).should('have.text', 'Out of Stock');
    }

    assertAddToCartButtonIsNotVisible() {
        cy.get(productPageElements.addToCartButton).should('not.exist');
    }

    assertSalePriceIsSmallerThanOldPrice() {
        cy.get(productPageElements.salePrice).invoke('text').invoke('replaceAll', '₹', '').then(parseFloat).then((salePrice) => {
            cy.get(productPageElements.oldPrice).invoke('text').invoke('replaceAll', '₹', '').then(parseFloat).then((oldprice) => {
                expect(oldprice).to.be.above(salePrice);
            })
        })
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