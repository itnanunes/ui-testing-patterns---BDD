/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const { profilePage } = require("../support/pages/profile.page")

context('Dado que estou na página inicial', () => {
    context('Quando eu faço login', () => {
        beforeEach(() => {
            cy.login(email, senha)
        })

        it('Então o nome do usuário deve aparecer na página de perfil', () => {
            profilePage.customerName().should('have.text', 'Santana nunes Itna')
        })
    })
})
