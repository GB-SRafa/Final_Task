Feature: Add and remove items from cart

  Scenario Outline: Shopping cart
    Given I am logged in as "standard_user"
    When I add "<item1>" to the cart
    And I add "<item2>" to the cart
    Then the cart badge should show "2"
    When I remove "<item1>" from the cart
    Then the cart badge should show "1"

    Examples:
      | item1                | item2                  |
      | Sauce Labs Backpack  | Sauce Labs Bike Light  |