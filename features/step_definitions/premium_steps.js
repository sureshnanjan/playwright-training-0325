import { Given, When, Then} from "@cucumber/cucumber";
import { calculate_premium } from "../../dashboard.js";
import { assert } from "console";
let result = 0;
let input_age = 0;

Given('Suresh is more than {int} years', function (age) {
    // Given('Suresh is more than {float} years', function (float) {
      // Write code here that turns the phrase above into concrete actions
      input_age = age;
    });

    When('he applies for insurance', function () {
        // Write code here that turns the phrase above into concrete actions
        result = calculate_premium(input_age,"M")
      });

      Then('he should get {int} percent premium', function (expected) {
        // Then('he should get {float} percent premium', function (float) {
          // Write code here that turns the phrase above into concrete actions
          assert(result === expected)
        });