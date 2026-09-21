Inventory Logic Flow

Task Description

Focus: Data validation, sorting algorithms, and state management.

Launch URL: https://www.saucedemo.com/

UC-1 Sorting Validation

Login with standard_user.
Select "Price (low to high)" from the sort dropdown.
Validation: Scrape the prices of all items on the page and programmatically verify that the array is sorted correctly in ascending order.

UC-2 Cart State Logic

Add two different items to the cart.
Verify the cart badge shows "2".
Remove one item via the "Remove" button on the Inventory page.
Verify the cart badge updates to "1".

Technical Requirements

Tool: WebDriverIO
Browsers: Firefox, Edge (Run in Parallel)
Pattern: Page Object Model (POM)
Locators: XPath (Focus on text-based selection)
Parametrization: Data Provider for the items being added/removed
Documentation: README.md explaining the sorting validation logic

Sorting Validation Logic

I got the prices from the page, forming an array with them. I removed the $ sign from all the prices in the array in order to compare
them properly as numbers. Once the sign was removed, I sorted a copy of the array in ascending order (from lowest to highest). If that
sorted copy matches the list of prices originally obtained from the page, it means the prices were already correctly sorted, and the
test passes successfully.
