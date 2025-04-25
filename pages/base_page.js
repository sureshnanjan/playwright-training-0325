// BasePage.js
export class BasePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate(url) {
      await this.page.goto(url);
    }
  
    async waitForElement(selector) {
      await this.page.waitForSelector(selector);
    }
  
    async getElementText(selector) {
      await this.waitForElement(selector);
      return await this.page.$eval(selector, el => el.textContent.trim());
    }
  
    async click(selector) {
      await this.waitForElement(selector);
      await this.page.click(selector);
    }
  
    async fill(selector, text) {
      await this.waitForElement(selector);
      await this.page.fill(selector, text);
    }
  }
   
  