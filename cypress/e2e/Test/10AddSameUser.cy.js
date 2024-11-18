import VisitPage from "../Pages/VisitPage";
import LoginPage from "../Pages/LoginPage";
import UserPage from "../Pages/UserPage";

describe('Test Orangehrmlive site', () => {
    const username = 'Admin';
    const password = 'admin123';
    const loginPage = new LoginPage()
    const visitPage = new VisitPage()
    const userPage=new UserPage()

    beforeEach(() => {
        visitPage.open();
        loginPage.login(username,password);
        loginPage.openAdmin();
    });

    it('Adding a New User and verify correct message', () => {
        userPage.AddUser()
        userPage.FillUserForm()
        userPage.Save()
        userPage.AssertCorrectMessage()
    })

    it('Should show error when username already exists', () => {
        userPage.AddUser()
        userPage.FillUserForm()
        userPage.Save()
        userPage.VerifyErrorMessage()
    })
})
