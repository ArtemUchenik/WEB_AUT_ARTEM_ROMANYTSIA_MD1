describe('Selectable Demo', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/selectable');
  });

  it('should highlight the correct items', () => {
    cy.contains('Grid').click();

    cy.contains('Two').click();
    cy.contains('Four').click();
    cy.contains('Six').click();
    cy.contains('Eight').click();

    cy.contains('Two').should('have.class', 'active');
    cy.contains('Four').should('have.class', 'active');
    cy.contains('Six').should('have.class', 'active');
    cy.contains('Eight').should('have.class', 'active');

    cy.contains('One').should('not.have.class', 'active');
    cy.contains('Three').should('not.have.class', 'active');
    cy.contains('Five').should('not.have.class', 'active');
    cy.contains('Seven').should('not.have.class', 'active');
    cy.contains('Nine').should('not.have.class', 'active');
  });
});