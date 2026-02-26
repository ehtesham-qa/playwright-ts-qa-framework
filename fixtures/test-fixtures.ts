import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../test-data/users.json';

type MyFixtures = {
  loggedInPage: any
}

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.login(users.valid.username, users.valid.password);
    await use(page);
  }
});

export { expect };
