describe('Resume Page', () => {
    it('should navigate to defail page', () => {
        cy.visit('https://jozeflacko.github.io/');
        const btn = cy.contains("Let's explore this Web")
        btn.click();
        cy.url().should('include', 'in#introduction');
    });
});