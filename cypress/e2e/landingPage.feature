Feature: Opening the browser

  Scenario: As a user, I can open the site

    Given I am on the landing page
    When I go to the Shop page
    Then the list of products should appear