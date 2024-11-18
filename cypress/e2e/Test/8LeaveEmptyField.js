import VisitPage from "../Pages/VisitPage";
import LoginPage from "../Pages/LoginPage";
import NewUserPage from "../Pages/AddNewUser";
import UserManagementPage from "../Pages/NegativeTest";

describe('Test Orangehrmlive site', () => {
    const username = 'Admin';
    const password = 'admin123';
    const loginPage = new LoginPage()
    const visitPage = new VisitPage()
    const newUserPage=new NewUserPage()
    const userManagementPage=new UserManagementPage()

    it('Verifying Mandatory Fields and Validation Messages', () => {

        visitPage.open()
        loginPage.login(username, password)
        loginPage.openAdmin()
        newUserPage.ClickAddButton()
        newUserPage.SaveUser()
        userManagementPage.LeaveEmptyFields()
        userManagementPage.SelectUserRole()
        userManagementPage.FillUserName()
        userManagementPage.FillEmployeeName()
        userManagementPage.FillPassword()
        userManagementPage.FillConfirmPassword()
        userManagementPage.SelectStatusField()
        userManagementPage.SaveUser()
        userManagementPage.AssertUser()
    })
})
