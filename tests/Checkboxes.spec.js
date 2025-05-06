import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.locator('li').filter({ hasText: 'Checkboxes' }).click();
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  await page.getByRole('heading', { name: 'Checkboxes' }).click();
  await page.getByText('checkbox 1 checkbox').click();
  await page.getByRole('checkbox').first().check();
  //await page.getByRole('checkbox').nth(1).uncheck();
});