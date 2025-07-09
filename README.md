
# Lean Tech Assignment - Playwright BDD Automation

This project uses [Playwright](https://playwright.dev/) and [Cucumber.js](https://cucumber.io/) for end-to-end testing in a BDD (Behavior-Driven Development) style, following the Page Object Model (POM) pattern.

## How to Run

1. Install dependencies:
  ```sh
  npm install
  ```


2. Run the BDD test suite and generate a report:
  ```sh
  npx cucumber-js --format json:cucumber_report.json
  node generate-cucumber-report.js
  ```
  This will execute the tests and generate a detailed HTML report at `cucumber_report.html`.

3. Open the HTML report:
   - Double-click `cucumber_report.html` in your project folder, or open it in your browser to view the results.

## Project Structure

- `features/` - Gherkin feature files and step definitions
- `pages/` - Page Object Model classes for each app page
- `package.json` - Project configuration and scripts
- `playwright.config.js` - Playwright configuration (if needed)
- `generate-cucumber-report.js` - Script to generate Cucumber HTML report
- `cucumber_report.html` - Generated HTML report after test execution

## Test Scenario Covered
- Login as a standard user
- Add 3 random products to the cart
- Complete the checkout process
- Assert order completion

## Reporting

This framework uses [cucumber-html-reporter](https://www.npmjs.com/package/cucumber-html-reporter) to generate a user-friendly HTML report from the Cucumber test results. After running the tests, open `cucumber_report.html` to view the results.

