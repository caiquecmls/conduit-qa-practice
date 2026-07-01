export const elements = {
    inputEmail: () => cy.get('input[formcontrolname="email"]'),
    inputPassword: () => cy.get('input[formcontrolname="password"]'),
    submitLoginButton: () => cy.get('.btn'),
    messageErro: () => cy.get('ul[class="error-messages"]')
}