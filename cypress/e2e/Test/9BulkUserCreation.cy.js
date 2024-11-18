import VisitPage from "../Pages/VisitPage";
import LoginPage from "../Pages/LoginPage";
import CreateNewUsersPage from "../Pages/ BulkUserPage";
import DeleteNewUsers from "../Pages/DeleteNewUserspage";

describe('Test Orangehrmlive site', () => {
    const username = 'Admin';
    const password = 'admin123';
    const loginPage = new LoginPage()
    const visitPage = new VisitPage()
    const createNewUsersPage = new CreateNewUsersPage()
    const deleteNewUsers = new DeleteNewUsers()
    const users = [
        {EmployeeName: 'L', username: 'Name11w', password: 'Password123', role: 'Admin', status: 'Enabled'},
        {EmployeeName: 'M', username: 'Name12w', password: 'Password123', role: 'ESS', status: 'Enabled'},
        {EmployeeName: 'A', username: 'Name13w', password: 'Password123', role: 'ESS', status: 'Disabled'},
    ];


    it('Bulk User Creation and Validation', () => {

        visitPage.open()
        loginPage.login(username, password)
        loginPage.openAdmin()

        users.forEach((user) => {
            createNewUsersPage.clickAddUser();
            createNewUsersPage.fillUserForm(user);
            deleteNewUsers.DeleteUsers()

        });
    })
})
