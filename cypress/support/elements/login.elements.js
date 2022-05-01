export default class Login {
    static url(){
        return cy.visit('/')
    }
    static menuEntre(){
        return cy.contains('#nav-header-menu > a','Entre')
    }
    static clicarNoMenuEntre(){
        this.menuEntre().click()
    }
    static btnAceitarCookies(){
        return cy.get('[data-testid="action:understood-button"]')
    }
    static clicarBtnAceitarCookies(){
        this.btnAceitarCookies().click()
    }
    static pegarMsgDeSucessoAoAceitarCookies(){
        return cy.get('.cookie-consent-snackbar__message')
    }
    static btnFecharMsgDeSucessoAoAceitarCookies(){
        return cy.get('.cookie-consent-snackbar__close')
    }
    static clicarBtnFecharMsgDeSucessoAoAceitarCookies(){
        this.btnFecharMsgDeSucessoAoAceitarCookies().click()
    }
}