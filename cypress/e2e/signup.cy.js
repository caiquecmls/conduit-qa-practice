import { header } from '../pages/header';
import { signup } from '../pages/signup';
import { createUser } from '../support/factories/userFactory';
import signupData from '../fixtures/signupData.json';

const user = createUser();

describe('Cadastro', () => {

    beforeEach(() => {
        cy.visit("/")
        header.goToSignUp();
    })

    it('deve realizar cadastro com dados válidos', () => {
        signup.registerUser(user.username, user.email, user.password);
        header.userPic().should('be.visible');
    });

    it('deve impedir cadastro com username menor que o permitido', () => {
        signup.registerUser(signupData.usuarioComUsernameCurto.username, user.email, user.password);
        signup.validateError(signupData.messages.username.curto);
    })

    it('deve impedir cadastro com email inválido', () => {
        signup.registerUser(user.username, signupData.usuarioComEmailInvalido.email, user.password);
        signup.validateError(signupData.messages.email.invalido);
    });

    it('deve impedir cadastro com senha menor que o permitido', () => {
        signup.registerUser(user.username, user.email, signupData.usuarioComSenhaCurta.password);
        signup.validateError(signupData.messages.senha.curta);
    })

    it('deve impedir cadastro sem nome', () => {
        signup.registerUser(signupData.usuarioSemNome.username, user.email, user.password);
        signup.checkSignUpButtonIsDisabled();
    });

    it('deve impedir cadastro sem email', () => {
        signup.registerUser(user.username, signupData.usuarioSemEmail.email, user.password);
        signup.checkSignUpButtonIsDisabled();
    });

    it('deve impedir cadastro sem senha', () => {
        signup.registerUser(user.username, user.email, signupData.usuarioSemSenha.password);
        signup.checkSignUpButtonIsDisabled();
    });

    it('deve impedir cadastro com username já existente', () => {
        signup.registerUser(signupData.usuarioExistente.username, user.email, signupData.usuarioExistente.password);
        signup.validateError(signupData.messages.username.existente);
    });

    it('deve impedir cadastro com email já existente', () => {
        signup.registerUser(user.username, signupData.usuarioExistente.email, signupData.usuarioExistente.password);
        signup.validateError(signupData.messages.email.existente);
    });

    it('deve manter o botão desabilitado quando os campos estiverem vazios', () => {
        signup.registerUser(signupData.usuarioSemPreencher.username, signupData.usuarioSemPreencher.email, signupData.usuarioSemPreencher.password);
        signup.checkSignUpButtonIsDisabled();
    });

    it('deve impedir cadastro com nome de usuário contendo apenas espaços', () => {
        signup.registerUser(signupData.usuarioNomeComEspaço.username, user.email, user.password)
        signup.validateError(signupData.messages.username.espaco);
    });

    it.only('Deve exibir mais de uma mensagem de erro', () => {
        cy.intercept('POST', '**api/users').as('register');
        signup.registerUser(signupData.usuarioExistente.username, signupData.usuarioExistente.email, user.password); 
        cy.wait('@register');
        signup.validateError(signupData.messages.username.existente);
        signup.validateError(signupData.messages.email.existente);
    })

})