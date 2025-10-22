describe('E2E TEST', () => {
  it('Test', () => {
    cy.visit('http://localhost:5173')

    cy.get('.aciktimButon').click();

    cy.get('[data-cy="boyutSmall"]').check();
    cy.get('select[name="hamurKalinlik"]').select('İnce Kenarlı');

    cy.get('[data-cy="malzemeInput"]').eq(0).check();
    cy.get('[data-cy="malzemeInput"]').eq(1).check();
    cy.get('[data-cy="malzemeInput"]').eq(2).check();
    cy.get('[data-cy="malzemeInput"]').eq(3).check();
    cy.get('[data-cy="malzemeInput"]').eq(4).check();
    cy.get('[data-cy="malzemeInput"]').eq(5).check();

    cy.get('[data-cy="isimInput"]').clear().type('Ege');
    cy.contains("Ad Soyad alanı en az 3 karakter içermelidir.").should('not.exist')

    
    cy.get('#siparisNotu').clear().type('test');

    cy.get('[data-cy="arti"]').click().click().click()
    cy.get('[data-cy="eksi"]').click()

    cy.contains("30").should('be.visible')
    cy.contains("346.5").should('be.visible')

    cy.get('[data-cy="submitBtn"]').click();

    cy.url().should('eq', 'http://localhost:5173/OrderResult');
  })
})