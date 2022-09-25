Cypress.Commands.add('finalForm', () => {
        cy.visit("http://qalab.pl.tivixlabs.com/");
        cy.get('select[id=country]').select('Poland')
        cy.get('select[id=city]').select('Wroclaw')
        cy.get('#model').type('Mazda 6').should('have.value', 'Mazda 6');
        cy.get('#pickup').type('2022-12-30').should('have.value', '2022-12-30');
        cy.get('#dropoff').type('2023-01-10').should('have.value', '2023-01-10');
        cy.get('#search_form > .btn').click();
        cy.contains('Prince-Murphy')
            .parent('tr')
            .within(() => {
              cy.get('td').eq(0).contains('Prince-Murphy');
              cy.get('td').eq(5).contains('Rent').click({ force: true });
        cy.get('.btn').focus().click();
        cy.get('.btn').click({ force: true }); 
        cy.wait(3)
            });
  });