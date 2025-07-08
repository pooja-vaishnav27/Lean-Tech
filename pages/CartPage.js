const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async verifyItems(expectedNames) {
    const items = await this.cartItems.allTextContents();
    for (const name of expectedNames) {
      expect(items.some(item => item.includes(name))).toBeTruthy();
    }
    expect(items.length).toBe(expectedNames.length);
  }

  async checkout() {
    await this.checkoutButton.click();
    await expect(this.page).toHaveURL(/checkout-step-one/);
  }
}

module.exports = { CartPage };
