describe('User Form', ()=> {
  it('Should submit user form', ()=> {
    cy.visit('/');

    cy.get('input[name="name"]').type('Manoj Sakura');
    cy.get('input[name="email"]').type('manoj@naruto.in');
    cy.get('input[name="phone"]').type('8341545121');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="name"]').should('have.value', 'Manoj Sakura');
  });
});