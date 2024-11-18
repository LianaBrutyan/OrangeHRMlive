import LoginPage from "../Pages/LoginPage";
import VisitPage from "../Pages/VisitPage";
import UserPage from "../Pages/UserPageEdit";
import ResetPassword from "../Pages/ResetPasswordPage";

describe('Test Orangehrmlive site', () => {
    const username = 'Admin';
    const password = 'admin123';
    const loginPage = new LoginPage()
    const visitPage = new VisitPage()
    const userPage = new UserPage()
    const resetPassword=new ResetPassword()

    it('Resetting User Password', () => {

        visitPage.open()
        loginPage.login(username, password)
        loginPage.openAdmin()
        userPage.TypeUsername()
        userPage.Search()
        userPage.ClickEditButton()
        resetPassword.ChangePassword()
        resetPassword.ConfirmPassword()
        resetPassword.Save()
        resetPassword.AssertMessage()
    })
})
