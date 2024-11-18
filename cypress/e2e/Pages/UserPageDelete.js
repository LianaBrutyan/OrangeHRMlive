import DeleteUserElem from "../../Locators/deleteUserLoc";

class DeleteUser {
    button(selector){
        cy.get(selector).click()
    }
    SelectCheckbox() {
        cy.get(DeleteUserElem.checkbox).click()
    }
    Delete() {
        cy.get(DeleteUserElem.deleteButton).click()
    }
    ConfirmDeletion() {
        cy.get(DeleteUserElem.confirmButton).contains('Yes, Delete').click()
    }
    AssertNotFoundUser(){
            this.button(DeleteUserElem.search)

        }
        Message(){
        cy.contains('No Records Found').should('be.visible')
        }
}

export default DeleteUser
