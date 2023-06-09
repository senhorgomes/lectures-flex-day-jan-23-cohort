describe("Tests for checkboxes", ()=> {

    beforeEach(()=>{
        cy.visit("/");
        // We are grabbing all checkboxes and assigning a variable name to it
        cy.get(".filters__checkbox")
            .as('checkboxes')
    })

    it("can uncheck the Explicit checkbox", ()=>{
        // visit the website
        // cy.visit("/");
        // Grab all the checkboxes
        cy.get("@checkboxes")
            .first()// Grab only the first checkbox from the array of checkboxes
            .uncheck()// Uncheck the box
        cy.get("@checkboxes")
            .first()
            .should('not.to.be.checked')// Check if box is unchecked
    })
    it("can check the Single checkbox", ()=>{
        // visit the website
        // cy.visit("/");
        // Grab all the checkboxes
        cy.get("@checkboxes")
            .eq(3)// Grab only the fourth checkbox from the array of checkboxes
            .check()// Check the box
        cy.get("@checkboxes")
            .eq(3)
            .should('to.be.checked')// Check if box is checked
    })
})