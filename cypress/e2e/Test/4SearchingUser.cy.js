import VisitPage from "../Pages/VisitPage";
import LoginPage from "../Pages/LoginPage";
import SearchUserRole from "../Pages/SearchingUser";

describe('Test Orangehrmlive site', () => {
    const username = 'Admin';
    const password = 'admin123';
    const loginPage = new LoginPage()
    const visitPage = new VisitPage()
    const searchingUserRole=new SearchUserRole()
    it('Searching for Users by Role', () => {

        visitPage.open()
        loginPage.login(username, password)
        loginPage.openAdmin()
        searchingUserRole.FilterRole()
        searchingUserRole.VerifyRoleESS()
    })
})
