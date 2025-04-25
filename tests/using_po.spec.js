import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { AddRemove } from '../pages/add_remove_page';
test('Title is correct', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    const titleText = await homePage.getTitle();
    expect(titleText).toContain('Welcome to the-internet');
});
  
test("Adding element works", async({page})=>{
    const add_rem_page = new AddRemove(page)
    add_rem_page.addElement(1)
});

test("Adding multiple element works", async({page})=>{
    const add_rem_page = new AddRemove(page)
    add_rem_page.addElement(2)
});
  