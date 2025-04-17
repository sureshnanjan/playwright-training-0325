import { test, expect } from '@playwright/test';

test.only('Dynamic content loading', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
  
  await page.getByRole('link', { name: 'Dynamic Loading' }).click();
  await expect(page).toHaveURL(/.*dynamic_loading/);
  
  await page.getByRole('heading', { name: 'Dynamically Loaded Page' }).click();
  await expect(page.locator('h3')).toHaveText('Dynamically Loaded Page Elements');
  
  await page.getByRole('link', { name: 'Example 1: Element on page' }).click();
  await expect(page).toHaveURL(/.*dynamic_loading\/1/);
  
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.locator('#loading')).toBeVisible();
  await page.waitForSelector('#finish'); // Wait for the element to load
  await expect(page.locator('#finish')).toHaveText('Hello World!');
  
  const page2Promise = page.waitForEvent('popup');
  await page.getByText('Powered by Elemental Selenium').click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL(/.*elementalselenium.com/);
  
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Multiple Windows' }).click();
  await expect(page).toHaveURL(/.*windows/);
  
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Click Here' }).click();
  const page3 = await page3Promise;
  await expect(page3).toHaveURL(/.*windows\/new/);
  await expect(page3.locator('h3')).toHaveText('New Window');  
 
});