import { login } from '../pages/login';
import loginData from '../fixtures/loginData.json';
import { header } from '../pages/header';

describe('Login', () => {
    beforeEach(() => {
        cy.visit("/")
        header.goToLogin();
    });

    it('deve fazer login com credenciais válidas', () => {
        login.inserirCredenciais(loginData.usuarioValido.email, loginData.usuarioValido.password);
        login.submitLogin()
        header.userPic().should('be.visible')
    });

    it('não deve fazer login com credenciais inválidas', () => {
        login.inserirCredenciais(loginData.usuarioInvalido.email, loginData.usuarioInvalido.password);
        login.submitLogin()
        login.messageErro().should('have.text', 'email or password is invalid')
    })

    it('não deve habilitar botão entrar sem o email preenchido', () => {
        login.inserirCredenciais(loginData.usuarioSemEmail.email, loginData.usuarioValido.password);
        login.submitLoginButton().should('be.disabled')
    })

    it('não deve habilitar botão entrar sem a senha preenchida', () => {
        login.inserirCredenciais(loginData.usuarioValido.email, loginData.usuarioSemSenha.password);
        login.submitLoginButton().should('be.disabled')
    })
});