/// <reference types = "cypress" />
const loginPage = require('../support/pages/login.page')

describe('Testes funcionais da tela de Login', () => {
    it('Logar com sucesso', () => {
        loginPage.acessarMenu()
    })
})