import { test } from '../../fixtures/test-fixtures';
import { LoginPage } from '../../pages/LoginPage';
import users from '../../test-data/users.json';

test.describe('Auth Negative', () => {

  test('@regression invalid password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.login(users.invalid.username, users.invalid.password);
    await login.assertLoginErrorContains('Username and password do not match');
  });

  test('@regression locked user', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.login(users.locked.username, users.locked.password);
    await login.assertLoginErrorContains('locked out');
  });

  test('@regression empty submit', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.click('#login-button');
    await login.assertLoginErrorContains('Username is required');
  });

});
