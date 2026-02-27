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


GitHub: https://github.com/ehtesham-qa