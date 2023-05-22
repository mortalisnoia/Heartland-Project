import header from "../pageobjects/header/index.js";
import shopPage from "../pageobjects/shopPage/index.js";
import landingPage from "../pageobjects/landingPage/index.js";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("I am on the landing page", () => {
  landingPage.openLandingPage();
  landingPage.assertThisIsLandingPage();
})

When("I go to the Shop page", () => {
  header.clickMenuItemButton();
  header.clickShopButton();
})

Then("the list of products should appear", () => {
  shopPage.assertContentIsVisible();
  shopPage.clickOnProductByIndex(0);
})