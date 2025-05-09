// basePage.js
import { expect } from '@playwright/test';
import Logger from '../utilities/logger';

export class BasePageWithLogger {
  /**
   * Create a new BasePage instance
   * @param {import('@playwright/test').Page} page - Playwright page
   * @param {Logger} [logger] - Logger instance (optional)
   */
  constructor(page, logger = null) {
    this.page = page;
    this.timeout = 30000; // Default timeout in ms
    
    // Use provided logger or create default one
    this.logger = logger || new Logger({ 
      logLevel: 'info',
      console: true,
      file: true, 
      filePath: './logs/automation.log'
    });
    
    // Create context-specific logger
    this.log = this.logger.withContext(this.constructor.name);
    
    this.log.debug('Page object initialized');
  }

  /**
   * Navigate to a URL with timeout and wait until network is idle
   * @param {string} url - URL to navigate to
   */
  async navigateTo(url) {
    try {
      this.log.debug(`Navigating to: ${url}`);
      
      const startTime = Date.now();
      await this.page.goto(url, { 
        timeout: this.timeout,
        waitUntil: 'networkidle' 
      });
      
      const loadTime = Date.now() - startTime;
      this.log.info(`Navigated to: ${url} (${loadTime}ms)`);
    } catch (error) {
      this.log.error(`Failed to navigate to ${url}: ${error.message}`);
      await this.saveScreenshot(`navigate_error_${Date.now()}`);
      throw error;
    }
  }

  /**
   * Wait for an element to be visible and clickable, then click it
   * @param {string|import('@playwright/test').Locator} selector - Element selector or locator
   * @param {Object} options - Click options
   */
  async click(selector, options = { timeout: null }) {
    const selectorStr = typeof selector === 'string' ? selector : 'locator';
    try {
      const timeout = options.timeout || this.timeout;
      const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
      
      this.log.debug(`Clicking element: ${selectorStr}`);
      
      // Wait for element to be visible and enabled
      await element.waitFor({ state: 'visible', timeout });
      
      // Ensure element is ready to receive clicks
      await element.scrollIntoViewIfNeeded();
      await element.click({ timeout });
      
      this.log.info(`Clicked element: ${selectorStr}`);
    } catch (error) {
      this.log.error(`Failed to click element ${selectorStr}: ${error.message}`);
      await this.saveScreenshot(`click_error_${Date.now()}`);
      throw error;
    }
  }

  /**
   * Wait for an element to be visible and fill it with text
   * @param {string|import('@playwright/test').Locator} selector - Element selector or locator
   * @param {string} text - Text to fill
   * @param {Object} options - Fill options
   */
  async fill(selector, text, options = { timeout: null }) {
    const selectorStr = typeof selector === 'string' ? selector : 'locator';
    const displayText = text.length > 20 ? `${text.substring(0, 20)}...` : text;
    
    try {
      const timeout = options.timeout || this.timeout;
      const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
      
      this.log.debug(`Filling element ${selectorStr} with text: ${displayText}`);
      
      // Wait for element to be visible
      await element.waitFor({ state: 'visible', timeout });
      
      // Clear the field first
      await element.clear();
      
      // Fill the field
      await element.fill(text, { timeout });
      
      this.log.info(`Filled element ${selectorStr} with text: ${displayText}`);
    } catch (error) {
      this.log.error(`Failed to fill element ${selectorStr}: ${error.message}`);
      await this.saveScreenshot(`fill_error_${Date.now()}`);
      throw error;
    }
  }

  /**
   * Wait for element to be visible and get its text
   * @param {string|import('@playwright/test').Locator} selector - Element selector or locator
   * @param {Object} options - Options
   * @returns {Promise<string>} Element text
   */
  async getText(selector, options = { timeout: null }) {
    const selectorStr = typeof selector === 'string' ? selector : 'locator';
    
    try {
      const timeout = options.timeout || this.timeout;
      const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
      
      this.log.debug(`Getting text from element ${selectorStr}`);
      
      // Wait for element to be visible
      await element.waitFor({ state: 'visible', timeout });
      
      // Get text content
      const text = await element.textContent();
      const trimmedText = text?.trim() || '';
      
      const displayText = trimmedText.length > 20 ? `${trimmedText.substring(0, 20)}...` : trimmedText;
      this.log.info(`Got text from element ${selectorStr}: ${displayText}`);
      
      return trimmedText;
    } catch (error) {
      this.log.error(`Failed to get text from element ${selectorStr}: ${error.message}`);
      await this.saveScreenshot(`get_text_error_${Date.now()}`);
      throw error;
    }
  }

  /**
   * Save screenshot to file
   * @param {string} name - Screenshot name
   * @returns {Promise<string>} Screenshot path
   */
  async saveScreenshot(name) {
    try {
      const path = `./screenshots/${name}.png`;
      await this.page.screenshot({ path, fullPage: true });
      this.log.info(`Screenshot saved to: ${path}`);
      return path;
    } catch (error) {
      this.log.error(`Failed to take screenshot: ${error.message}`);
      return null;
    }
  }

  /**
   * Wait for network requests to complete
   * @param {Object} options - Wait options
   */
  async waitForNetworkIdle(options = { timeout: null }) {
    try {
      const timeout = options.timeout || this.timeout;
      this.log.debug('Waiting for network idle...');
      
      await this.page.waitForLoadState('networkidle', { timeout });
      
      this.log.info('Network is idle');
    } catch (error) {
      this.log.error(`Waiting for network idle failed: ${error.message}`);
      throw error;
    }
  }
  
  /**
   * Expect element to have specific attributes or state
   * @param {string|import('@playwright/test').Locator} selector - Element selector or locator
   * @param {string} assertion - Type of assertion
   * @param {Object} options - Assertion options
   */
  async expectElement(selector, assertion, options = { timeout: null }) {
    const selectorStr = typeof selector === 'string' ? selector : 'locator';
    
    try {
      const timeout = options.timeout || this.timeout;
      const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
      
      this.log.debug(`Expecting element ${selectorStr} to be ${assertion}`);
      
      switch (assertion) {
        case 'visible':
          await expect(element).toBeVisible({ timeout });
          break;
        case 'hidden':
          await expect(element).toBeHidden({ timeout });
          break;
        case 'enabled':
          await expect(element).toBeEnabled({ timeout });
          break;
        case 'disabled':
          await expect(element).toBeDisabled({ timeout });
          break;
        case 'checked':
          await expect(element).toBeChecked({ timeout });
          break;
        case 'unchecked':
          await expect(element).not.toBeChecked({ timeout });
          break;
        default:
          throw new Error(`Unknown assertion type: ${assertion}`);
      }
      
      this.log.info(`Element ${selectorStr} is ${assertion}`);
    } catch (error) {
      this.log.error(`Failed to verify element ${selectorStr} is ${assertion}: ${error.message}`);
      await this.saveScreenshot(`expect_error_${Date.now()}`);
      throw error;
    }
  }

  // Add wrapper methods for other UI operations, following the same pattern...
}

//export default BasePageWithLogger;