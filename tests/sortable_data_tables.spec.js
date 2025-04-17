import { test, expect } from '@playwright/test';

test('Sortable data tables TC', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Sortable Data Tables' }).click();
  await page.getByRole('heading', { name: 'Data Tables' }).click();
  await page.getByText('Often times when you see a').click();
  await page.getByRole('heading', { name: 'Example 1' }).click();
  await page.locator('#table1').getByRole('link', { name: 'edit' }).first().click();
  await page.getByRole('heading', { name: 'Example 2' }).click();
  await page.locator('#table2').getByRole('cell', { name: 'fbach@yahoo.com' }).click();
  await page.locator('#table2').getByRole('cell', { name: 'http://www.timconway.com' }).click();
});