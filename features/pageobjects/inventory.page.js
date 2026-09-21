import { $, $$ } from '@wdio/globals'
import Page from './page.js';

class InventoryPage extends Page {
    get dropdownSort () {
        return $(`//select[@data-test='product-sort-container']`);
    }

    get itemPrices () {
        return $$(`//div[@data-test='inventory-item-price']`);
    }

    get cartBadge () {
        return $(`//span[@data-test='shopping-cart-badge']`);
    }

    async sortBy (optionText) {
        await this.dropdownSort.selectByVisibleText(optionText);
    }

    async getPrices () {
        const priceElements = [...(await this.itemPrices)];
        const prices = await Promise.all(priceElements.map(price => price.getText().then(text => parseFloat(text.replace('$', '')))));
        return prices;
    }

    productButton (productName) {
        return $(`//div[@data-test='inventory-item-name' and text()='${productName}']/ancestor::div[@class='inventory_item']//button`);
    }
}

export default new InventoryPage();