describe('Login de usuário no alura pic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })
    
    it('fazer login de usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a', '(Logout)').should('be.visible')
    })

    it('fazer login de usuário inválido', () => {
        cy.login('dougnotfunny', 'elloco')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
})