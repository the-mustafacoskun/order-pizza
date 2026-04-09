describe('Pizza Order Form Spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/pizza');
  });

  it('validates that the name input accepts text correctly', () => {
    cy.get('[data-cy="name-input"]').type('Cypress Test').should('have.value', 'Cypress Test');
  });

  it('successfully submits the form with valid inputs', () => {
    const ids = [1, 2, 3, 4]; // En az 4 malzeme
    ids.forEach(id => {
      cy.get(`[data-cy="checkbox-${id}"]`).check({ force: true });
    });
    
    cy.get('[data-cy="size-button-M"]').click();
    cy.get('[data-cy="crust-dropdown"]').click();
    cy.get('[data-cy="crust-option-Normal-Kenar"]').click();
    cy.get('[data-cy="name-input"]').type('Mustafa');
    
    cy.get('[data-cy="submit-order-button"]').should('not.be.disabled').click();
    cy.contains('SİPARİŞ ALINDI').should('be.visible');
  });
});