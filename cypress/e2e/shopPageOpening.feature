Feature: Opening the shop page

  Scenario: As a user, I want to open the shop page and see the products

    Given I am on the landing page
    When I go to the Shop page
    Then the list of products should appear