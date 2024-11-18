import VisitPage from "../Pages/VisitPage";
import LoginPage from "../Pages/LoginPage";
import UserPage from "../Pages/UserPageEdit";
import EditUserStatus from "../Pages/EditUserStatus";

describe('Test Orangehrmlive site', () => {
    const username = 'Admin';
    const password = 'admin123';
    const loginPage = new LoginPage();
    const visitPage = new VisitPage();
    const userPage = new UserPage();
    const editUserStatus=new EditUserStatus()

    it('Updating System User Status', () =>
    {
        visitPage.open()
        loginPage.login(username, password)
        loginPage.openAdmin()
        userPage.TypeUsername()
        userPage.Search()
        userPage.ClickEditButton()
        editUserStatus.EditStatus()
        editUserStatus.Save()
        editUserStatus.AssertUserStatus()
    })
})
