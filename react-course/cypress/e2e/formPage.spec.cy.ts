/// <reference types="cypress" />

describe('Tests form page', () => {
    it('Check validation errors on empty form', () => {
        cy.visit('http://localhost:5173/form');
        cy.get('[data-cy="submit"]').click({ waitForAnimations: true });
        const formErrors = cy.get('.form__error');
        formErrors.should('have.length', 7);
    });
    it('Check user interaction with form', () => {
        cy.visit('http://localhost:5173/form');
        cy.get('[data-cy="date"]').type('2123-12-12');
        cy.get('[data-cy="name"]').type('Безумный Паша');
        cy.get('[data-cy="checkbox"]').click();
        cy.get('[data-cy="red"]').click();
        cy.get('[data-cy="select"]').select('Mango');
        cy.get('[data-cy="file"]').selectFile('src/assets/pasha.jpg', {
            force: true,
        });
        cy.get('[data-cy="submit"]').click({ waitForAnimations: true });
        const formAnswer = cy.get('.form__answer');
        const rootEl = cy.get('#root');
        formAnswer.should('be.visible');
        cy.get('[data-cy="about"]').click();
        rootEl.should('not.contain.html', formAnswer);
        cy.get('[data-cy="form"]').click();
        formAnswer.should('be.visible');
    });
});

export {};
