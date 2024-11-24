import {AdminSectionElement,EditUser} from "../../Locators/UserManagementLocators";
import {constants,users} from "../../constants";

class LoginPage {
    visit(){
        cy.visit(constants.URL)
    }
    login() {

        cy.get(AdminSectionElement.username).type(constants.username)
        cy.get(AdminSectionElement.password).type(constants.password)
        cy.get(AdminSectionElement.loginButton).click()
    }
}
export default LoginPage
