import {AdminSectionElement,EditUser} from "../../Locators/UserManagementLocators";

class SidePanel {
    openAdmin() {
        cy.get(AdminSectionElement.adminSection).contains('Admin').click()
    }
    TimeSection() {
        cy.get('.oxd-main-menu-item-wrapper').contains('Time').click()
    }
    PerformanceSection() {
        cy.get('.oxd-main-menu-item-wrapper').contains('Performance').click()
    }
    LeaveSection() {
        cy.get('.oxd-main-menu-item-wrapper').contains('Leave').click()
    }
}
export default SidePanel
