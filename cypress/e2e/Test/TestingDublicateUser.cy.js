import LoginPage from "../Pages/LoginPage";
import AdminPage from "../Pages/AdminPage";
import SidePanel from "../Pages/SidePanel";
import AssertMessages from "../Assertions/UserPageAssertions";
import {constants,users,dublUser} from "../../constants";

describe('Adding and Verifying a Duplicate User', () => {
    const loginPage = new LoginPage()
    const sidePanel = new SidePanel()
    const adminPage = new AdminPage()
    const assertMessages = new AssertMessages()

    beforeEach(() => {
        loginPage.visit()
        loginPage.login(constants.username, constants.password)
        sidePanel.openAdmin()
    })
    it('Adding a New User and verify correct message', () => {
        adminPage.ClickAddButton()
        adminPage.FillUserName(dublUser.Username)
        adminPage.FillEmployeeName()
        adminPage.SelectUserRole()
        adminPage.SelectStatusField()
        adminPage.FillPassword()
        adminPage.FillConfirmPassword()
        adminPage.Save()
        assertMessages.AssertCorrectMessage()

    })
    it('Should show error when username already exists', () => {
        adminPage.ClickAddButton()
        adminPage.FillUserName(dublUser.Username)
        adminPage.FillEmployeeName()
        adminPage.SelectUserRole()
        adminPage.SelectStatusField()
        adminPage.FillPassword()
        adminPage.FillConfirmPassword()
        adminPage.Save()
        assertMessages.VerifyErrorMessage()
    })

})