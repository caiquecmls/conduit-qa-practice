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

    goToHome() {
        this.loginSignin();
    }

    userPic(){
        return elements.headerImg();
    }

}

export const header = new Header();