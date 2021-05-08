describe('Login Page', () => {
    it('should open login page', () => {
        cy.visit('https://jozeflacko.github.io/');
        const btn = cy.contains("Let's explore this Web")
        btn.click();
        cy.url().should('include', 'in#introduction');
    });
});