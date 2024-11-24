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
    it('Verifying empty Mandatory Fields and Validation Messages', () => {

        adminPage.ClickAddButton()
        userManagementPage.SaveUser()
        assertMessages.AssertEmptyFieldsErrorMessages()
    })
    it('Verifying fields with invalid data',()=>{
    sidePanel.openAdmin()
    adminPage.ClickAddButton()
    userManagementPage.FillInvalidData()
    assertMessages.ErrorMessageWithInvalidData()
    })
    it('Verify fields with valid data',() =>{
        adminPage.ClickAddButton()
        userManagementPage.FillValidData()
        userManagementPage.SaveUser()
        assertMessages.AssertUser()
        adminPage.DeleteUser(constants.newUsername)
    })
})
