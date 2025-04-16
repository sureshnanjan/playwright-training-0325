import { test, expect } from '@playwright/test';
test('Verify the website title matches "The internet" ', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Locate the component with a specific href in a list
  const hrefValue = '/exit_intent';
  const component = await page.locator(`li a[href="${hrefValue}"]`);

  // Ensure the component is found
  await expect(component).toBeVisible();

  // Perform actions on the located component
  await component.click();

  // Verify the page title after navigation
  await expect(page).toHaveTitle('The Internet');
  await page.waitForTimeout(5000);
});

test ('Verify component page title matches with Exit Intent', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
  const hrefValue = '/exit_intent';
  const component = await page.locator(`li a[href="${hrefValue}"]`);

  await expect(component).toBeVisible();
  await component.click();

  const expectedTitle = 'Exit Intent';
 const pageTitle = page.locator('.example h3');

  await expect(pageTitle).toHaveText(expectedTitle);
  await page.waitForTimeout(5000);

})

test("Verify the popup header have 'This is a modal window' ", async({page}) => {
  await page.goto('https://the-internet.herokuapp.com/');
  const hrefValue = '/exit_intent';
  const component = await page.locator(`li a[href="${hrefValue}"]`);
  await expect(component).toBeVisible();
  await component.click();
  await page.mouse.up();
  await page.mouse.down();
//  await page.waitForSelector('#ouibounce-modal', { state: 'visible' });
  const actualPopTitle = await page.locator("#ouibounce-modal h3");
  await expect(actualPopTitle).toHaveText('This is a modal window');
})

test("Verify user is able to close the popup box", async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const hrefValue = '/exit_intent';
    const component = await page.locator(`li a[href="${hrefValue}"]`);
    await expect(component).toBeVisible();
    await component.click();
    await page.mouse.up();
    await page.mouse.down();
    await page.waitForSelector('#ouibounce-modal', { state: 'visible' });
    await page.locator('#ouibounce-modal .modal-footer p').click();

})

