class FormPage {
//seletores
get menuForm () { return  $("accessibility id:Forms")}
get campoTexto () { return $("accessibility id:text-input")}
get labelResultado () { return $("accessibility id:input-text-result")}
get dropDow () { return $("-android uiautomator:new UiSelector().resourceId(\"text_input\")")}

  //metodos  

  async abrirMenuForm() {
    await this.menuForm.click()
  }

  async preencherTexto(texto) {
    await this.campoTexto.setValue(texto)
  }

  async validarTexto() {
    return await this.labelResultado.getText()
  }

  async selecionarOpcao(txtOpcao){
    //melhorar este metodo
    await this.dropDow.click()
    const opcao = $(`-android uiautomator:new UiSelector().text(\"${txtOpcao}\")`)
    await opcao.click()
  }

  async validarOpcao() {
    return await this.dropDow.getText()
  }

}
export default new FormPage()