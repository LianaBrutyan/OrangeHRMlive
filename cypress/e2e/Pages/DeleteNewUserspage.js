import DeleteUserElem from "../../Locators/deleteUserLoc";
import EditUserRolLoc from "../../Locators/editUserRolLoc";
import AdminSectionElement from "../../Locators/addnewUserLoc";
class DeleteNewUsers {

    DeleteUsers() {
        cy.get(AdminSectionElement.adminSection).contains('Admin').click()
        cy.get(EditUserRolLoc.username).eq(1).type('Name11w')
        cy.get(EditUserRolLoc.search).click()

        cy.get(DeleteUserElem.checkbox).click()

        cy.get(DeleteUserElem.deleteButton).click()
        cy.get(DeleteUserElem.confirmButton).contains('Yes, Delete').click()
    }
}
export default DeleteNewUsers
