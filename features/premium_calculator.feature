Feature: Premium Calculator

Scenario: Senior cicizen get 10 percent Premium
Given Suresh is more than 61 years
When he applies for insurance
Then he should get 10 percent premium

Scenario: 18 years Male get 20 percent premium
Given he is 18 years old
When he applies for insurance
Then he should get 20 percent premium

Scenario: 18 years Female get 20 percent premium
Given she is 18 years old
When she applies for insurance
Then she should get 20 percent premium

Scenario: 15 years Female get 15 percent premium
Given she is 14 years old
When she applies for insurance
Then she should get 15 percent premium

Scenario: 15 years Male get 18 percent premium
Given he is 14 years old
When he applies for insurance
Then he should get 18 percent premium