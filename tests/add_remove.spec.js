import { test, expect } from "@playwright/test";
import { AddRemove } from "../pages/add_remove_page.js";
test("Add removes Launches OK",()=>{
// Arrange
const expected_title = "Add/Remove Elements"
//const login_name = "suresh"
// Launch the Homepage
// Act
// Navigate to Add Remove
// Assert
const actual_result = ""
expect(actual_result).toEqual(expected_title)

});
/**
 * 
 */
test("Adding Elements Work",async ({page})=>{
    /// AAA
    const expected_count = 1
    // Nagigate to home 
    // Access Add remove
    // Add one element
    // Assertion
    // One Delete Element is avaiable
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
    //await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
    await expect(page.getByRole('heading', { name: 'Add/Remove Elements' })).toBeVisible();
    await page.getByRole('button', { name: 'Add Element' }).click();
    await page.getByRole('button', { name: 'Add Element' }).click();
    await expect (page.locator(".added-manually")).toHaveCount(1)
});

test("Adding Elements Work Improved with PO",async ({page})=>{
    const add_rem = new AddRemove();
    add_rem.addElement(1);
    const actual = add_rem.getElementCount();
    expect(actual).toEqual(1)
     
});

test("Basic Auth Works",async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Basic Auth' }).click();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await expect(page.getByText('Congratulations! You must')).toBeVisible();
});

test.only("File Upload", async ({page}) =>{
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'File Upload' }).click();
  await page.locator('#file-upload').click();
  await page.locator('#file-upload').setInputFiles("C:\\Users\\nanja\\OneDrive\\Desktop\\Scratch\\WebApplication\\abtest.html");
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.locator('#uploaded-files')).toContainText('abtest');
});
