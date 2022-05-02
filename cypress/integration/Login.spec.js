/// <reference types = "cypress" />
const loginPage = require('../support/pages/login.page')

describe('Testes funcionais da tela de Login', () => {
    beforeEach(() => {
        loginPage.acessarTelaLogin()
    })
    it('Logar com sucesso', () => {
        loginPage.realizarLogin()
    })
    it.only('Login que não foi bem sucedido por causa da senha inválida', () => {
        loginPage.realizarLoginInformandoSenhaInvalida()
    })
    it('Login que não foi bem sucedido por causa do email não cadastrado', () => {
        loginPage.realizarLoginInformandoEmailNaoCadastrado()
    })
})