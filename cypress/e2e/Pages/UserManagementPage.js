import {AdminSectionElement, EditUser} from "../../Locators/UserManagementLocators";
import {constants} from "../../constants";

class UserManagementPage {
    button(selector) {
        cy.get(selector).click()
    }
    fillUserForm(user) {
        cy.get(AdminSectionElement.userRoleDropdown).eq(0)
            .click().then(() => {
            cy.get(AdminSectionElement.userRoleOption)
                .contains(user.role)
                .click()
        })
        cy.get(AdminSectionElement.employeeName)
            .click().focused().type(user.EmployeeName)
            .wait(3000)
            .type('{downArrow}{enter}');
        cy.get(AdminSectionElement.usernameField).eq(1).type(user.username);
        cy.get(AdminSectionElement.password)
            .eq(0).type(user.password);
        cy.get(AdminSectionElement.password)
            .eq(1).type(user.password);
        cy.get(AdminSectionElement.userStatusDropdown)
            .eq(1).click().then(() => {
            cy.get(AdminSectionElement.userStatusOption)
                .contains(user.status).click();
        })
    }
    FillInvalidData() {
        cy.get(AdminSectionElement.usernameField)
            .eq(1).type('asdf')
    }
    FillValidData() {
        cy.get(AdminSectionElement.userRoleDropdown)
            .eq(0).click()
        cy.get(AdminSectionElement.userRoleOption)
            .contains(constants.AdminRol)
            .click()
        cy.get(AdminSectionElement.employeeName)
            .click().focused().type('m')
            .wait(2000)
            .type('{downArrow}{enter}');
        cy.get(AdminSectionElement.userStatusDropdown).eq(1).click()
        cy.get(AdminSectionElement.userStatusOption)
            .contains(constants.Status2).click();
        cy.get('.oxd-input').eq(1).clear()
        cy.get('.oxd-input').eq(1)
            .type(constants.newUsername)
        cy.get(AdminSectionElement.password).eq(0)
            .type(constants.newPassword)
        cy.get(AdminSectionElement.password).eq(1)
            .type(constants.newPassword)
    }
    SaveUser(){
        this.button(AdminSectionElement.saveUser)
        cy.wait(3000);
    }
    SearchUsers(username){
        cy.get(AdminSectionElement.usernameField).eq(1).type(username)
        cy.get(AdminSectionElement.search).click()
    }

}
export default UserManagementPage
