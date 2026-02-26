import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  async getInventoryItemsCount() {
    return await this.page.locator('.inventory_item').count();
  }
}
