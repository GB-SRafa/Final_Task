Feature: Inventory sorting

  Scenario: Sort items by price ascending
    Given I am logged in as "standard_user"
    When I sort the inventory by "Price (low to high)"
    Then the prices should be displayed in ascending order