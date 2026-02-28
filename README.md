# Playwright TypeScript QA Framework

A scalable and maintainable UI automation framework using **Playwright** with **TypeScript**. Built with real-world QA practices, including **Page Object Model**, reusable methods, JSON-driven test data, and custom fixtures for fast authenticated tests. Supports **smoke and regression suites**, **cross-browser execution**, and **HTML reporting**.

## Key Features

- Clean Page Object Model structure  
- Reusable methods for easy maintenance  
- JSON-driven test data for flexibility  
- Custom fixtures for logged-in pages  
- Smoke & regression test suites  
- Cross-browser support (Chromium, Firefox)  
- HTML reports for test results

## Run Tests

Install dependencies:  
```bash
npm install

Install browsers:

npx playwright install


Run all tests:

npx playwright test


Run smoke tests only:

npx playwright test --grep @smoke


View HTML report:

npx playwright show-report

Allure report
npm run report


Make sure Allure CLI is installed (npm install -D allure-commandline) and your tests generate results in allure-results/.

Scripts

For convenience, these scripts are defined in package.json:

"scripts": {
  "test": "playwright test",
  "report": "npx allure serve allure-results"
}


npm run test → Runs all tests

npm run report → Generates and serves Allure report


GitHub: https://github.com/ehtesham-qa
