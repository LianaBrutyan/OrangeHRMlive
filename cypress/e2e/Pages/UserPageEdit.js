import EditUserRolLoc from "../../Locators/editUserRolLoc";
import AdminSectionElement from "../../Locators/addnewUserLoc";

class UserPage {

    button(selector) {
        cy.get(selector).click()
    }
    TypeUsername() {
        cy.get(EditUserRolLoc.username).eq(1).type(AdminSectionElement.newUsername)
    }
    Search() {
        this.button(EditUserRolLoc.search)
        cy.wait(2000);
    }
    ClickEditButton() {
        cy.get(EditUserRolLoc.editButton).eq(0).click()
    }
    EditRole() {
        cy.get(AdminSectionElement.userRoleDropdown)
            .eq(0)
            .click().then(() => {
            cy.get(AdminSectionElement.userRoleOption)
                .contains(EditUserRolLoc.newRole)
                .click()
        })
    }
    SaveEditedRole(){
        this.button(AdminSectionElement.saveUser)
        cy.wait(3000);
    }
    AssertUserRole(){
        cy.get('.oxd-table-card')
            .invoke('data', 'data-v-6c07a142')
            .contains(AdminSectionElement.newUsername)
            .parent()
            .parent()
            .contains(EditUserRolLoc.newRole)
            .should((elem) => {
                expect(elem.text()).to.equal(EditUserRolLoc.newRole);
            })
    }
}
export default UserPage
