describe('Home Page Buton Test', () => {
    it('Home Page Buton Test', () => {
      cy.visit('http://localhost:5173')
        
      cy.get('[data-cy="anasayfa-siparisbuton"]').first().click();
      cy.url().should('eq', 'http://localhost:5173/OrderPage');

      cy.go('back');
      cy.url().should('eq', 'http://localhost:5173/');

      cy.get('[data-cy="anasayfa-siparisbuton"]').eq(1).click();
      cy.url().should('eq', 'http://localhost:5173/OrderPage');
    })
  })