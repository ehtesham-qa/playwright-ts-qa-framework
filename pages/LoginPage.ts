import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  async gotoLogin() {
    await this.goto('/');
  }

  async login(username: string, password: string) {
    await this.type('#user-name', username);
    await this.type('#password', password);
    await this.click('#login-button');
  }

  async assertLoginSuccess() {
    await this.page.waitForSelector('.inventory_list');
  }

  async assertLoginErrorContains(text: string) {
    await this.page.waitForSelector('[data-test="error"]');
    const error = await this.page.textContent('[data-test="error"]');
    if (!error?.includes(text)) {
      throw new Error(`Expected error to contain: ${text}, but got: ${error}`);
    }
  }
}
