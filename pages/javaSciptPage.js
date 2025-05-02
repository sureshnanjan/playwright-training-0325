export class JavaScriptAlertsPage {
    constructor(page) {
      this.page = page;
      this.hrefValue = '/javascript_alerts';
      this.titleSelector = '.example h3';
      this.buttonSelector = 'button';
      this.resultSelector = '#result';
    }
  
    async navigate() {
      await this.page.goto('/');
      const component = await this.page.locator(`li a[href="${this.hrefValue}"]`);
      await component.click();
    }
  
    async getTitle() {
      return this.page.locator(this.titleSelector).textContent();
    }
  
    async getButtonCount() {
      return this.page.locator(this.buttonSelector).count();
    }
  
    async clickAlertButton() {
      await this.page.locator('button:has-text("Click for JS Alert")').click();
    }
  
    async clickConfirmButton() {
      await this.page.locator('button:has-text("Click for JS Confirm")').click();
    }
  
    async clickPromptButton() {
      await this.page.locator('button:has-text("Click for JS Prompt")').click();
    }
  
    async getResultText() {
      return this.page.locator(this.resultSelector).textContent();
    }
  }
  

  