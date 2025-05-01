import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({
    headless: false,
    timeout: 0
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/');

  // ---------------------
  await context.close();
  await browser.close();
})();