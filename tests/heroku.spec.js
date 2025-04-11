import { test, expect } from '@playwright/test';

test('Heroku App is Available', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/The Internet/)
    

});
test('Home Page Title Matches', async ({ page }) => {
    await page.goto('/');
    const expected_title = "Welcome to the-internet"
    const actual_title = page.locator('h1')
    await expect(actual_title).toHaveText(expected_title)
});

test('Home Page Sub Title Matches', async ({ page }) => {
    await page.goto('/');
    const expected_title = "Available Examples"
    const actual_title = page.locator('h2')
    await expect(actual_title).toHaveText(expected_title)
  });

test('Home Page Has 44 Available Examples Failing', async ({ page }) => {
    await page.goto('/');
    const expected_count = 44
    const actual_count = await page.locator('a').count()
    expect(actual_count).toEqual(expected_count)
});

test.only('Home Page Has 44 Available Examples Passing', async ({ page }) => {
    await page.goto('/');
    const expected_count = 44
    const actual_count = await page.locator('a').filter({ hasNot: page.locator('img') }).filter({hasNotText:'Elemental Selenium'}).count()
    expect(actual_count).toEqual(expected_count)
});

var myobj = {} // Object Literal
// PetS







