const loginElements = require('../elements/login.elements')
export default class Logar {
    static acessarTelaLogin(){
        loginElements.url()
        loginElements.clicarNoMenuEntrar()
        loginElements.clicarParaAceitarCookies()
    }
    static realizarLogin(){
        loginElements.campoEmail().clear()
        loginElements.digitarLogin(Cypress.env('email'))
        loginElements.digitarSenha(Cypress.env('senha'))
        loginElements.clicarNoBotaoEntrar()
        loginElements.secaoAumentoNivelDeSeguraca().invoke('text').should('eq',"Vamos aumentar o nível de segurança da sua conta?")
        loginElements.clicarNaOpcaoFazerIssoDps()
        loginElements.secaoMeusAnuncios().invoke('text').should('eq',"Meus anúncios")
        loginElements.secaoUsuarioLogado().invoke('text').should('eq', Cypress.env('nome'))
    }
    static realizarLoginInformandoSenhaInvalida(){
        loginElements.campoEmail().clear()
        loginElements.digitarLogin(Cypress.env('email'))
        loginElements.digitarSenha('Teste123456@@@')
        loginElements.clicarNoBotaoEntrar()
        loginElements.msgInvalidaAcesso().invoke('text').should('eq', 'Sua senha está incorreta.Esqueceu sua senha? Crie uma nova senha.')
    }
    static realizarLoginInformandoEmailNaoCadastrado(){
        loginElements.campoEmail().clear()
        loginElements.digitarLogin('testandooteste@teste.com.br')
        loginElements.digitarSenha(Cypress.env('senha'))
        loginElements.clicarNoBotaoEntrar()
        loginElements.msgInvalidaAcesso().invoke('text').should('eq', 'Não existe uma conta com este e-mail.Não tem conta? Cadastre-se.')
    }
}