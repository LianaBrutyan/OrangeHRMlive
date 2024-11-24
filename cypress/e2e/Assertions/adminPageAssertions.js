import {constants, users} from "../../constants";
import {AdminSectionElement,EditUser} from "../../Locators/UserManagementLocators";
class Assertions{
    AssertUserRole() {
        cy.get('.oxd-table-card')
            .invoke('data', 'data-v-6c07a142')
            .contains(constants.newUsername)
            .parent()
            .parent()
            .contains(constants.Role)
            .should((elem) => {
                expect(elem.text()).to.equal(constants.Role);
            })
    }
    AssertUser() {
        cy.get('.oxd-table-card')
            .invoke('data', 'data-v-6c07a142')
            .contains(constants.newUsername)
            .should((elem) => {
                expect(elem.text()).to.equal(constants.newUsername);
            })
    }
    AssertNotFoundUser(){
        cy.get(AdminSectionElement.search).click()
    }
    Message(){
        cy.contains('No Records Found').should('be.visible')
    }
    VerifybyRole() {
        cy.get(EditUser.tableElem)
        cy.get(EditUser.roleElem)
            cy.wait(3000)
            .contains('ESS')
    }
    AssertMessage(){
        cy.contains('Successfully Updated').should('be.visible')
    }
    AssertUserStatus(){
        cy.get('.oxd-table-card')
            .invoke('data', 'data-v-6c07a142')
            .contains(constants.newUsername)
            .parent()
            .parent()
            .contains(constants.Status1)
            .should((elem) => {
                expect(elem.text()).to.equal(constants.Status1);
            })
    }
}

export default Assertions
