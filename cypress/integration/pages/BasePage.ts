/// <reference types="Cypress" />

class BasePage {

    static elementExists(locator: string, timeout: number) {

        return new Promise((resolve, reject) => {
            cy.get('body').find(locator).its('length').then($length => {

                if ($length > 0) {
                    cy.get(locator, { timeout: timeout }).should('exist');
                    resolve($length);
                } else {
                    reject();
                }

            });
        })

    }

    static elementContainText(locator: string, comparableText: string, timeout: number) {
        cy.get(locator, { timeout: timeout }).should('contain.text', comparableText);
    }

    static getValueElement(locator: string): string {
        return Cypress.$(locator).attr('value');
    }

    static getTextElement(locator: string): string {
        return Cypress.$(locator).text();
    }

}

export default BasePage;