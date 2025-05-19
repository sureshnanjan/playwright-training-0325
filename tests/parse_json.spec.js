import { test, expect } from '@playwright/test';

test('Parse JSON', async ({page}) => {
    let userData;
    page.on('request', request => {
        console.log(`Request URL: ${request.url()}`);
        console.log(`Request Method: ${request.method()}`);
        console.log(`Request Headers: ${JSON.stringify(request.headers())}`);
        console.log(`Request Body: ${request.postData()}`);
        
        
    });
    page.on('response', async response => {
        console.log(`Response URL: ${response.url()}`);
        console.log(`Response Status: ${response.status()}`);
        if (response.url().endsWith('typicode.com/users')) {
            console.log("Populating user data");
            userData = await response.json();
        }
    });

    // Run xhr_json_example.html using the live server and change the URL to the live server URL
    // Ensure you have a live server running on port 5500
    // You can use the Live Server extension in VSCode or any other live server
    await page.goto('http://127.0.0.1:5500/xhr_json_example.html');
    await page.click('#fetchUsers');

    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the response is received
    // Log the user data

    console.log(`Number of users: ${userData.length}`);
  
  // Display a summary of the data
    console.log('\n User Summary:');
    userData.forEach(user => {
    console.log(`- ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Company: ${user.company.name}`);
  });
});

test("Mock API", async ({ page }) => {
  let userData;
  page.on('response', async response => {
        console.log(`Response URL: ${response.url()}`);
        console.log(`Response Status: ${response.status()}`);
        if (response.url().endsWith('users')) {
            console.log("Populating user data");
            userData = await response.json();
        }
    });

    await page.route('**/users', route => {
        const response = [
            { id: 1, name: 'Mock User', email: 'mock@user.com', company: 'Fake Company'} // Mocked response 
        ];
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(response)
        });
    });
    await page.goto('http://127.0.0.1:5500/xhr_json_example.html');
    await page.click('#fetchUsers');
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the 
    console.log(`Number of users: ${userData.length}`);
    // Display a summary of the data
    console.log('\n User Summary:');
    userData.forEach(user => {
    console.log(`- ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Company: ${user.company}`);});
});