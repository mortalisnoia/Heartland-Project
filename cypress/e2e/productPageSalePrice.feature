Feature: Clicking on a Product on sale and checking its old and current price

    Scenario: As a user, when I click on a product on sale, it must have a smaller price than before

        Given I am on the Shop page
        When I click on a product on sale
        Then Its sale price should be smaller than its old price