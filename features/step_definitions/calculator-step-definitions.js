import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { strict as assert } from 'assert';

/**
 * Calculator class to perform operations
 */
class Calculator {
  constructor() {
    this.values = [];
    this.result = 0;
  }

  enterValue(value) {
    this.values.push(Number(value));
  }

  add() {
    this.result = this.values.reduce((sum, current) => sum + current, 0);
    this.values = []; // Clear values after operation
    return this.result;
  }

  getResult() {
    return this.result;
  }
}

// Create a fresh calculator instance for each scenario
let calculatorInstance;

// Before each scenario, create a new calculator instance
Before(function() {
  calculatorInstance = new Calculator();
});

/**
 * Step Definitions
 */


Given('I have entered {int} into the calculator', function(value) {
  //const calculator = calculatorInstances[this.testCase.sourceLocation.uri];
  calculatorInstance.enterValue(value);
});

When('I press add', function() {
  //const calculator = calculatorInstances[this.testCase.sourceLocation.uri];
  calculatorInstance.add();
});


Then('the result should be {int} on the screen', function(expected) {
  //const calculator = calculatorInstances[this.testCase.sourceLocation.uri];
  const actual = calculatorInstance.getResult();
  assert.equal(actual, expected);
});

After(function() {
  // Clean up if needed
  calculatorInstance = null;
}
);
