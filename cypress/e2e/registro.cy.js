describe('Registro de usuário no alura pic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('verifica mensagens de validação', () => {
        cy.contains('a', 'Register now').click()

        cy.get('ng-component h4.text-center')
            .should('have.text', 'Register to embrace a new world!')
        cy.get('form.form button.btn').click()
        cy.get('input[formcontrolname="email"] + ap-vmessage > small')
            .should('have.text', 'Email is required!')
        cy.get('form.form button.btn').click()
        cy.get('input[formcontrolname="fullName"] + ap-vmessage > small')
            .should('have.text', 'Full name is required!')
        cy.get('input[formcontrolname="userName"] + ap-vmessage > small')
            .should('have.text', 'User name is required!')
        cy.get('input[formcontrolname="password"] + ap-vmessage > small')
            .should('have.text', 'Password is required!')
    })
})