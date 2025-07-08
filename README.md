
# Lean Tech Assignment - Playwright BDD Automation

This project uses [Playwright](https://playwright.dev/) and [Cucumber.js](https://cucumber.io/) for end-to-end testing in a BDD (Behavior-Driven Development) style, following the Page Object Model (POM) pattern.

## How to Run

1. Install dependencies:
  ```sh
  npm install
  ```

2. Run the BDD test suite:
  ```sh
  npm run test:bdd
  ```
  This will launch browsers in headed mode and execute the full checkout flow.

## Project Structure

- `features/` - Gherkin feature files and step definitions
- `pages/` - Page Object Model classes for each app page
- `package.json` - Project configuration and scripts
- `playwright.config.js` - Playwright configuration (if needed)

## Test Scenario Covered
- Login as a standard user
- Add 3 random products to the cart
- Complete the checkout process
- Assert order completion

