import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("The user is on the final form", () => {
    cy.finalForm();
});

When("User sending form with empty data", () => {
    cy.get('.btn').click()
});
Then("User receives correct errors", () => {
    cy.get('#rent_form > h5:nth-child(1)').should('have.value', 'Name is required')
    cy.get('#rent_form > h5:nth-child(2)').should('have.value', 'Last name is required')
    cy.get('#rent_form > h5:nth-child(3)').should('have.value', 'Email is required')
    cy.get('#rent_form > h5:nth-child(4)').should('have.value', 'Card number is required')
});

Given("User is on the final form", () => {
    cy.finalForm();
});

When("User sending form with wrong data", () => {
    cy.get('#name').type('This is a name with more than fifty digits and lets see what happens')
    cy.get('#last_name').type('This is the last name with more than fifty digits and lets see what happens')
    cy.get('#card_number').type('cardnumbercreatedfromletters')
    cy.get('#email').type('emailgmail.com')
});

Then("User receives adequate errors", () => {
    cy.get('#rent_form > h5:nth-child(1)').should('have.value', 'Name value is too long')
    cy.get('#rent_form > h5:nth-child(2)').should('have.value', 'Last name value is too long')
    cy.get('#rent_form > h5:nth-child(3)').should('have.value', 'Please provide valid email')
    cy.get('#rent_form > h5:nth-child(4)').should('have.value', 'Card number value is too long')
});

Given("User is on the final form again", () => {
    cy.finalForm();
});

When("User sending form with only wrong card number", () => {
    cy.get('#name').type('Jan')
    cy.get('#last_name').type('Testowy')
    cy.get('#card_number').type('card number')
    cy.get('#email').type('jantestowy@totylkotest.com')
});

Then("User receives adequate errors", () => {
    cy.get('#rent_form > h5').should('have.value', 'Card number contains wrong chars    ')
});
