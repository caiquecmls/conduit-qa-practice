export const elements = {
    inputTitle: () => cy.get('input[formcontrolname="title"]'),
    inputDescription: () => cy.get('input[formcontrolname="description"]'),
    inputBody: () => cy.get('textarea[formcontrolname="body"]'),
    inputTags: () => cy.get('input[placeholder="Enter tags"]'),
    buttonPublishArticle: () => cy.get('[type="button"]')
};