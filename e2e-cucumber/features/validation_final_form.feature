Feature: Validation of the final form


Scenario:  Try to send empty form

Given The user is on the final form
When User sending form with empty data
Then User receives correct errors

Scenario:  All fields are filled incorrectly

Given User is on the final form
When User sending form with wrong data
Then User receives adequate errors


Scenario:  Check card number wrong chars error

Given User is on the final form again
When User sending form with only wrong card number
Then User receives matching error
