import { Given, When, Then } from "@cucumber/cucumber";
import { calculate_premium } from "../../dashboard.js";
import { assert } from "console";

let result = 0;
let input_age = 0;
let input_gender = "";

Given('Suresh is more than {int} years', function (age) {
    input_age = age;
});

When('he applies for insurance', function () {
    result = calculate_premium(input_age, input_gender);
});

Then('he should get {int} percent premium', function (expected) {
    assert(result === expected, `Expected ${expected} but got ${result}`);
});