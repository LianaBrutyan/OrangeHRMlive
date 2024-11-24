import LoginPage from "../Pages/LoginPage";
import AdminPage from "../Pages/AdminPage";
import UserManagementPage from "../Pages/UserManagementPage";
import SidePanel from "../Pages/SidePanel";
import AssertMessages from "../Assertions/UserPageAssertions";
import {constants,users} from "../../constants";

describe('Test Orangehrmlive site in Admin/User page with negative cases', () => {

    const loginPage = new LoginPage()
    const sidePanel = new SidePanel()
    const userManagementPage = new UserManagementPage()
    const adminPage = new AdminPage()
    const assertMessages = new AssertMessages()

    beforeEach(() => {
        loginPage.visit()
        loginPage.login(constants.username, constants.password)
        sidePanel.openAdmin()
    })
    it('Bulk User Creation and Validation', () => {

        users.forEach(user => {
            adminPage.ClickAddButton()
            userManagementPage.fillUserForm(user)
            userManagementPage.SaveUser()
            assertMessages.AssertCorrectMessage()
        })
        users.forEach(user => {
            sidePanel.openAdmin()
            userManagementPage.SearchUsers(user.username)
            cy.wait(3000)
            assertMessages.AssertUsers(user.username)
        })

        users.forEach(user => {
            sidePanel.openAdmin()
            adminPage.DeleteUser(user.username)

        })

    })
})