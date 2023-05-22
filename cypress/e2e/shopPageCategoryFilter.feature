Feature: Filtering by a product category and checking filter text

    Scenario: As a user, I want to filter for a category and see the category I am filtering for

        Given I am on the Shop page
        When I filter for a product category
        Then The filter text should show contain category

    Scenario: As a user, I want to filter by a product category and see only items that match my filtering

        Given I am on the Shop page
        When I filter for a product category
        Then Should list products from this category