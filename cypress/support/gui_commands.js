Cypress.Commands.add('login', (username, senha) => {
    cy.get('input[formcontrolname="userName"]').type(username)
    cy.get('input[formcontrolname="password"]').type(senha)
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('registra', ({
        email = '{backspace}',
        fullname = '{backspace}',
        username = '{backspace}',
        password = '{backspace}'
    } = {}) => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.get('input[formcontrolname="email"]').type(email)
    cy.get('input[formcontrolname="fullName"]').type(fullname)
    cy.get('input[formcontrolname="userName"]').type(username)
    cy.get('input[formcontrolname="password"]').type(password)
    cy.contains('button', 'Register').click()
})