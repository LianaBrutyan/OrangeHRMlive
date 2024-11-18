import VisitPage from "../Pages/VisitPage";
import LoginPage from "../Pages/LoginPage";
import UserPage from "../Pages/UserPageEdit";

describe('Test Orangehrmlive site', () => {
    const username = 'Admin';
    const password = 'admin123';
    const loginPage = new LoginPage()
    const visitPage = new VisitPage()
    const userPage=new UserPage()

    it('Editing an Existing User’s Role', () => {

        visitPage.open()
        loginPage.login(username, password)
        loginPage.openAdmin()
        userPage.TypeUsername()
        userPage.Search()
        userPage.ClickEditButton()
        userPage.EditRole()
        userPage.SaveEditedRole()
        userPage.AssertUserRole()
    })
})
