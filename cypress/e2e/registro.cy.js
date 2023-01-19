describe('Registro de usuário no alura pic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('verifica mensagens de validação', () => {
        cy.contains('a', 'Register now').click()

        cy.get('ng-component h4.text-center')
            .should('have.text', 'Register to embrace a new world!')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })

    it('verifica mensagem de e-mail inválido', () => {
        cy.contains('a', 'Register now').click()

        cy.get('input[formcontrolname="email"]').type('douglaswillamis')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
    })
})