import LoginPage from "../Pages/LoginPage";
import AdminPage from "../Pages/AdminPage";
import SidePanel from "../Pages/SidePanel";
import AssertMessages from "../Assertions/UserPageAssertions";
import {constants,users} from "../../constants";


describe('Create new user with nonAdmin parmissions', () => {
    const loginPage = new LoginPage()
    const sidePanel = new SidePanel()
    const adminPage = new AdminPage()
    const assertMessages = new AssertMessages()

        it('Validating User Role Permissions', () => {

            loginPage.visit()
            loginPage.login(constants.username, constants.password)
            sidePanel.openAdmin()
            adminPage.ClickAddButton()
            adminPage.CreateNewUser()
            adminPage.Save()
            adminPage.ClickAvatar()
            adminPage.LogOut()
            adminPage.Login()
            assertMessages.AssertAccessAdminSection()
            sidePanel.TimeSection()
            assertMessages.AssertErrorMessageforTimeSection()
            sidePanel.PerformanceSection()
            assertMessages.AssertErrorMessageforPerformanceSection()
            sidePanel.LeaveSection()
            assertMessages.AssertApplyLeave()

        })


})
