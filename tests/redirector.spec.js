import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Redirect Link' }).click();
  await page.getByRole('heading', { name: 'Redirection' }).click();
  await page.getByText('This is separate from').click();
  await page.locator('div').filter({ hasText: 'Powered by Elemental Selenium' }).nth(1).click();
});