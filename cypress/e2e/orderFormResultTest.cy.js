describe('Order Form Result Test', () => {
    it('Order Form Result', () => {
      cy.visit('http://localhost:5173/OrderPage')
        
      cy.get('[data-cy="boyutSmall"]').should('be.checked');
      cy.get('[data-cy="submitBtn"]').should('be.disabled');

      cy.get('[data-cy="isimInput"]').type('Ege');

      cy.get('[data-cy="malzemeInput"]').eq(0).check();
    cy.get('[data-cy="malzemeInput"]').eq(1).check();
    cy.get('[data-cy="malzemeInput"]').eq(2).check();
    cy.get('[data-cy="malzemeInput"]').eq(3).check();

    cy.get('#siparisNotu').type('test');

    cy.contains("20").should('be.visible')
    cy.contains("105.5").should('be.visible')
    cy.get('[data-cy="submitBtn"]').should('be.enabled');
    cy.get('[data-cy="submitBtn"]').click();

    cy.url().should('eq', 'http://localhost:5173/OrderResult');

    cy.contains('p', 'Hamur : Standart').should('exist');
    })
  })