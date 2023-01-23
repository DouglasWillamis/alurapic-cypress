describe('Login de usuário no alura pic', () => {
    it('fazer login do flavio', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('api_server')}/user/login`,
            body: Cypress.env()
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).is.not.empty
            expect(response.body).to.have.property('id')
            expect(response.body.id).to.be.equal(1)
            expect(response.body).to.have.property('email')
            expect(response.body.email).to.be.equal('flavio@alurapic.com.br')
        })
    })
})