import header from "../pageobjects/header/index.js";
import shopPage from "../pageobjects/shopPage/index.js";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("I am on the landing page", () => {
  cy.visit('/');
  cy.url().should('equal', Cypress.config().baseUrl)
})

When("I go to the Shop page", () => {
  header.clickMenuItemButton();
  header.clickShopButton();
})

Then("the list of products should appear", () => {
  shopPage.validateContentIsVisible();
  shopPage.clickHtmlCategoryButton();
  shopPage.validateContentFilterText('HTML');
  //expect(cy.get('.woocommerce-breadcrumb')).to.contain('HTML');
})