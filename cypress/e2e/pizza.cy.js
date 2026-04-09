describe('Pizza Order Form Spec', () => {
  
  beforeEach(() => {
    // Arrange: Visit the pizza order page before each test
    cy.visit('http://localhost:5173/pizza');
  });

  it('validates that the name input accepts text correctly', () => {
    // Act: Type into the name field
    cy.get('[data-cy="name-input"]').type('Cypress Test');
    
    // Assert: Check if the value matches the input
    cy.get('[data-cy="name-input"]').should('have.value', 'Cypress Test');
  });

  it('validates that checkboxes can be checked and unchecked', () => {
    // Arrange: Select 4 random topping IDs
    const ids = [
      Math.ceil(Math.random()*14), 
      Math.ceil(Math.random()*14), 
      Math.ceil(Math.random()*14),
      Math.ceil(Math.random()*14)
    ]; 

    // Act & Assert: Cycle through checking and unchecking
    ids.forEach(id => {
      cy.get(`[data-cy="checkbox-${id}"]`).check({ force: true }).should('be.checked');
      cy.get(`[data-cy="checkbox-${id}"]`).uncheck({ force: true }).should('not.be.checked');
    });
  });

  it('successfully submits the form with valid inputs', () => {
    // Arrange: Define valid topping IDs
    const ids = [1, 2, 3, 4];
    
    // Act: Fill out the order form
    ids.forEach(id => {
      cy.get(`[data-cy="checkbox-${id}"]`).check({ force: true }).should('be.checked');
    });
    
    cy.get('[data-cy="size-button-M"]').click();
    cy.get('[data-cy="crust-dropdown"]').click();
    cy.get(' [data-cy="crust-option-Normal-Kenar"]').click();
    cy.get('[data-cy="name-input"]').type('Mustafa');
    
    // Assert: Verify inputs and submit the order
    cy.get('[data-cy="name-input"]').should('have.value', 'Mustafa');
    cy.get('[data-cy="submit-order-button"]').should('not.be.disabled').click();
    
    // Final Assert: Confirm order success message is visible
    cy.contains('SİPARİŞ ALINDI').should('be.visible');
  });
});