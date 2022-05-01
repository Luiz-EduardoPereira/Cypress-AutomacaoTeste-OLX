const loginElements = require('../elements/login.elements')
export default class Logar {
    static acessarMenu(){
        loginElements.url()
        loginElements.clicarNoMenuEntre()
        /*loginElements.clicarBtnAceitarCookies()
        loginElements.pegarMsgDeSucessoAoAceitarCookies().invoke('text').should('equal', 'Pronto! Suas preferências foram salvas.')
        loginElements.clicarBtnFecharMsgDeSucessoAoAceitarCookies()*/
    }
    static acessarTelaLogin(){
    }
}