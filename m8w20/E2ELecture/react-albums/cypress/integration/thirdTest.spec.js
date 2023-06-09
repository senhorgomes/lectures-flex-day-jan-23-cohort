describe("Tests for the search input field", ()=> {

    beforeEach(()=>{
        cy.visit("/");
        cy.get('[name="search"]')
            .as("search");
    })

    xit("can type into the search field", ()=>{
        cy.get("@search")
            .type("Ariana Grande", {delay: 300})
            .should("have.value", "Ariana Grande")
    })
    xit("can type something incorrectly and correct it", ()=>{
        cy.get("@search")
            .type("Black Keysqwer{backspace}{backspace}{backspace}{backspace}", {delay: 300})
            .should("have.value", "Black Keys")
    })
    it("can type something incorrectly and correct it", ()=>{
        cy.get("@search")
            .type("Luduvico{leftArrow}{leftArrow}{leftArrow}{leftArrow}{backspace}o{rightArrow}{rightArrow}{rightArrow}{rightArrow} einaudi", {delay: 300})
            .should("have.value", "Ludovico einaudi")
    })
   
})