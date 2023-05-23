Feature: Clicking on a Product on sale and checking its old and current price

    Scenario: As a user, when I click on a product on sale, new price should be less than old price

        Given I am on the Shop page
        When I click on a product on sale
        Then Its sale price should be smaller than its old price

    Scenario: Can not add to basket an Out of stock product

        Given I am on the Shop page
        When I click on a product
        And It is out of stock
        Then Add to Basket button should not be visible