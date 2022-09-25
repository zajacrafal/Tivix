Feature: Rent a car


Scenario: Choose a car from Prince Murphy

Given The user is on 'main page'
When User sending form with correct data
Then User rents car from 'Prince Murphy'

Scenario: Check if the summary matches with order and move to final step

Given The user is on the summary page with Prince Murphy car
When Summary page matches to the order
Then User moves to finalize order

Scenario: Finalize offer

Given The user is on the final step
When User fills the form
Then Sending form makes error 404
    
 

