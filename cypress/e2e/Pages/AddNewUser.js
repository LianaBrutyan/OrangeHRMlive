import AdminSectionElement from "../../Locators/addnewUserLoc";

class NewUserPage {

    button(selector) {
        cy.get(selector).click()
    }
    ClickAddButton() {
        this.button(AdminSectionElement.addButton)
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
        cy.get(AdminSectionElement.username).eq(1).type(AdminSectionElement.newUsername)
    }
    FillPassword(){
        cy.get(AdminSectionElement.password).eq(0).type(AdminSectionElement.newPassword)
    }
    FillConfirmPassword(){
        cy.get(AdminSectionElement.password).eq(1).type(AdminSectionElement.newPassword)
    }
    SaveUser(){
        this.button(AdminSectionElement.saveUser)
        cy.wait(3000);
    }
    AssertUser(){
        cy.get('.oxd-table-card')
            .invoke('data', 'data-v-6c07a142')
            .contains(AdminSectionElement.newUsername)
            .should((elem) => {
            expect(elem.text()).to.equal(AdminSectionElement.newUsername);
        })
    }
}
export default NewUserPage
