import { test, expect } from '@playwright/test';

test('Verifying the URL , heading, content of the page1', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading');
  await page.getByRole('heading', { name: 'Dynamically Loaded Page' }).click(); // Heading of the page
  await page.getByText('It\'s common to see an action').click(); // Content of the page
  await page.getByText('There are two examples. One').click(); // Content of the page
})
test('Verifying link1 of the page1 with its heading, content and sub links of page2', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1'); // URL VERIFCATION OF PAGE2
  await page.getByRole('link', { name: 'Example 1: Element on page' }).click(); // Link1 on the page1
  await page.getByRole('heading', { name: 'Dynamically Loaded Page' }).click(); // Heading of page 2
  //await page.getByRole('link', { name: 'Example 1: Element on page' }).click(); // Subheading of the page2
  await page.getByRole('button', { name: 'Start' }).click();  // Sublink verifcation of page 2
  await page.getByRole('heading', { name: 'Hello World!' }).click(); // Content of Sublink redirected to page3.1
})
test('Verifying link2 of the page1 with its heading, content and sub links og page2', async ({ page }) => {
 // await page.getByRole('link', { name: 'Example 2: Element rendered' }).click(); // Link2 on page1
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2'); // URL VERIFCATION OF PAGE2
  await page.getByRole('heading', { name: 'Dynamically Loaded Page' }).click(); // Heading of page 2
  await page.getByRole('heading', { name: 'Example 2: Element rendered' }).click(); // subheading of page2
  await page.getByRole('button', { name: 'Start' }).click(); // sublink verification of page 2
  await page.getByText('Dynamically Loaded Page Elements Example 2: Element rendered after the fact').click(); // heading of page3.2
  await page.getByRole('heading', { name: 'Hello World!' }).click(); // content of page3.2
});