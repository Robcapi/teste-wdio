import loginPage from "../pageobjects/login.page";

describe('Funcionalidade: Login', () => {
    //Testes de Login aqui

// Isso vai rodar antes de CADA teste dentro deste describe deixando o codigo mais enxuto
    beforeEach(async () => {
        await loginPage.abrirMenu()
    });

    afterEach(async () => {
        await browser.relaunchActiveApp()
        //Isso vai fazer o app resetar a cada it
    });

    it('Deve fazer login com sucesso', async () => {
        await loginPage.preencherLogin('robson@teste.com', 'senha@123')
        expect(await loginPage.mensagemAlerta()).toEqual('You are logged in!')
        //Validação de sucesso
    });

    it('Deve falhar ao fazer login com e-mail inválido', async () => {
        await loginPage.preencherLogin('teste@teste', 'senha@123')
        await loginPage.mensagemErro('Please enter a valid email address')
        //Validação de erro..
    });

    it('Deve falhar ao fazer login com senha inválida', async () => {
        await loginPage.preencherLogin('teste@teste.com', '1234')
        await loginPage.mensagemErro('Please enter at least 8 characters')
        //Validação de erro...
    });


    describe('Funcionalidade: Cadastro', () => {
    //Testes de cadastro aqui 

      // Isso vai rodar antes de CADA teste dentro deste describe deixando o codigo mais enxuto
        beforeEach(async () => {
            await loginPage.botaoSignup.click();
        });

        it('Deve criar um usuário com sucesso', async () => {
            await loginPage.preencherCadastro('robson@teste.com', '12345678', '12345678')
            expect(await loginPage.mensagemAlerta()).toEqual('You successfully signed up!')
            //Validção de sucesso...
        });

        it('Deve falhar ao criar usuário com e-mail inválido', async () => {
            await loginPage.preencherCadastro('robson@teste', '12345678', '12345678')
            await loginPage.mensagemErro('Please enter a valid email address')
            //Validção de erro...
        });

        it('Deve falhar ao criar usuário com senha inválida', async () => {
            await loginPage.preencherCadastro('robson@teste.com', '123', '123')
            await loginPage.mensagemErro('Please enter at least 8 characters')
            //Validação de erro...
        });

    });

});