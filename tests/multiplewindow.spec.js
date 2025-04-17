import { test, expect } from '@playwright/test';

test('Multiple Windows page load', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Multiple Windows' }).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/windows');

    await page.getByRole('heading', { name: 'Opening a new window' }).click();
    
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Click Here' }).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL('https://the-internet.herokuapp.com/windows/new');      
   
});

test('Load Heading on Multiple window page', async ({ page }) => {
    await page.goto('/');   
    const expected_title = "Opening a new window"
    const actual_title = page.getByRole('heading', { name: 'Opening a new window' })
    await expect(actual_title).toHaveText(expected_title) 
});

test('Check correct link is visible and clickable', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Click Here' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Click Here' })).toBeEnabled();
    await page.getByRole('link', { name: 'Click Here' }).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/windows/new');
    await page.close();
});

test('Check New window is opened and has correct title', async ({ page }) => {
    await page.goto('/');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Click Here' }).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL('https://the-internet.herokuapp.com/windows/new');
    await expect(page1.getByRole('heading', { name: 'New Window' })).toBeVisible();  
    
});