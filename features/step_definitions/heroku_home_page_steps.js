import { HomePage } from "../../pages/homepage.js";
import { chromium , expect} from "@playwright/test";
import { Given, When, Then, AfterAll } from "@cucumber/cucumber";

const browser = await chromium.launch({headless: false});  // Or 'firefox' or 'webkit'.
const page = await browser.newPage();
var home_page;
var actual_title
Given('Heroku Homepage is availavle', async function () {
    // Write code here that turns the phrase above into concrete actions
    home_page = new HomePage(page);
    await home_page.navigate();

});
When('I read the title', async function () {
    // Write code here that turns the phrase above into concrete actions
    actual_title = await home_page.getTitle();
  });

Then('the title should be {string}', async function (string) {
    expect(string).toEqual(actual_title)
});

Given("I need Data", async function () {
    console.log(this)
});

AfterAll(()=>{
    browser.close()
})

function Click(params) {

    
    
}