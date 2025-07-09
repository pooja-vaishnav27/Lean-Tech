# Test Suite Setup and Execution

### Overview

This project uses Playwright and Cucumber.js for BDD-style end-to-end testing, following the Page Object Model (POM) pattern. It also integrates `cucumber-html-reporter` for generating user-friendly HTML reports.

### Prerequisites

- Node.js and npm installed
- Chrome/Chromium browser installed

### Setup

1. **Install dependencies:**
  ```sh
  npm install
  ```

2. **Project Structure:**
  - `features/` — Gherkin feature files and step definitions
  - `pages/` — Page Object Model classes
  - `generate-cucumber-report.js` — Script to generate HTML report
  - `playwright.config.js` — Playwright configuration

### Running Tests

1. **Execute the BDD test suite and generate a report:**
  ```sh
  npx cucumber-js --format json:cucumber_report.json
  node generate-cucumber-report.js
  ```
  - This will run all Cucumber scenarios and generate a `cucumber_report.json` file.
  - The `generate-cucumber-report.js` script will convert this JSON into a user-friendly HTML report.

2. **View the HTML report:**
  - Open `cucumber_report.html` in your browser to see the test results.

### Reporting

- The framework uses [cucumber-html-reporter](https://www.npmjs.com/package/cucumber-html-reporter).
- Report metadata (browser, platform, environment, etc.) is configured in `generate-cucumber-report.js`.

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

