import {test, except} from '@playwright/test' 

(async () => {
  const browser = await chromium.launch({ headless: false }); // Open the browser
  const page = await browser.newPage(); // Open a new page
  await page.goto('https://the-internet.herokuapp.com/'); // Go to the URL

  console.log('Website is open!');
  await browser.close(); // Close the browser
})();