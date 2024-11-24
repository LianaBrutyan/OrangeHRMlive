import LoginPage from "../Pages/LoginPage";
import AdminPage from "../Pages/AdminPage";
import SidePanel from "../Pages/SidePanel";
import Assertions from "../Assertions/adminPageAssertions";
import {constants,users} from "../../constants";

describe('Add, Edit and Delete New User in OrangeHRMlive site', () => {

    const loginPage = new LoginPage()
    const sidePanel=new SidePanel()
    const adminPage = new AdminPage()
    const assertions=new Assertions()

    beforeEach(()=>{
        loginPage.visit()
        loginPage.login(constants.username, constants.password)
        sidePanel.openAdmin()
    })

    it('Should to add New User in the Admin Section', () => {

        adminPage.ClickAddButton()
        adminPage.SelectUserRole()
        adminPage.FillEmployeeName()
        adminPage.SelectStatusField()
        adminPage.FillUserName(constants.newUsername)
        adminPage.FillPassword()
        adminPage.FillConfirmPassword()
        adminPage.Save()
        assertions.AssertUser()

    })

    it('Should to Edit an Existing User’s Role', () => {

        adminPage.SearchUser(constants.newUsername)
        adminPage.ClickEditButton()
        adminPage.EditRole()
        adminPage.Save()
        assertions.AssertUserRole()
    })

    it('Searching for Users by Role', () => {
        adminPage.FilterRole()
        assertions.VerifybyRole()
    })
    it('Updating System User Status', () =>
    {
        adminPage.SearchUser(constants.newUsername)
        adminPage.ClickEditButton()
        adminPage.EditStatus()
        adminPage.Save()
        assertions.AssertUserStatus()
    })

    it('Resetting User Password', () => {
        adminPage.SearchUser(constants.newUsername)
        adminPage.ClickEditButton()
        adminPage.ChangePassword()
        adminPage.ConfirmPassword()
        adminPage.Save()
        assertions.AssertMessage()
    })
    it('Should Delete a Created User', () => {
        adminPage.DeleteUser(constants.newUsername)
        assertions.AssertNotFoundUser()
        assertions.Message()
    })


})

