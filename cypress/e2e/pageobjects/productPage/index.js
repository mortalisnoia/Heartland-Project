import { elements as productPageElements } from './elements';

class productPage {

    assertProductIsOutOfStock() {
        cy.get(productPageElements.stock).should('have.text', 'Out of stock');
    }

    //Since I can't access this part of the site, I'm assuming this would be the right selector for the add to cart button
    assertAddToCartButtonIsNotVisible() {
        cy.get(productPageElements.addToCartButton).should('not.exist');
    }

    //I get the String for the old price, remove the symbol, do the same for the new price and compare them
    assertSalePriceIsSmallerThanOldPrice() {
        cy.get(productPageElements.salePrice).invoke('text').invoke('replaceAll', '₹', '').then(parseFloat).then((salePrice) => {
            cy.get(productPageElements.oldPrice).invoke('text').invoke('replaceAll', '₹', '').then(parseFloat).then((oldprice) => {
                expect(oldprice).to.be.above(salePrice);
            })
        })
    }

    //Read the product category, inside de product details page
    getProductCategory() {
        cy.get(productPageElements.category)
    }

    assertProductCategoryIs(text) {
        cy.get(productPageElements.category).then(($text) => {
            expect($text).to.contain(text);
        })
    }

} export default new productPage();