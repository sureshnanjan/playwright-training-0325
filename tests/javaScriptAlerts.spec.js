import {test,expect} from "@playwright/test";
import {JavaScriptAlertsPage } from '../pages/javaSciptPage';

test.describe('JavaScript Alerts Component', () => {

  test('Verify user is able to navigate to JavaScript Alerts component', async ({ page }) => {
    const jsAlertsPage = new JavaScriptAlertsPage(page);
    await jsAlertsPage.navigate();
  });

  test('Verify component page title matches with text "JavaScript Alerts"', async ({ page }) => {
    const jsAlertsPage = new JavaScriptAlertsPage(page);
    await jsAlertsPage.navigate();
    const actualTitle = await jsAlertsPage.getTitle();
    const expectedTitle = "JavaScript Alerts";
    await expect(actualTitle).toBe(expectedTitle);
  });

  test('Verify 3 buttons are present on the page', async ({ page }) => {
    const jsAlertsPage = new JavaScriptAlertsPage(page);
    await jsAlertsPage.navigate();
    const buttonCount = await jsAlertsPage.getButtonCount();
    await expect(buttonCount).toBe(3);
  });

  test('Verify user is able to click on JS Alert button and close the dialog box', async ({ page }) => {
    const jsAlertsPage = new JavaScriptAlertsPage(page);
    await jsAlertsPage.navigate();
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('I am a JS Alert');
      await dialog.accept();
    });
    await jsAlertsPage.clickAlertButton();
  });

  test('Verify user is able to click on JS Confirm button and confirm the dialog box', async ({ page }) => {
    const jsAlertsPage = new JavaScriptAlertsPage(page);
    await jsAlertsPage.navigate();
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      expect(dialog.message()).toBe('I am a JS Confirm');
      await dialog.accept();
    });
    await jsAlertsPage.clickConfirmButton();
  });

  test('Verify user is able to click on JS Confirm button and cancel the dialog box', async ({ page }) => {
    const jsAlertsPage = new JavaScriptAlertsPage(page);
    await jsAlertsPage.navigate();
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      expect(dialog.message()).toBe('I am a JS Confirm');
      await dialog.dismiss();
    });
    await jsAlertsPage.clickConfirmButton();
  });

  test('Verify user is able to click on JS Prompt button, enter text, and confirm the dialog box', async ({ page }) => {
    const jsAlertsPage = new JavaScriptAlertsPage(page);
    await jsAlertsPage.navigate();
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      expect(dialog.message()).toBe('I am a JS prompt');
      await dialog.accept('Learning JS Prompt');
    });
    await jsAlertsPage.clickPromptButton();
  });

  test('Verify entered text from JS prompt matches with result', async ({ page }) => {
    const jsAlertsPage = new JavaScriptAlertsPage(page);
    await jsAlertsPage.navigate();
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      expect(dialog.message()).toBe('I am a JS prompt');
      await dialog.accept('Learning JS Prompt');
    });
    await jsAlertsPage.clickPromptButton();
    const resultText = await jsAlertsPage.getResultText();
    const newResultText = resultText.replace('You entered: ', '');
    await expect(newResultText).toBe('Learning JS Prompt');
  });

});
