import shopPage from "../pageobjects/shopPage/index.js";
import productPage from "../pageobjects/productPage/index.js";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

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