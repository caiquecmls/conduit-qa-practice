import { elements } from './elements';

class Header {

    loginSignin() {
        return elements.headerLoginButton().click();
    }

    goToLogin() {
        this.loginSignin();
    }

    headerHomeButton() {
        return elements.headerHomeButton().click();
    }

    headerSettingsButton() {
        return elements.headerSettings().click();
    }

    goToSettings() {
        this.headerSettingsButton();
    }

    headerNewArticleButton() {
        return elements.headerNewArticle().click();
    }

    goToNewArticle() {
        this.headerNewArticleButton();
    }

    goToHome() {
        this.loginSignin();
    }

    userPic() {
        return elements.headerImg();
    }

    signUp() {
        return elements.headerSignUp().click();
    }

    goToSignUp() {
        this.signUp();
    }

}

export const header = new Header();