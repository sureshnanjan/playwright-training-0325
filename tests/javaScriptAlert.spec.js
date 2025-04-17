import {test,expect} from "@playwright/test";

test("Verify user is able to navigate to 29 component 'JavaScript Alerts' " , async({page}) => {
  await page.goto('/');

  // Locate the component with a specific href in a list
  const hrefValue = '/javascript_alerts';
  //redirecting from homepage to (/) to compoent page
  const component = await page.locator(`li a[href="${hrefValue}"]`);
  await expect(component).toBeVisible();
  await component.click();
})

test("Verify component page title matches with text 'JavaScript Alerts' ", async({page}) => {
    await page.goto('/');
    const hrefValue = '/javascript_alerts';
    const component = await page.locator(`li a[href="${hrefValue}"]`);
    await expect(component).toBeVisible();
    await component.click();
    const expectedTitle = "JavaScript Alerts";
    const actualTitle = await page.locator('.example h3');
    await expect(actualTitle).toHaveText(expectedTitle);

})

test("Verify 3 button is present in page", async({page}) => {
    await page.goto('/');
    const hrefValue = '/javascript_alerts';
    const component = await page.locator(`li a[href="${hrefValue}"]`);
    await expect(component).toBeVisible();
    await component.click();
    
    const buttontitle = await page.locator('button').count();
    const collectButton = await page.$$('button');
    console.log("no of button present" +collectButton.length);
    await expect(buttontitle).toBe(3);
})

test("Verify user is able to click on JS Alert button and able to close the dialog box", async({page}) => {
    await page.goto('/');
    const hrefValue = '/javascript_alerts';
    const component = await page.locator(`li a[href="${hrefValue}"]`);
    await expect(component).toBeVisible();
    await component.click();
    
    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am a JS Alert');
        await dialog.accept();
    })

   await page.locator('//button[contains(text(), "Click for JS Alert")]').click();
})

test("Verify user is able to click for JS Confirm button and able to confirm the dialog box", async({page}) => {
    await page.goto('/');
    const hrefValue = '/javascript_alerts';
    const component = await page.locator(`li a[href="${hrefValue}"]`);
    await expect(component).toBeVisible();
    await component.click();
    
    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('I am a JS Confirm');
        await dialog.accept();
    })

   await page.locator('//button[contains(text(), "Click for JS Confirm")]').click();  
})

test("Verify user is able to click for JS Confirm button and able to cancel the dialog box", async({page}) => {
    await page.goto('/');
    const hrefValue = '/javascript_alerts';
    const component = await page.locator(`li a[href="${hrefValue}"]`);
    await expect(component).toBeVisible();
    await component.click();
    
    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('I am a JS Confirm');
        await dialog.dismiss();
    })

   await page.locator('//button[contains(text(), "Click for JS Confirm")]').click();  
})

test("Verify user is able to click for JS Prompt button and able to enter the text in the prompt box and confirm the dialog box", async({page}) => {
    await page.goto('/');
    const hrefValue = '/javascript_alerts';
    const component = await page.locator(`li a[href="${hrefValue}"]`);
    await expect(component).toBeVisible();
    await component.click();
    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('I am a JS prompt');
        await dialog.accept('Learning JS Prompt');
    })
    await page.locator('//button[contains(text(), "Click for JS Prompt")]').click(); 
})

test("Verify entered text from js prompt matches with result ", async({page}) => {
    await page.goto('/');
    const hrefValue = '/javascript_alerts';
    const component = await page.locator(`li a[href="${hrefValue}"]`);
    await expect(component).toBeVisible();
    await component.click();
    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('I am a JS prompt');
        await dialog.accept('Learning JS Prompt');
    })
    await page.locator('//button[contains(text(), "Click for JS Prompt")]').click(); 
    const resultTxt = await page.locator('#result').textContent();
    const newResultTxt = resultTxt.replace("You entered: ","");
    await expect(newResultTxt).toContain('Learning JS Prompt');
})