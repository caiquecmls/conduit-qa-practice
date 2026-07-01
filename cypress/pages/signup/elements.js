export const elements = {
    inputUserName: () => cy.get('input[formcontrolname="username"]'),
    inputEmail: () => cy.get('input[formcontrolname="email"]'),
    inputPassword: () => cy.get('input[formcontrolname="password"]'),
    buttonSignUp: () => cy.get('button[type="submit"]'),
    messageErro: () => cy.get('.error-messages > li')
}