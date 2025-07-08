const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('.complete-header');
  }

  async fillDetails(first, last, postal) {
    await this.firstNameInput.fill(first);
    await this.lastNameInput.fill(last);
    await this.postalCodeInput.fill(postal);
    await this.continueButton.click();
    await expect(this.page).toHaveURL(/checkout-step-two/);
  }

  async finishCheckout() {
    await this.finishButton.click();
    await expect(this.page).toHaveURL(/checkout-complete/);
  }

  async verifyOrderSuccess() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}

module.exports = { CheckoutPage };
