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


test('Sortable data tables TC Scenario - 2', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Sortable Data Tables' }).click();
  await page.locator('#table1').getByRole('link', { name: 'edit' }).first().click();
  await page.locator('#table1').getByRole('link', { name: 'delete' }).first().click();
  await page.getByRole('heading', { name: 'Example 2' }).click();
  await page.locator('#table2').getByRole('cell', { name: 'http://www.jsmith.com' }).click();
  await page.getByRole('cell', { name: '$50.00' }).nth(2).click();
  await page.locator('#table2').getByRole('cell', { name: 'http://www.timconway.com' }).click();
  await page.getByText('Class and ID attributes to').click();
  await page.getByText('Often times when you see a').click();
  await page.locator('#table2').getByRole('cell', { name: 'http://www.jdoe.com' }).click();
  await page.locator('#table1').getByText('Last Name').click();
  await page.locator('#table1').getByText('First Name').click();
  await page.locator('#table1').getByText('Email').click();
  await page.locator('#table1').getByRole('cell', { name: 'Due' }).click();
  await page.locator('#table1').getByText('Web Site').click();
  await page.locator('#table1').getByText('Action').click();
});