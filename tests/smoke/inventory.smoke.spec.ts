import { test, expect } from '../../fixtures/test-fixtures';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Inventory Smoke', () => {

  test('@smoke inventory page loads after login', async ({ loggedInPage }) => {
    const login = new LoginPage(loggedInPage);

    // Optional: ensure we are logged in
    await login.assertLoginSuccess();

    // Check the inventory list is visible
    const inventoryList = loggedInPage.locator('.inventory_list');
    await expect(inventoryList).toBeVisible();

    // Check that at least one inventory item exists
    const items = loggedInPage.locator('.inventory_item');
    const count = await items.count();
    expect(count).toBeGreaterThan(0);

    // Optional: check the page title
    await expect(loggedInPage).toHaveTitle(/Swag Labs/);
  });

});
