// Example of using the BasePage in a Page Object Model
import { BasePage } from "./base_page";
export class LoginPage extends BasePage {
    // Define selectors
    usernameInput = '#username';
    passwordInput = '#password';
    loginButton = 'button[type="submit"]';
    errorMessage = '.error-message';
  
    constructor(page) {
      super(page);
    }
  
    async login(username, password) {
      await this.navigateTo('/login');
      await this.fill(this.usernameInput, username);
      await this.fill(this.passwordInput, password);
      await this.click(this.loginButton);
      
      // Wait for navigation after login
      await this.waitForNetworkIdle();
    }
  
    async getErrorMessage() {
      if (await this.isElementExists(this.errorMessage)) {
        return await this.getText(this.errorMessage);
      }
      return '';
    }
  }