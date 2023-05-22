import shopPage from "../pageobjects/shopPage/index.js";
import productPage from "../pageobjects/productPage/index.js";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("I am on the Shop page", () => {
    shopPage.openShopPage();
    shopPage.assertItIsShopPage();
})

When("I filter for a product category", () => {
    shopPage.clickHtmlCategoryButton();
})

Then("The filter text should show contain category", () => {
    shopPage.assertContentIsVisible();
    shopPage.assertContentFilterTextContains('HTML');
})

Then("Should list products from this category", () => {
    shopPage.clickOnProductByIndex(0);
    productPage.assertProductCategoryIs('HTML');
})

Then("The number of products shown should be the same as the count on the filter", () => {
    shopPage.assertNumberOfProductsListedIsEqualToFilterCount();
})