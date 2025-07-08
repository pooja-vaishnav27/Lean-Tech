const { expect } = require('@playwright/test');

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.productCards = page.locator('.inventory_item');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addRandomProducts(count) {
    const products = await this.productCards.elementHandles();
    expect(products.length).toBeGreaterThanOrEqual(count);
    const indices = this.getRandomIndices(products.length, count);
    this.selectedNames = [];
    for (const idx of indices) {
      const product = products[idx];
      const name = await product.$eval('.inventory_item_name', el => el.textContent.trim());
      this.selectedNames.push(name);
      const addToCartBtn = await product.$('button[data-test^="add-to-cart"]');
      await addToCartBtn.click();
    }
  }

  getRandomIndices(length, count) {
    const indices = new Set();
    while (indices.size < count) {
      indices.add(Math.floor(Math.random() * length));
    }
    return Array.from(indices);
  }

  async gotoCart() {
    await this.cartLink.click();
    await expect(this.page).toHaveURL(/cart/);
  }
}

module.exports = { InventoryPage };
