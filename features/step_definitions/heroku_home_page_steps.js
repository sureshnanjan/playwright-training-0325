import { HomePage } from "../../pages/homepage.js";
import { chromium , expect} from "@playwright/test";
import { Given, When, Then, AfterAll } from "@cucumber/cucumber";

//const browser = await chromium.launch({headless: false});  
// 'firefox' or //'webkit'.
//const page = await browser.newPage();
var home_page;
var actual_title
let mydata;
// TO DO: Get The response from the API call which is intercepted and make it //available to all steps defs
// 
Given('Heroku Homepage is availavle', async function () {
    // Write code here that turns the phrase above into concrete actions
    home_page = new HomePage(page);
    await home_page.navigate();

});
When('I read the title', async function () {
    // Write code here that turns the phrase above into concrete actions
    actual_title = await home_page.getTitle();
  });

Then('the title should be {string}',  function (string) {
    expect(string).toEqual(actual_title)
});

Given("Do ", async function () {
    const csvdata = [].forEach(element => {
        WhenMethod();
        
    });
});

When('I need to load data', function () {
    // Write code here that turns the phrase above into concrete actions
    
  });




