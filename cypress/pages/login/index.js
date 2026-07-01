import { elements } from './elements';

class Login {

    inputEmail() {
        return elements.inputEmail();
    }

    inputPassword() {
        return elements.inputPassword();
    }

    typeEmail(email) {
        this.inputEmail().type(email);
    }

    typePassword(password) {
        this.inputPassword().type(password);
    }

    messageErro(){
        return elements.messageErro()
    }

    submitLoginButton(button) {
        return elements.submitLoginButton()
    }


    submitLogin() {
        this.submitLoginButton().click();
    }

    inserirCredenciais(email, password) {
        this.inputEmail().clear();
    
        if (email) {
            this.typeEmail(email);
        }

        this.inputPassword().clear();


        if (password) {
            this.typePassword(password);
        }
        
    }

}

export const login = new Login();