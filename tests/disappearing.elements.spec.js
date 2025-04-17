import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Disappearing Elements' }).click();
  await page.getByRole('heading', { name: 'Disappearing Elements' }).click();
  await page.getByText('This example demonstrates').click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('link', { name: 'Portfolio' }).click();
  await page.getByRole('link', { name: 'Gallery' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByText('Powered by Elemental Selenium').click();
  const page1 = await page1Promise;
  await page.getByRole('link', { name: 'Home' }).click();
});