export const elements = {
    headerLoginButton: () => cy.get('[href="/login"]'),
    headerHomeButton: () => cy.get('a[href="/Home"]'),
    headerImg: () => cy.get('img.user-pic'),
    headerSignUp: () => cy.get('[href="/register"]'),
    headerSettings: () => cy.get('a[href="/settings"]'),
    headerNewArticle : () => cy.get('a[href="/editor"]')
}