class LoginPage {
    //Seletores
    get menuLogin() {
        return $('~Login')
    }
    get campoEmail() {
        return $('~input-email')
    }
    get campoSenha() {
        return $('~input-password')
    }
    get botaoLogin() {
        return $('~button-LOGIN')
    }
    get mensagem() {
        return $('id=android:id/message')
    }
    get botaoSignup() {
        return $('~button-sign-up-container')
    }

    get botaoRepetirSenha() {
        return $('~input-repeat-password')
    }

    get botaoFinalizar() {
        return $('~button-SIGN UP')
    }
  
    //Métodos / Ações

    async abrirMenu() {
        await this.menuLogin.click()
    }

    async preencherLogin(email, senha) {
        await this.campoEmail.clearValue()
        await this.campoEmail.setValue(email)
        await this.campoSenha.clearValue()
        await this.campoSenha.setValue(senha)
        await this.botaoLogin.click()
    }

    async mensagemAlerta() {
        return await this.mensagem.getText()
    }

    async mensagemErro(texto) {
        const elemento = $(`//android.widget.TextView[@text="${texto}"]`)
        await expect(elemento).toHaveText(texto)
    }

    async preencherCadastro(email, senha, confirmarsenha) {
        await this.campoEmail.setValue(email)
        await this.campoSenha.setValue(senha)
        await this.botaoRepetirSenha.setValue(confirmarsenha)
        await this.botaoFinalizar.click()
    }
        

}

export default new LoginPage()