import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("The user is on main page", () => {
    cy.visit("/");
});

When("User sending empty form", () => {
    cy.get('#search_form > .btn').click();
});

Then("User receives 0 results", () => {
    cy.get('.alert').should('be.visible')
});

Given("The user is still on main page", () => {
    cy.url().should('eq', 'http://qalab.pl.tivixlabs.com/?country=3&city=3&model=&pickup=&dropoff=')
});

When("User sending form with past date range", () => {
    cy.get('select[id=country]').select('Poland').should('have.value', '1');
    cy.get('select[id=city]').select('Wroclaw').should('have.value', '1');
    cy.get('#model').type('Mazda 6').should('have.value', 'Mazda 6');
    cy.get('#pickup').type('2018-12-30').should('have.value', '2018-12-30');
    cy.get('#dropoff').type('2020-01-10').should('have.value', '2020-01-10');
    cy.get('#search_form > .btn').click();
});

Then("User can't send form", () => {
    cy.get('.alert').should('be.visible')
});