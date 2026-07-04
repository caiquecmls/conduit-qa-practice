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

    createArticle(title, description, articleBody, tags) {
        this.typeTitle(title);
        this.typeDescription(description);
        this.typeArticleBody(articleBody);
        this.typeTags(tags);
        this.buttonPublishArticle();
    }

}

export const newArticle = new NewArticle();