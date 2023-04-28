/// <reference types="cypress" />
describe('Tests main page', () => {
    it('visit about page', () => {
        cy.visit('http://localhost:5173/about');
    });
});

export {};
