import AdminSectionElement from "../../Locators/addnewUserLoc";
import BulkUserCreationLoc from "../../Locators/ bulkUserCreationLoc";

class CreateNewUsersPage {

    clickAddUser() {
        cy.get(AdminSectionElement.addButton).click();
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

        cy.get(AdminSectionElement.username).eq(1).type(user.username);
        cy.get(AdminSectionElement.password)
            .eq(0).type(user.password);
        cy.get(AdminSectionElement.password)
            .eq(1).type(user.password);
        cy.get(AdminSectionElement.userStatusDropdown)
            .eq(1).click().then(() => {
            cy.get(AdminSectionElement.userStatusOption)
                .contains(user.status).click();
            cy.get(AdminSectionElement.saveUser).click()
            cy.wait(3000)
        })
    }
    }



        // verifyUserInList(user) {
        // cy.get('.odd > td').should('contain', user.username); // Check Username
        //  cy.get('.odd > td').should('contain', user.role); // Check Role
        //   cy.get('.odd > td').should('contain', user.status); // Check Status
        // }




export default CreateNewUsersPage