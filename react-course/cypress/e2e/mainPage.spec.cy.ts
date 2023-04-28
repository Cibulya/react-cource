/// <reference types="cypress" />
describe('Tests main page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173');
    });
    it('show first load cards', () => {
        const cardList = cy.get('.cars__cards>li');
        cardList.should('have.length', 20);
        cardList.should('have.class', 'cards__card');
    });
    it('Change search query and fetch cards', () => {
        const search = cy.get('.search');
        search.should('be.visible');
        search.type('rick{enter}');
        const rickCards = cy.get('ul.cars__cards');
        rickCards.contains('p', 'Adjudicator Rick');
        search.clear();
        search.type('summer{enter}');
        const summerCards = cy.get('ul.cars__cards');
        summerCards.children().should('contain', 'Squid Costume Summer');
        summerCards.children().should('contain', 'Wasp Summer');
        summerCards
            .get('.cards__card')
            .should(
                'have.text',
                'Summer SmithEvil Summer CloneMechanical SummerSummer SmithSummer SmithWasp SummerSummer SmithScarecrow SummerGlockenspiel SummerWicker SummerSquid Costume SummerToo Cute to Murder Summer'
            );
        search.type('sdasd{enter}');
        const errorDiv = cy.get('.error__container');
        errorDiv.should('be.visible');
        errorDiv.should(
            'have.text',
            'Something went wrong, an error occurred ... We have paws ....Error code: 404'
        );
    });
    it('Click on card and open modal window', () => {
        const card = cy.get('.cards__card:first').click();
        card.should('be.visible');
        card.should(
            'have.text',
            'Rick SanchezXCharacter name: Rick SanchezCharacter status: AliveCharacter created: 2017-11-04T18:48:46.250ZCharacter gender: MaleCharacter DB id: 1Character location name: Citadel of Ricks'
        );
        cy.get('.modal-close').click();
        card.parent().should('not.contain.text', '2017-11-04T18:48:46.250Z');
        card.parent().should('not.have.html', card);
    });
});

export {};
