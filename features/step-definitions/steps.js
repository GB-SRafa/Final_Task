import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

Given(/^I am logged in as "(\w+)"$/, async (username) => {
    await LoginPage.open();
    await LoginPage.login(username, 'secret_sauce');
});

When(/^I sort the inventory by "(.*)"$/, async (sortOption) => {
    await InventoryPage.sortBy(sortOption);
});

Then(/^the prices should be displayed in ascending order$/, async () => {
    const prices = await InventoryPage.getPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    await expect(prices).toEqual(sorted);
});

When(/^I add "(.*)" to the cart$/, async (productName) => {
    await InventoryPage.productButton(productName).click();
});

Then(/^the cart badge should show "(.*)"$/, async (count) => {
    await expect(InventoryPage.cartBadge).toHaveText(count);
});

When(/^I remove "(.*)" from the cart$/, async (productName) => {
    await InventoryPage.productButton(productName).click();
});