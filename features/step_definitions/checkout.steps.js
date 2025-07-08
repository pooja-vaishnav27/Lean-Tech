const { Given, When, Then, Before, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

setDefaultTimeout(60 * 1000);

let browser, context, page;
let inventoryPage;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
});

Given('I am logged in as a standard user', async function () {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  inventoryPage = new InventoryPage(page);
});

When('I add 3 random products to the cart', async function () {
  await inventoryPage.addRandomProducts(3);
});

When('I complete the checkout process', async function () {
  await inventoryPage.gotoCart();
  const cartPage = new CartPage(page);
  await cartPage.verifyItems(inventoryPage.selectedNames);
  await cartPage.checkout();
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillDetails('Test', 'User', '12345');
  await checkoutPage.finishCheckout();
  this.checkoutPage = checkoutPage;
});

Then('I should see a confirmation that my order was successful', async function () {
  await this.checkoutPage.verifyOrderSuccess();
  await browser.close();
});
