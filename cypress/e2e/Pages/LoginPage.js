import LoginPageElements from "../../Locators/loginPageLoc";
import AdminSectionElement from "../../Locators/addnewUserLoc";

class LoginPage {
    login(username, password) {

        this.type(LoginPageElements.usernameField, username)
        this.type(LoginPageElements.passwordField, password)
        this.button(LoginPageElements.loginButton)
    }
    openAdmin() {
        cy.get(AdminSectionElement.adminSection).contains('Admin').click()
    }
    type(selector,text) {
        cy.get(selector).type(text)
    }
    button(selector){
        cy.get(selector).click()
    }
}

export default LoginPage
