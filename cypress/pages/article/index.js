import { elements } from "./elements";

class Article {

    articleTitle() {
        return elements.articleTitle();
    }

    articleAuthor() {
        return elements.articleAuthor();
    }   

        validateArticleUrl(title) {
        const formattedTitle = title.replace(/\s+/g, '-');

        cy.url().should('contain', formattedTitle);
    }

    validatePublishedArticle(title, author) {
        this.articleTitle()
            .should('have.text', title);

        this.articleAuthor()
            .should('contain', author);
    }

}

export const article = new Article();