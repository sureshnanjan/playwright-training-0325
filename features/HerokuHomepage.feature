Feature: Home Page scenarios
Scenario: Home Page Title Matches
Given Heroku Homepage is availavle
When I read the title 
Then the title should be "Welcome to the-internet"