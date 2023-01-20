describe('Login de usuário no alura pic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })
    
    it('fazer login de usuário válido', () => {
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible')
    })
})