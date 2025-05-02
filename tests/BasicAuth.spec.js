import { test, expect } from '@playwright/test';

test('Verify user is able to Login to Basic Auth component', async ({ page }) => {
  const username = 'admin';
  const password = 'admin';
  const url = `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`;

  // Navigate to the Basic Auth page with credentials
  await page.goto(url);

});

test("Verify is able to view successMessage when login successfully", async({page}) => {
    const username = 'admin';
    const password = 'admin';
    const url = `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`;
  
    // Navigate to the Basic Auth page with credentials
    await page.goto(url);
  
    // Verify successful login
    const successMessage = await page.locator('p').textContent();
    expect(successMessage).toContain('Congratulations! You must have the proper credentials.'); 
})





