import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("The user is on 'main page'", () => {
    cy.visit("http://qalab.pl.tivixlabs.com/");
});
When("User sending form with correct data", () => {
    cy.get('select[id=country]').select('Poland')
    cy.get('select[id=city]').select('Wroclaw')
    cy.get('#model').type('Mazda 6').should('have.value', 'Mazda 6');
    cy.get('#pickup').type('2022-12-30').should('have.value', '2022-12-30');
    cy.get('#dropoff').type('2023-01-10').should('have.value', '2023-01-10');
    cy.get('#search_form > .btn').click();
});
Then("User rents car from 'Prince Murphy'", () => {
    cy.contains('Prince-Murphy')
        .parent('tr')
        .within(() => {
          cy.get('td').eq(0).contains('Prince-Murphy');
          cy.get('td').eq(5).contains('Rent').click({ force: true });
        });     
});

Given("The user is on the summary page with Prince Murphy car", () => {
    cy.url().should('eq', 'http://qalab.pl.tivixlabs.com/details/7')
});
When("Summary page matches to the order", () => {
    cy.contains('.card-header','Ursus C360')
    cy.get('.card-title').should('have.text', 'Company: Prince-Murphy');
    cy.get('.card-body > :nth-child(2)').should('have.text', 'Price per day: 23$');
    cy.get('.card-body > :nth-child(3)').should('have.text', 'Location: Poland, Wroclaw');
    cy.get('.card-body > :nth-child(4)').should('have.text', 'License plate: 5QE83'); 
});
Then("User moves to finalize order", () => {
    cy.get('#content > div > div > div.card-body > a').click({ force: true }); 
    cy.wait(3000)
});

Given("The user is on the final step", () => {
    cy.url().should('eq', 'http://qalab.pl.tivixlabs.com/rent/7')
});
When("User fills the form", () => {
    cy.get('#name').type('Jan').should('have.value', 'Jan');
    cy.get('#last_name').type('Testowy').should('have.value', 'Testowy');
    cy.get('#card_number').type('1234432100005252').should('have.value', '1234432100005252');
    cy.get('#email').type('jantestowy@totylkotest.com').should('have.value', 'jantestowy@totylkotest.com');
    cy.get('.btn').click()
});
Then("Sending form makes error 404", () => {
    cy.get('h1').should('contain.text', 'Page not found ')
});
