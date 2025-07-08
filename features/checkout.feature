Feature: Sauce Demo Checkout
  As a user
  I want to be able to select 3 random items and complete the checkout flow
  So that I can verify the happy path for purchasing products

  Scenario: Successful checkout with 3 random items
    Given I am logged in as a standard user
    When I add 3 random products to the cart
    And I complete the checkout process
    Then I should see a confirmation that my order was successful
