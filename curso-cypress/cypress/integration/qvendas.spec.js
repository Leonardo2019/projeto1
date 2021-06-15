/// <reference types="cypress" />

describe('Acessar site', () => {
    it('Acessar e logar', () => {
        cy.visit('https://celuladigitalhm.qualicorp.com.br/QVendaCorretor/#/login')
       
        })
        beforeEach(() => {
            cy.reload()
        })

        it('Digitar login, senha e preencher proposta', () => {
            cy.get('#input-21').type('lpsoares')
            cy.get('#input-25').type('Leo@97251617')
            cy.get('.v-btn__content > .primary--text').click()
            cy.wait(4000)
            cy.get(':nth-child(1) > .pa-4 > .v-btn__content > .d-flex > .v-icon').click()
            cy.wait(5000)
            cy.get(':nth-child(1) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
            cy.wait(3000)
            cy.get(':nth-child(3) > span[data-v-094d409e=""] > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > .v-radio > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
            cy.get(':nth-child(2) > .pb-0 > span[data-v-094d409e=""] > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > .mt-4 > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
            cy.get('.text-none > .v-btn__content').click()   
            cy.get('#input-176').type('02235000')
            cy.get('#input-228').click()
            cy.get('#input-612').type('Administrado')
            cy.get(':nth-child(1) > .pa-2 > .v-list-item__content > .v-list-item__title').click()
            cy.get('#input-947').click()
            cy.wait(3000)
            cy.get('#input-968').type('ABRACEM')
            cy.get(':nth-child(5) > .v-dialog > .v-card > .pa-5 > .v-list > :nth-child(1) > .pa-2 > .v-list-item__content > .v-list-item__title').click()
            cy.get('#input-202').type('31283776855')
            cy.wait(3000)
            cy.get('.text-none > .v-btn__content').click()
            cy.get(':nth-child(1) > .v-radio > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
            cy.get('.text-none > .v-btn__content').click()
            cy.wait(3000)
            cy.get(':nth-child(2) > .mx-auto > .v-card__actions > .row > :nth-child(5) > .text-capitalize > .v-btn__content > .mt-1').click()

           
            
            



            
        })
        
    })
