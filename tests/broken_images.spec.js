import { test, expect } from '@playwright/test';

test('Broken Images Test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Broken Images' }).click();
  await page.getByRole('img').nth(1).click();
  await page.getByRole('heading', { name: 'Broken Images' }).click();
});