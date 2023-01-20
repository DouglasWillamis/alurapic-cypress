
Cypress.Commands.add('login', (username, senha) => {
    cy.get('input[formcontrolname="userName"]').type(username)
    cy.get('input[formcontrolname="password"]').type(senha)
    cy.get('button[type="submit"]').click()
})