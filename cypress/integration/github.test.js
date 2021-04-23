describe('Github Page', () => {
    it('should log into github', () => {
        cy.visit('https://github.com/');

        const toggleButton = cy.get('body > div.position-relative.js-header-wrapper > header > div > div.d-flex.flex-justify-between.flex-items-center > div.d-flex.flex-items-center > button');

        toggleButton.click();

        const singInButton = cy.get('body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > a.HeaderMenu-link.flex-shrink-0.no-underline.mr-3');
    
        singInButton.click();

        cy.get('#login_field').type('____type___login___');
        cy.get('#password').type('___type___password___');
        cy.get('form').submit();
        cy.contains('Recent activity');
    });
});