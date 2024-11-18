import VisitPage from "../Pages/VisitPage";
import LoginPage from "../Pages/LoginPage";
import NewUserPage from "../Pages/AddNewUser";

describe('Test Orangehrmlive site', () => {
    const username = 'Admin';
    const password = 'admin123';
    const loginPage = new LoginPage()
    const visitPage = new VisitPage()
    const newUserPage = new NewUserPage()
    it(' Adding a New User in the Admin Section', () => {

        visitPage.open()
        loginPage.login(username, password)
        loginPage.openAdmin()
        newUserPage.ClickAddButton()
        newUserPage.SelectUserRole()
        newUserPage.FillEmployeeName()
        newUserPage.SelectStatusField()
        newUserPage.FillUserName()
        newUserPage.FillPassword()
        newUserPage.FillConfirmPassword()
        newUserPage.SaveUser()
        newUserPage.AssertUser()

    })


})
