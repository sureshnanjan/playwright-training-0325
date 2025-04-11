Feature: Premium Calculator
Scenario: Senior citizen get 10 percent Premium
Given Suresh is more than 61 years
When he applies for insurance
Then he should get 10 percent premium

Scenario: Male less than 15 years get 18 percent preminum
Given Suresh is more than 14 years
When he applies for insurance
Then he should get 18 percent premium

Scenario: Female less than 15 years get 15 percent preminum
Given Sita is more than 14 years
When she applies for insurance
Then she should get 15 percent premium

