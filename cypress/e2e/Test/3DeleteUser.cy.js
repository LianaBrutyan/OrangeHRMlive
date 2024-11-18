import LoginPage from "../Pages/LoginPage";
import VisitPage from "../Pages/VisitPage";
import AddNewUser from "../Pages/AddNewUser";
import UserPage from "../Pages/UserPageEdit";
import DeleteUser from "../Pages/UserPageDelete";
describe('Test Orangehrmlive site', () => {
    const username = 'Admin';
    const password = 'admin123';
    const loginPage = new LoginPage()
    const visitPage = new VisitPage()
    const userPage=new UserPage()
    const deleteUser=new DeleteUser()

    it('Deleting a User', () => {

        visitPage.open()
        loginPage.login(username, password)
        loginPage.openAdmin()
        userPage.TypeUsername()
        userPage.Search()
        deleteUser.SelectCheckbox()
        deleteUser.Delete()
        deleteUser.ConfirmDeletion()
        deleteUser.AssertNotFoundUser()
        deleteUser.Message()
    })
})
