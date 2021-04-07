describe("Acessar", () =>{
    it('Acessar Site', ()=>{
        cy.visit('http://automationpractice.com/index.php');
    })

    it('Procurar T-SHIRTS e clicar botão procurar', ()=>{
        cy.get('input[placeholder="Search"]').type('t-shirts');
        cy.get('button[name="submit_search"]').click();
    })

    it('CLicar no botão WOMEN', ()=>{
        cy.visit('http://automationpractice.com/index.php');
        cy.get('a[title="Women"]').contains("Women").click();
    })
    
});