import * as allure from "allure-js-commons";
/**
 * BasePage class with wrapper methods for common UI operations
 * using Playwright's API and proper wait strategies
 */
export class BasePage {
  page;
  timeout = 30000; // Default timeout in ms

  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a URL with timeout and wait until network is idle
   */
  async navigateTo(url) {
    await allure.startStep(`Navigate to ${url}`);
    try {
      await this.page.goto(url, { 
        timeout: this.timeout,
        waitUntil: 'networkidle' 
      });
      console.log(`Navigated to: ${url}`);
      //await allure.
    } catch (error) {
      console.error(`Failed to navigate to ${url}: ${error}`);
      throw error;
    }
  }

  /**
   * Wait for an element to be visible and clickable, then click it
   */
  async click(selector, options = { timeout: this.timeout }) {
    try {
      const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
      
      // Wait for element to be visible and enabled
      await element.waitFor({ state: 'visible', timeout: options.timeout });
      
      // Ensure element is ready to receive clicks
      await element.scrollIntoViewIfNeeded();
      await element.click({ timeout: options.timeout });
      
      console.log(`Clicked element: ${typeof selector === 'string' ? selector : 'locator'}`);
    } catch (error) {
      console.error(`Failed to click element ${typeof selector === 'string' ? selector : 'locator'}: ${error}`);
      throw error;
    }
  }

  /**
   * Wait for an element to be visible and fill it with text
   */
  async fill(selector, text, options = { timeout: this.timeout }){
    try {
      const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
      
      // Wait for element to be visible
      await element.waitFor({ state: 'visible', timeout: options.timeout });
      
      // Clear the field first
      await element.clear();
      
      // Fill the field
      await element.fill(text, { timeout: options.timeout });
      
      console.log(`Filled element ${typeof selector === 'string' ? selector : 'locator'} with text: ${text}`);
    } catch (error) {
      console.error(`Failed to fill element ${typeof selector === 'string' ? selector : 'locator'}: ${error}`);
      throw error;
    }
  }

  /**
   * Wait for an element to be visible and select an option from a dropdown
   */
  async selectOption(selector, option, 
                    options = { timeout: this.timeout }) {
    try {
      const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
      
      // Wait for element to be visible
      await element.waitFor({ state: 'visible', timeout: options.timeout });
      
      // Select the option
      const result = await element.selectOption(option, { timeout: options.timeout });
      
      console.log(`Selected option in element ${typeof selector === 'string' ? selector : 'locator'}`);
      return result;
    } catch (error) {
      console.error(`Failed to select option in element ${typeof selector === 'string' ? selector : 'locator'}: ${error}`);
      throw error;
    }
  }

  /**
   * Wait for element to be visible and get its text
   */
  async getText(selector, options = { timeout: this.timeout })
  {
    try {
      const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
      
      // Wait for element to be visible
      await element.waitFor({ state: 'visible', timeout: options.timeout });
      
      // Get text content
      const text = await element.textContent();
      
      console.log(`Got text from element ${typeof selector === 'string' ? selector : 'locator'}: ${text}`);
      return text?.trim() || '';
    } catch (error) {
      console.error(`Failed to get text from element ${typeof selector === 'string' ? selector : 'locator'}: ${error}`);
      throw error;
    }
  }

  /**
   * Wait for element to exist in DOM
   * : 'attached' | 'detached' | 'visible' | 'hidden' = 'visible'
   */
  async waitForElement(selector, state, 
                      options = { timeout: this.timeout }) {
    try {
      const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
      
      await element.waitFor({ state, timeout: options.timeout });
      
      console.log(`Element ${typeof selector === 'string' ? selector : 'locator'} is now ${state}`);
    } catch (error) {
      console.error(`Waiting for element ${typeof selector === 'string' ? selector : 'locator'} to be ${state} failed: ${error}`);
      throw error;
    }
  }

  /**
   * Wait for a specific condition to be true
   */
  async waitForCondition(conditionFn, 
                        options = { timeout: this.timeout, pollingInterval: 100 }) {
    const startTime = Date.now();
    
    while (Date.now() - startTime < options.timeout) {
      if (await conditionFn()) {
        console.log('Condition met');
        return;
      }
      
      await this.page.waitForTimeout(options.pollingInterval);
    }
    
    throw new Error(`Condition not met within timeout: ${options.timeout}ms`);
  }

  /**
   * Wait for network requests to complete
   */
  async waitForNetworkIdle(options = { timeout: this.timeout, idleTime: 500 }) {
    try {
      await this.page.waitForLoadState('networkidle', { timeout: options.timeout });
      console.log('Network is idle');
    } catch (error) {
      console.error(`Waiting for network idle failed: ${error}`);
      throw error;
    }
  }

  /**
   * Expect element to have specific attributes or state
   * 'visible' | 'hidden' | 'enabled' | 'disabled' | 'checked' | 
   * 'unchecked',
   */
  async expectElement(selector, 
                     assertion ,
                     options = { timeout: this.timeout }) {
    
    try {
      const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
      
      switch (assertion) {
        case 'visible':
          await expect(element).toBeVisible({ timeout: options.ti,meout });
          break;
        case 'hidden':
          await expect(element).toBeHidden({ timeout: options.timeout });
          break;
        case 'enabled':
          await expect(element).toBeEnabled({ timeout: options.timeout });
          break;
        case 'disabled':
          await expect(element).toBeDisabled({ timeout: options.timeout });
          break;
        case 'checked':
          await expect(element).toBeChecked({ timeout: options.timeout });
          break;
        case 'unchecked':
          await expect(element).not.toBeChecked({ timeout: options.timeout });
          break;
      }
      
      console.log(`Element ${typeof selector === 'string' ? selector : 'locator'} is ${assertion}`);
    } catch (error) {
      console.error(`Failed to verify element ${typeof selector === 'string' ? selector : 'locator'} is ${assertion}: ${error}`);
      throw error;
    }
  }

  /**
   * Check if element exists
   */
  async isElementExists(selector, options = { timeout: 5000 }) {
    try {
      const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
      
      await element.waitFor({ state: 'attached', timeout: options.timeout });
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Upload a file
   */
  async uploadFile(selector, filePath, 
                  options = { timeout: this.timeout }) {
    try {
      const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
      
      // Wait for the element to be visible
      await element.waitFor({ state: 'visible', timeout: options.timeout });
      
      // Upload the file
      await element.setInputFiles(filePath, { timeout: options.timeout });
      
      console.log(`Uploaded file: ${filePath}`);
    } catch (error) {
      console.error(`Failed to upload file to element ${typeof selector === 'string' ? selector : 'locator'}: ${error}`);
      throw error;
    }
  }

  /**
   * Handle dialogs (alert, confirm, prompt)
   * Call this before triggering action that causes dialog
   */
  async handleDialog(accept, promptText) {
    this.page.once('dialog', async dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      
      if (promptText) {
        await dialog.accept(promptText);
      } else if (accept) {
        await dialog.accept();
      } else {
        await dialog.dismiss();
      }
    });
  }
}

