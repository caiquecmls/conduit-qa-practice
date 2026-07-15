import { elements } from './elements';

class ArticleFeed {

    articleTitles() {
        return elements.articleTitles();
    }

    articleTag() {
        return elements.articleTag();
    }

    feedNavigationTabs() {
        return elements.feedNavigationTabs();
    }

    selectGlobalFeed(tabs) {
        this.feedNavigationTabs().contains('Global Feed').click()
    }

    selectYourFeed() {
        this.feedNavigationTabs().contains('Your Feed').click()
    }

    validateYourFeedIsActive() {
        this.feedNavigationTabs()
            .contains('Your Feed')
            .should('have.class', 'active');
    }

    validateGlobalFeedIsActive() {
        this.feedNavigationTabs()
            .contains('Global Feed')
            .should('have.class', 'active');
    }

    filterFeedByTag(tag) {
        this.articleTag()
            .contains(tag).click();
    }

    articleCreatedTags() {
        return elements.articleCreatedTags();
    }


    validateArticleTag(tag) {
        this.articleCreatedTags()
            .should('contain.text', tag);
    }

    buttonHeart() {
        return elements.buttonHeart();
    }

    paginationButtons() {
        return elements.paginationButtons();
    }

    clickPage(numPagina) {
        this.paginationButtons().contains(numPagina).click()
    }


    validateActivePage(pageNumber) {
        this.paginationButtons()
            .contains(pageNumber)
            .parent()
            .should('have.class', 'active');
    }

    clickArticleLikeButton(title) {
        this.articleTitles()
            .contains(title)
            .parents('.article-preview')
            .find('button')
            .click();
    }

    validateArticleIsLiked(title) {
        this.articleTitles()
            .contains(title)
            .parents('.article-preview')
            .find('.btn')
            .should('contain', '1');
    }

    openArticle(title) {
        this.articleTitles()
            .contains(title)
            .closest('a.preview-link')
            .click();
    }
}

export const articleFeed = new ArticleFeed();