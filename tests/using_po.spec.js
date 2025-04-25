import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { AddRemove } from '../pages/add_remove_page';
import { MultipleWindows } from '../pages/multiple_windows_page';
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

test("Multiple Windows Launnch Test", async ({page})=>{
/// AAA
    expected_url = "https://the-internet.herokuapp.com/windows/new"
    const multi = new MultipleWindows(page);
    multi.clickHere();
    const actual_result = multi.getResultURL();
    expect(actual_result).toEqual(expected_url);

});
test("Multiple Windows Launnch Test LInk Check", async ({page})=>{
    /// AAA
        expected_text = "Click here"
        const multi = new MultipleWindows(page);
        const actual_text = multi.getLinkText();
        expect(actual_result).toEqual(expected_url);
    
    });
  