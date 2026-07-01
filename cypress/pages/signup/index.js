import { elements } from './elements';

class SignUp {

    inputUserName() {
        return elements.inputUserName();
    }

    inputEmail() {
        return elements.inputEmail();
    }

    inputPassword() {
        return elements.inputPassword();
    }



    buttonSignUp() {
        return elements.buttonSignUp();
    }

    typeUserName(username) {
        this.inputUserName().type(username);
    }

    typeEmail(email) {
        this.inputEmail().type(email);
    }

    typePassword(password) {
        this.inputPassword().type(password);
    }

    errorMessage() {
        return elements.messageErro();
    }

    validateError(message) {
        this.errorMessage().should('contain.text', message);
    }

    checkSignUpButtonIsDisabled(){
        signup.buttonSignUp().should('be.disabled');
    }

    registerUser(username, email, password) {

        this.inputUserName().clear()
        if (username) {
            this.typeUserName(username);
        }
        this.inputEmail().clear()
        if (email) {
            this.typeEmail(email);
        }
        this.inputPassword().clear()
        if (password) {
            this.typePassword(password);
        }

        if (username && email && password) {
            this.buttonSignUp().click()
        }

    }
}

export const signup = new SignUp();