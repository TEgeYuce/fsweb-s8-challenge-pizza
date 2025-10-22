describe('Order Form Input Test', () => {
  it('Bir metin gir, malzeme seç', () => {
    cy.visit('http://localhost:5173/OrderPage')


    cy.get('[data-cy="isimInput"]').type('a  a ');
    cy.contains("Ad Soyad alanı en az 3 karakter içermelidir.").should('be.visible')
    cy.get('[data-cy="submitBtn"]').should('be.disabled')

    cy.get('[data-cy="isimInput"]').clear().type('Ege');
    cy.contains("Ad Soyad alanı en az 3 karakter içermelidir.").should('not.exist')

    cy.get('[data-cy="malzemeInput"]').eq(1).check();
    cy.get('[data-cy="malzemeInput"]').eq(2).check();
    cy.get('[data-cy="malzemeInput"]').eq(3).check();
    
    cy.contains("En az 4 malzeme, en fazla 10 malzeme seçmelisiniz. Her ek malzeme 5₺'dir.").should('be.visible')
    cy.get('[data-cy="submitBtn"]').should('be.disabled')
    cy.get('[data-cy="malzemeInput"]').eq(4).check();
    
    cy.contains("En az 4 malzeme, en fazla 10 malzeme seçmelisiniz. Her ek malzeme 5₺'dir.").should('not.exist')

    cy.get('[data-cy="malzemeInput"]').eq(5).check();
    cy.get('[data-cy="malzemeInput"]').eq(6).check();
    cy.get('[data-cy="malzemeInput"]').eq(7).check();
    cy.get('[data-cy="malzemeInput"]').eq(8).check();
    cy.get('[data-cy="malzemeInput"]').eq(9).check();
    cy.get('[data-cy="malzemeInput"]').eq(10).check();
    cy.get('[data-cy="malzemeInput"]').eq(11).check();

    cy.contains("En az 4 malzeme, en fazla 10 malzeme seçmelisiniz. Her ek malzeme 5₺'dir.").should('be.visible')
    cy.get('[data-cy="submitBtn"]').should('be.disabled')

    cy.get('[data-cy="malzemeInput"]').eq(5).uncheck();
    cy.get('[data-cy="malzemeInput"]').eq(6).uncheck();
  
    cy.contains("En az 4 malzeme, en fazla 10 malzeme seçmelisiniz. Her ek malzeme 5₺'dir.").should('not.exist')
    cy.get('[data-cy="submitBtn"]').should('be.enabled')
  })
})