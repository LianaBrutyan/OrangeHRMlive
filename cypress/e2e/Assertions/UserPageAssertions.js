import NegativeTestingLoc from "../../Locators/negativeTestingLoc";
import {constants,users} from "../../constants";
import {AdminSectionElement,EditUser} from "../../Locators/UserManagementLocators";

class AssertMessages {

    AssertUser(){
        cy.get('.oxd-table-card')
            .invoke('data', 'data-v-6c07a142')
            .contains(new RegExp("^" + constants.newUsername + "$", "g"))
            .should((elem) => {
                expect(elem.text()).to.equal(constants.newUsername)
            })
    }
    AssertCorrectMessage() {
        cy.contains('Successfully Saved').should('be.visible')
    }
    VerifyErrorMessage() {
        cy.get(AdminSectionElement.usernameField)
            .eq(1)
        cy.get(NegativeTestingLoc.errorMessages)
            .should('be.visible')
            .and('contain', 'Already exists')
    }
    AssertEmptyFieldsErrorMessages(){
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
    }
    ErrorMessageWithInvalidData(){
                cy.get(NegativeTestingLoc.invalidMessage)
                    .contains('Should be at least 5 characters')
                    .should('be.visible')
    }
    AssertUsers(username) {
        cy.get('.oxd-padding-cell')
            .contains(username)
            .should('exist')
    }
    AssertAccessAdminSection(){
cy.get('.oxd-sidepanel').should('not.contain', 'Admin')
    }
    AssertErrorMessageforTimeSection(){
        cy.get('.orangehrm-timesheet-body-message')
            .should('contain','No Timesheets Found')
    }
    AssertErrorMessageforPerformanceSection(){
      cy.get('.orangehrm-paper-container')
          .contains('No Records Found')
    }
    AssertApplyLeave(){
        cy.get('.oxd-topbar-body-nav-tab-item').contains('Apply').click()
        cy.get('.orangehrm-card-container')
            .contains('No Leave Types with Leave Balance')
    }
}

export default AssertMessages
