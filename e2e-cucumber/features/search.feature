Feature: Search 

Scenario: Search with emtpy form

Given The user is on main page
When User sending empty form
Then User receives 0 results

Scenario: Search with past date range

Given The user is still on main page
When User sending form with past date range
Then User can't send form