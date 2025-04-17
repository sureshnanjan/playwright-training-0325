import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  await expect(page.getByRole('heading', { name: 'Add/Remove Elements' })).toBeVisible();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Slow Resources' }).click();
  await expect(page.getByRole('heading', { name: 'Slow Resources' })).toBeVisible();
  await expect(page.getByText('At times it can take a while')).toBeVisible();
});