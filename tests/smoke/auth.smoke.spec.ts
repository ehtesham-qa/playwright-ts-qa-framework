import { test } from '../../fixtures/test-fixtures';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Auth Smoke', () => {

  test('@smoke valid login', async ({ loggedInPage }) => {
    const login = new LoginPage(loggedInPage);
    await login.assertLoginSuccess();
  });

});
