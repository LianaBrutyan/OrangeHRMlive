import {constants} from "../../Locators/visitPageLoc";

class VisitPage {
    open() {
        cy.visit(constants.URL)
    }
}
export default VisitPage
