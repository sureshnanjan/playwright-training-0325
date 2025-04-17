import { test, expect } from '@playwright/test';

test('Dynamic content loading', async ({ page }) => {  
  await page.getByRole('link', { name: 'Dynamic Loading' }).click();
  await expect(page).toHaveURL(/.*dynamic_loading/);  
});

test('Dynamic content heading is loaded', async ({ page }) => {
  await page.goto('/');
  const expected_title = "Dynamic Content"
  const actual_title = page.getByRole('heading', { name: 'Dynamic Content' })
  await expect(actual_title).toHaveText(expected_title) 
});

test('Dynamic content sub heading is loaded', async ({ page }) => {
  await page.goto('/');
  const expected_title = "This example demonstrates the ever-evolving nature of content by loading new text and images on each page refresh."
  const actual_title = page.getByRole('heading', { name: 'Dynamic Content' })
  await expect(actual_title).toHaveText(expected_title) 
});

test('Check if static content text is visible', async ({ page }) => {
  await page.goto('/');
  const static_content = page.getByText('?with_content=static')
  await expect(static_content).toBeVisible()
});

test('Check if click here link is visible', async ({ page }) => {
  await page.goto('/');
  const link_text = page.getByRole('link', { name: 'click here' })
  await expect(link_text).toBeVisible()
});

test('Check if click here link is clickable', async ({ page }) => {
  await page.goto('/'); 
  await page.getByRole('link', { name: 'click here' }).click();
  
});

test('Check if images are visible', async ({ page }) => {
  await page.goto('/'); 
  const img1 = page.getByRole('img').nth(1);
  const img2 = page.getByRole('img').nth(2);
  const img3 = page.getByRole('img').nth(3);
  await expect(img1).toBeVisible()
  await expect(img2).toBeVisible()
  await expect(img3).toBeVisible()
});

test('Check if static content 3 paragraphs are visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('body')).toContainText('Omnis fugiat porro vero quas tempora quis eveniet ab officia cupiditate culpa repellat debitis itaque possimus odit dolorum et iste quibusdam quis dicta autem sint vel quo vel consequuntur dolorem nihil neque sunt aperiam blanditiis.');
  await expect(page.locator('body')).toContainText('Accusantium eius ut architecto neque vel voluptatem vel nam eos minus ullam dolores voluptates enim sed voluptatem rerum qui sapiente nesciunt aspernatur et accusamus laboriosam culpa tenetur hic aut placeat error autem qui sunt.');
  await expect(page.locator('body')).toContainText('Ut autem illo officiis quo amet ratione recusandae minus placeat aut consectetur non veritatis temporibus iusto doloribus dolor numquam eligendi voluptatum exercitationem consequatur ipsa incidunt nihil voluptatem omnis quasi enim necessitatibus eos.');

});




