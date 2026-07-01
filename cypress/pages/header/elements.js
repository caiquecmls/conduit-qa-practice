export const elements = {
    headerLoginButton: () => cy.get('[href="/login"]'),
    headerHomeButton: () => cy.get('a[href="/Home"]'),
    headerImg: () => cy.get('img.user-pic')
}