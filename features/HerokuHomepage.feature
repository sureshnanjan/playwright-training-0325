Feature: Home Page scenarios
Scenario: Home Page Title Matches
Given Heroku Homepage is availavle
When I read the title 
Then the title should be "Welcome to the-internet"

@loaddata
Scenario: Test loading CSV Data
Given I need Data
When I need to load data

Scenario: Test loading JSON Data;
Given I have many items in CSV
When I need to run for all data
Then I should be able to load data

Scenario Outline: Test loading JSON Data
Given I have <many> items in CSV
When I need to run for <item> data
Then I should be able to load data
Examples:
| many | item | 
| 1    | 1    |
| 2    | 2    |         


  

