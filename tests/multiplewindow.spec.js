import { test, expect } from '@playwright/test';

test('Multiple Windows test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Multiple Windows' }).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/windows');
    await page.getByRole('heading', { name: 'Opening a new window' }).click();
    
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Click Here' }).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL('https://the-internet.herokuapp.com/windows/new');      
   
});