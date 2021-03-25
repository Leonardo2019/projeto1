const { constant } = require("async");

describe('Automation', () => {
    beforeEach(() => cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html'));


    it('Preencher os campos com texto', () => { // it.only para rodar somente este cenário
        const firstName = "Leonardo";       // variavel para repetir
        const lastName = "Soares";          // variavel para repetir

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get('#email').type("teste@teste.com");
        cy.get('#requests').type("Qualquer coisa");
        cy.get('#signature').type( `${firstName} ${lastName}` );  //Concatenar variáveis
    });

    it("Select two tickets", () => {
        cy.get('#ticket-quantity').select("2");
    });

    it("Select Radio Button VIP", () => {
        cy.get('#vip').check();
    });

    it("Select check Box", () => {
        cy.get('#social-media').check();
    });

    it("Select Friends e Publication, uncheck Friends", () => {
        cy.get('#friend').check();
        cy.get('#publication').check();
        cy.get('#friend').uncheck();  // desmarca checkbox
    });

    it("Contem 'TICKETBOX' no headers", () => {
        cy.get('header h1').should('contain', 'TICKETBOX');
    });

    it("Alert Email", () => {
        cy.get("#email").as("email").type("teste2teste.com");
        
        cy.get("#email.invalid").should("exist");

        cy.get("@email").clear()
        .type("teste@teste.com");

        cy.get("#email.invalid").should("not.exist");
    });

    it("Teste End-to-end", () => {
        const firstName = "Leonardo";       // variavel para repetir
        const lastName = "Soares";          // variavel para repetir
        const FullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get('#email').type("teste@teste.com");
        cy.get('#ticket-quantity').select("2");
        cy.get('#vip').check();
        cy.get('#friend').check();
        cy.get('#requests').type("Qualquer coisa");
        cy.get(".agreement p").should("contain", `I, ${FullName}, wish to buy 2 VIP tickets.`); 

        cy.get('#agree').click();
        cy.get('#signature').type(FullName);
        cy.get("button[type='submit']").as("submitButton").should("not.be.disabled");

        cy.get("button[type='reset']").click();
        cy.get("@submitButton").should("be.disabled");
    });

   

});