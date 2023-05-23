import shopPage from "../pageobjects/shopPage/index.js";
import productPage from "../pageobjects/productPage/index.js";
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given("I am on the Shop page", () => {
    shopPage.openShopPage();
    shopPage.assertItIsShopPage();
})

When("I click on a product on sale", () => {
    shopPage.clickOnProductOnSale();
    
})

Then("Its sale price should be smaller than its old price", () => {
    productPage.assertSalePriceIsSmallerThanOldPrice();
})

When("I click on a product", () => {
    shopPage.clickOnProductByIndex(0);
})

And("It is out of stock", () => {
    productPage.assertProductIsOutOfStock();
})

Then("Add to Basket button should not be visible", () => {
    productPage.assertAddToCartButtonIsNotVisible();
})