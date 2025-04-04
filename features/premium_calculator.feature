Feature: Premium Calculator

Scenario: Senior cicizen get 10 percent Premium
Given Suresh is more than 61 years
When he applies for insurance
Then he should get 10 percent premium

Scenario: Female under 15 gets 15 percent premium
Given Priya is 14 years old
When she applies for insurance
Then she should get 15 percent premium

Scenario: Male under 15 gets 18 percent premium
Given Ramesh is 14 years old
When he applies for insurance
Then he should get 18 percent premium

Scenario: Male aged 18 gets 20 percent premium
Given Mohan is 18 years old
When he applies for insurance
Then he should get 20 percent premium

Scenario: Female aged 18 gets 20 percent premium
Given Sita is 18 years old
When she applies for insurance
Then she should get 20 percent premium