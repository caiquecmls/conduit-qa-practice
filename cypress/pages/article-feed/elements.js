export const elements = {
    articleTitles: () => cy.get('.preview-link h1'),
    articleTag: () => cy.get('[class="tag-default tag-pill"]'),
    articleCreatedTags: () => cy.get('[class="tag-default tag-pill tag-outline"]'),
    buttonHeart: () => cy.get('[class="btn btn-sm btn-outline-primary"]'),
    feedNavigationTabs: () => cy.get('[class="nav nav-pills outline-active"] a'),
    paginationButtons: () => cy.get('[class="page-link"]')
}