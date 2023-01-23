describe('Registro de usuário no alura pic', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('verifica mensagens de validação', () => {
        cy.registra()
        cy.get('ng-component h4.text-center')
            .should('have.text', 'Register to embrace a new world!')
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })

    it('verifica mensagem de e-mail inválido', () => {
        cy.registra({email: 'douglaswillamis' })
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
    })

    it('verifica mensagem de senha com menos de 8 caracteres', () => {
        cy.registra({password: '123' })
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
    })

    it('verifica mensagem de que o nome do usuário deve estar em minúsculo', () => {
        cy.registra({username: 'TESTE' })
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
    })

    const usuarios = require('../fixtures/usuarios.json')
    usuarios.map((usuario) => {
        it(`registra novo usuário ${usuario.username}`, () => {
            cy.registra(usuario)
        });
    })
})