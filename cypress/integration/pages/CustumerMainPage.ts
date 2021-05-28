/// <reference types="Cypress" />
import basePage from '../pages/BasePage'

const LOCATORS = {
    CUSTOMER_BUTTON:
        '[href="/customers"] > .MuiButtonBase-root > .MuiListItemIcon-root > .fal',
    ADD_NEW_CUSTOMER_BUTTON:
        '.MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label',
    FIRST_NAME_FIELD:
        ':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input',
    LAST_NAME_FIELD:
        ':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input',
    COUNTRY_CODE_SELECT: '.css-t4b694-control',
    COUNTRY_CODE: '.css-1ar5tqd-option',
    NUMBER_FIELD: '[name="mobileNo"]',
    EMAIL_FIELD: '[name="email"]',
    BIRTHDAY_MONTH_SELECT:
        ':nth-child(4) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root',
    BIRTHDAY_DAY_SELECT:
        ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root',
    GENDER_SELECT:
        ':nth-child(6) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root',
    SUBMIT_BUTTON:
        '.MuiDialogActions-root > div > .MuiButton-contained > .MuiButton-label',
    MESSAGE: '.Toastify__toast-body'

    // cy.get('.MuiPaper-root > .MuiIconButton-root')
};

class CustomerMainPage extends basePage {
    static newCustumer() {
        cy.get(LOCATORS.CUSTOMER_BUTTON).click();
        cy.get(LOCATORS.ADD_NEW_CUSTOMER_BUTTON).click();

        cy
            .get('@testDataCustomer')
            .then((testDataCustomer: any) => {
                super.elementExists(LOCATORS.FIRST_NAME_FIELD, 2000);

                cy
                    .get(LOCATORS.FIRST_NAME_FIELD)
                    .type(testDataCustomer.first_name);

                super.elementExists(LOCATORS.LAST_NAME_FIELD, 2000);

                cy
                    .get(LOCATORS.LAST_NAME_FIELD)
                    .type(testDataCustomer.last_name);

                super.elementExists(LOCATORS.COUNTRY_CODE_SELECT, 2000);
                cy.get(LOCATORS.COUNTRY_CODE_SELECT).click();
                super.elementExists(LOCATORS.COUNTRY_CODE, 2000);
                cy.get(LOCATORS.COUNTRY_CODE).click();
                super.elementExists(LOCATORS.NUMBER_FIELD, 2000);

                cy
                    .get(LOCATORS.NUMBER_FIELD)
                    .type(testDataCustomer.number);

                super.elementExists(LOCATORS.EMAIL_FIELD, 2000);

                cy
                    .get(LOCATORS.EMAIL_FIELD)
                    .type(testDataCustomer.email);

                super.elementExists(LOCATORS.BIRTHDAY_MONTH_SELECT, 2000);
                cy.get(LOCATORS.BIRTHDAY_MONTH_SELECT).click();
                super.elementExists(`[data-value="${testDataCustomer.month}"]`, 2000);
                cy.get(`[data-value="${testDataCustomer.month}"]`).click();
                super.elementExists(LOCATORS.BIRTHDAY_DAY_SELECT, 2000);
                cy.get(LOCATORS.BIRTHDAY_DAY_SELECT).click();
                super.elementExists(`[data-value="${testDataCustomer.day}"]`, 2000);
                cy.get(`[data-value="${testDataCustomer.day}"]`).click();
                super.elementExists(LOCATORS.GENDER_SELECT, 2000);
                cy.get(LOCATORS.GENDER_SELECT).click();
                super.elementExists(`[data-value="${testDataCustomer.gender}"]`, 2000);
                cy.get(`[data-value="${testDataCustomer.gender}"]`).click();
                super.elementExists(LOCATORS.SUBMIT_BUTTON, 2000);
                cy.get(LOCATORS.SUBMIT_BUTTON).click();
                super.elementContainText(LOCATORS.MESSAGE, "Created successfully", 2000);

            });

    }
}

export default CustomerMainPage;