import ResetPasswordLoc from "../../Locators/resetPasswordLoc";

class ResetPassword {

    button(selector) {
        cy.get(selector).click()
    }
    Search() {
        this.button(ResetPasswordLoc.search)
        cy.wait(2000);
    }
    ChangePassword() {
        cy.get(ResetPasswordLoc.changePassButton)
            .contains('Yes').click().then(() => {
            cy.get(ResetPasswordLoc.password).eq(0).type('Testing1')
        })
    }
    ConfirmPassword(){
        cy.get(ResetPasswordLoc.password).eq(1).type('Testing1')
    }
    Save(){
        cy.get(ResetPasswordLoc.save).click()
        cy.wait(3000);
    }
    AssertMessage(){
        cy.contains('Successfully Updated').should('be.visible')
    }
}
export default ResetPassword