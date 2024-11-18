import SearchUserLoc from "../../Locators/searchUserLoc";
import AdminSectionElement from "../../Locators/addnewUserLoc";

class SearchUserRole{
    FilterRole(){
        cy.get(AdminSectionElement.userRoleDropdown).eq(0).click()
            .then(() => {
            cy.get(AdminSectionElement.userRoleOption)
                .contains('ESS')
                .click().then(() =>{
                    cy.get(SearchUserLoc.searchElem).contains('Search').click()
            })
        })
    }
    VerifyRoleESS() {
        cy.get(SearchUserLoc.tableElem)
            .then(() => {
                cy.get(SearchUserLoc.roleElem)
                    .contains('ESS')
            })
    }
    }
export default SearchUserRole
