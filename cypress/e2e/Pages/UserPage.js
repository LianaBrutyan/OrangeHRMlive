import NewUser from "../../Locators/sameUserLoc";
import NegativeTestingLoc from "../../Locators/negativeTestingLoc";

class UserPage {
    button(selector) {
        cy.get(selector).click()
    }
    AddUser() {
        this.button(NewUser.addButton)
    }
    FillUserForm()
    {
        cy.get(NewUser.userRoleDropdown)
            .eq(0)
            .click().then(() => {
            cy.get(NewUser.userRoleOption)
                .contains('Admin')
                .click()
        })
            cy.get(NewUser.employeeName)
                .click().focused().type('m')
                .wait(2000)
                .type('{downArrow}{enter}');
            cy.get(NewUser.userStatusDropdown).eq(1).click().then(() => {
                cy.get(NewUser.userStatusOption).contains('Enabled').click();
            })
            cy.get(NewUser.username).eq(1).type(NewUser.newUsername)
            cy.get(NewUser.password).eq(0).type(NewUser.newPassword)
            cy.get(NewUser.password).eq(1).type(NewUser.newPassword)
    }
Save(){
    this.button(NewUser.saveUser)
    cy.wait(3000);
}
    AssertCorrectMessage() {
        cy.contains('Successfully Saved').should('be.visible')
    }
    VerifyErrorMessage() {
        cy.get(NewUser.username)
            .eq(1)
        cy.get(NewUser.errorMessages)
            .should('be.visible')
            .and('contain', 'Already exists')
    }
}
export default UserPage
