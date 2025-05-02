import { test, expect } from '@playwright/test';

test('AB Test Page Has correct Title', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'A/B Testing' }).click();
    await page.getByRole('heading', { name: 'A/B Test Control' }).click();
    await expect(page.getByRole('heading', { name: 'A/B Test Control' })).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('A/B Test Control');
  });