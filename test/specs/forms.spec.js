import formPage from '../pageobjects/forms.page'

describe('Funcionalidade: Tela de formulário', () => {
    beforeEach(async () => {
        formPage.abrirMenuForm()
    });

    it('Deve validar se o texto foi preenchido corretamente', async () => {
        await formPage.preencherTexto('Teste Appium')
        expect(await formPage.validarTexto()).toEqual('Teste Appium')
        await driver.pause(5000)

    });

    it('Validar a seleção do dropdow', async () => {
        await formPage.selecionarOpcao('webdriver.io is awesome')
        expect(await formPage.validarOpcao()).toEqual('webdriver.io is awesome')
        await driver.pause(5000)
    });

    it.only('Deve trocar o botão de on para off', async () => {
        //trocar para on
        const botaoOnOff = await driver.$("accessibility id:switch");
        await botaoOnOff.click();
        await driver.pause(5000)
        //trocar para off
        await browser.swipe({
        direction: 'left',                  // Swipe from right to left
        duration: 5000,                     // Last for 5 seconds
        percent: 0.1,                       // Swipe 50% of the scrollableElement
        scrollableElement: botaoOnOff,  // The element to swipe within
    })
        await driver.pause(5000)
    });
});