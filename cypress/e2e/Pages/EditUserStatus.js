import EditUserStatusLoc from "../../Locators/editStatusLoc";
import AdminSectionElement from "../../Locators/addnewUserLoc";


class ChangeUserStatus {
    EditStatus() {
        cy.get(EditUserStatusLoc.userStatusDropdown)
            .eq(1)
            .click().then(() => {
            cy.get(EditUserStatusLoc.userStatusOption)
                .contains(EditUserStatusLoc.newStatus)
                .click()
        })
    }
    Save() {
        cy.get(EditUserStatusLoc.save).click()
        cy.wait(3000);
    }
    AssertUserStatus(){
        cy.get('.oxd-table-card')
            .invoke('data', 'data-v-6c07a142')
            .contains(AdminSectionElement.newUsername)
            .parent()
            .parent()
            .contains(EditUserStatusLoc.newStatus)
            .should((elem) => {
                expect(elem.text()).to.equal(EditUserStatusLoc.newStatus);
            })
    }
}
export default ChangeUserStatus
