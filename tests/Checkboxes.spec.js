import { test, expect } from '@playwright/test';

test('Verifying the Checkboxes page', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.locator('li').filter({ hasText: 'Checkboxes' }).click();
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  await expect(page.getByText('Checkboxes')).toBeVisible();
  await page.getByRole('heading', { name: 'Checkboxes' }).click();
  await page.getByText('checkbox 1 checkbox').click();
  await page.getByRole('checkbox').first().check();
<<<<<<< Updated upstream
  //await page.getByRole('checkbox').nth(1).uncheck();
=======
  await page.getByRole('checkbox').nth(1).uncheck();
>>>>>>> Stashed changes
});