export default class Login {
    static url(){
        return cy.visit('/')
    }
    static menuEntrar(){
        return cy.get('.sc-hSdWYo > .sc-bxivhb')
    }
    //----------------------------------------------------------------//
    /* Campos de texto */
    static campoEmail(){
        return cy.get('.sc-dEoRIm > .sc-ebFjAB')
    }
    static campoSenha(){
        return cy.get('.sc-kaNhvL > .sc-ebFjAB')
    }
    //----------------------------------------------------------------//
    /* Métodos que digitam em campo de Texto */
    static digitarLogin(login){
        this.campoEmail().type(login)
    }
    static digitarSenha(senha){
        this.campoSenha().type(senha)
    }
    //----------------------------------------------------------------//
    /* Elementos que envolvem o clique*/
    static btnEntrar(){
        return cy.get('.sc-kGXeez')
    }
    static opcaoFazerIssoDps(){
        return cy.get('.sc-dliRfk')
    }
    static aceitarCookies(){
        return cy.get('#cookie-notice-ok-button')
    }
    //----------------------------------------------------------------//

    /* Métodos que envolvem clique */
    static clicarNoMenuEntrar(){
        this.menuEntrar().click()
    }
    static clicarNoBotaoEntrar(){
        this.btnEntrar().click()
    }
    static clicarNaOpcaoFazerIssoDps(){
        this.opcaoFazerIssoDps().click()
    }
    static clicarParaAceitarCookies(){
        this.aceitarCookies().click()
    }
    //----------------------------------------------------------------//
    static secaoAumentoNivelDeSeguraca(){
        return cy.get('.sc-cqCuEk > .sc-bdVaJa')
    }
    static secaoMeusAnuncios(){
        return cy.get('.sc-qrIAp')
    }
    static secaoUsuarioLogado(){
        return cy.get('.sc-fdJbru > span')
    }
    static msgInvalidaAcesso(){
        return cy.get('.sc-jXQZqI')
    }
}