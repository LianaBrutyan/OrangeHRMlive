import AdminSectionElement from "../../Locators/addnewUserLoc";
import NegativeTestingLoc from "../../Locators/negativeTestingLoc";

class UserManagementPage {
    button(selector) {
        cy.get(selector).click()
    }
    LeaveEmptyFields(){
            cy.get(NegativeTestingLoc.userRoleStatusField)
                .should("not.have.value")
                .then(() => {
                    cy.get(NegativeTestingLoc.errorMessages)
                        .eq(0)
                        .should('be.visible')
                        .and('contain', 'Required')
                })
            cy.get(NegativeTestingLoc.employeeNameField)
                .should("not.have.value")
                .then(() => {
                    cy.get(NegativeTestingLoc.errorMessages)
                        .eq(1)
                        .should('be.visible')
                        .and('contain', 'Required')
                })
        cy.get('.oxd-input--active.oxd-input--error')
            .eq(0)
            .should("not.have.value")
            .then(() => {
                cy.get(NegativeTestingLoc.errorMessages)
                    .eq(3)
                    .should('be.visible')
                    .and('contain', 'Required')
            })
        cy.get('.oxd-input--active.oxd-input--error')
            .eq(0)
            .type('asdf')
            .then(() => {
                cy.get(NegativeTestingLoc.errorMessages)
                    .eq(3)
                    .should('be.visible')
                    .and('contain', 'Should be at least 5 characters')
            })
}
    SelectUserRole(){
        cy.get(AdminSectionElement.userRoleDropdown)
            .eq(0)
            .click().then(()=> {
            cy.get(AdminSectionElement.userRoleOption)
                .contains('Admin')
                .click()
        })
    }
    FillEmployeeName(){
        cy.get(AdminSectionElement.employeeName)
            .click().focused().type('m')
            .wait(2000)
            .type('{downArrow}{enter}');
    }
    SelectStatusField() {
        cy.get(AdminSectionElement.userStatusDropdown).eq(1).click().then(() => {
            cy.get(AdminSectionElement.userStatusOption).contains('Enabled').click();
        })
    }
    FillUserName() {
        cy.get('.oxd-input')
            .eq(1)
            .clear()

        cy.get('.oxd-input')
            .eq(1)
            .type(AdminSectionElement.newUsername)
    }
    FillPassword(){
        cy.get(AdminSectionElement.password)
            .eq(0)
            .type(AdminSectionElement.newPassword)
    }
    FillConfirmPassword(){
        cy.get(AdminSectionElement.password)
            .eq(1)
            .type(AdminSectionElement.newPassword)
    }
    SaveUser(){
        this.button(AdminSectionElement.saveUser)
        cy.wait(3000);
    }
    AssertUser(){
        cy.get('.oxd-table-card')
            .invoke('data', 'data-v-6c07a142')
            .contains(new RegExp("^" + AdminSectionElement.newUsername + "$", "g"))
            .should((elem) => {
                expect(elem.text()).to.equal(AdminSectionElement.newUsername);
            })
    }
}
export default UserManagementPage
