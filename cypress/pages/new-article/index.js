import { elements } from './elements';

class NewArticle {
    inputTitle() {
        return elements.inputTitle();
    }

    inputDescription() {
        return elements.inputDescription();
    }

    inputArticleBody() {
        return elements.inputBody();
    }

    inputTags() {
        return elements.inputTags();
    }

    buttonPuslish() {
        return elements.buttonPublishArticle();
    }

    typeTitle(title) {
        this.inputTitle().type(title);
    }

    typeDescription(description) {
        this.inputDescription().type(description);
    }

    typeArticleBody(articleBody) {
        this.inputArticleBody().type(articleBody);
    }

    typeTags(tags) {
        this.inputTags().type(tags);
    }

    buttonPublishArticle() {
        this.buttonPuslish().click()
    }

    messageErro(message) {
        elements.messageErro().should('contain', message)
    }

    createArticle(title, description, articleBody, tags) {
        this.inputTitle().clear();
        if (title) {
            this.typeTitle(title);
        }
        this.inputDescription().clear();
        if (description) {
            this.typeDescription(description);
        }
        this.inputArticleBody().clear();
        if (articleBody) {
            this.typeArticleBody(articleBody);
        }
        this.inputTags().clear
        if (tags) {
            this.typeTags(tags);
        }

        if (title && description && articleBody && tags) {
            this.buttonPublishArticle();
        }

    }

}

export const newArticle = new NewArticle();