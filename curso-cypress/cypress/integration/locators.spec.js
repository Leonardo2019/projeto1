/// <reference types="cypress" />

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })
    it("using jquery selector", ()=>{
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('[onclick*=\'Francisco\']')

    })

    it('using xpath', () => {
        cy.xpath("//input")
        

    })
}) 