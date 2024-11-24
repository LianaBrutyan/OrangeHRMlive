import {AdminSectionElement,EditUser} from "../../Locators/UserManagementLocators";
import {constants, dublUser, users} from "../../constants";


class  AdminPage {

    ClickAddButton() {
        //cy.get(AdminSectionElement.addButton).click()
        cy.get('.oxd-button').contains('Add').click()
            .wait(2000)
    }
    SelectUserRole() {
        cy.get(AdminSectionElement.userRoleDropdown)
            .eq(0).click()
            cy.get(AdminSectionElement.userRoleOption)
                .contains(constants.AdminRol)
                .click()
    }
    FillEmployeeName() {
        cy.get(AdminSectionElement.employeeName)
            .click().focused().type('m')
            .wait(2000)
            .type('{downArrow}{enter}');
    }
    SelectStatusField() {
        cy.get(AdminSectionElement.userStatusDropdown).eq(1).click()
        cy.get(AdminSectionElement.userStatusOption).contains(constants.Status2).click()
    }
    CreateNewUser(){
        cy.get(AdminSectionElement.userRoleDropdown)
            .eq(0).click()
        cy.get(AdminSectionElement.userRoleOption)
            .contains(constants.Role)
            .click()
        cy.get(AdminSectionElement.userStatusDropdown).eq(1).click()
        cy.get(AdminSectionElement.userStatusOption).contains(constants.Status2).click()
        cy.get(AdminSectionElement.employeeName)
            .click().focused().type('a')
            .wait(2000)
            .type('{downArrow}{enter}');
        cy.get(AdminSectionElement.usernameField).eq(1).type(constants.username2)
        cy.get(AdminSectionElement.password).eq(0).type(constants.newUserPassword)
        cy.get(AdminSectionElement.password).eq(1).type(constants.newUserPassword)
    }
    LogOut(){
        cy.get(AdminSectionElement.logOut).contains('Logout').click()
    }
ClickAvatar(){
        cy.get(AdminSectionElement.useravatar).click()
}
    FillUserName(username) {
        cy.get(AdminSectionElement.usernameField).eq(1).type(username)
    }
    FillPassword() {
        cy.get(AdminSectionElement.password).eq(0).type(dublUser.Password)
    }
    FillConfirmPassword() {
        cy.get(AdminSectionElement.password).eq(1).type(dublUser.Password)
    }
    SearchUser(username){
        this.FillUserName(username)
        cy.get(AdminSectionElement.search).click()
        cy.wait(3000)
    }

    ClickEditButton() {
        cy.get(AdminSectionElement.editButton).eq(0).click()
    }
    EditRole() {
        cy.get(AdminSectionElement.userRoleDropdown)
            .eq(0)
            .click()
        cy.get(AdminSectionElement.userRoleOption)
                .contains(constants.Role)
                .click()
    }
    SelectCheckbox() {
        cy.get(AdminSectionElement.checkbox).click()
    }
    Delete() {
        cy.get(AdminSectionElement.deleteButton).click()
    }
    ConfirmDeletion() {
        cy.get(AdminSectionElement.confirmButton)
            .contains('Yes, Delete').click()
    }
    DeleteUser(username) {
        this.SearchUser(username)
        this.SelectCheckbox()
        this.Delete()
        this.ConfirmDeletion()
    }
    FilterRole() {
        cy.get(AdminSectionElement.userRoleDropdown)
            .eq(0).click()
        cy.get(AdminSectionElement.userRoleOption)
            .contains(constants.Role)
            .click()
        cy.get(EditUser.search)
            .contains('Search').click()
    }
    ChangePassword() {
        cy.get(AdminSectionElement.passwordButton)
            .contains('Yes').click()
        cy.get(AdminSectionElement.password).eq(0)
            .type(constants.ChangedPassword)
    }
    ConfirmPassword() {
        cy.get(AdminSectionElement.password).eq(1)
            .type(constants.ChangedPassword)
    }
    Save() {
        cy.get(AdminSectionElement.saveUser).click()
        cy.wait(3000);
    }
    EditStatus() {
        cy.get(AdminSectionElement.userStatusDropdown)
            .eq(1).click()
        cy.get(AdminSectionElement.userStatusOption)
            .contains(constants.Status1)
            .click()
    }
    Login() {

            cy.get(AdminSectionElement.username).type(constants.username2)
            cy.get(AdminSectionElement.password).type(constants.newUserPassword)
            cy.get(AdminSectionElement.loginButton).click()
        }
}

export default AdminPage
