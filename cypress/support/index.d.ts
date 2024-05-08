declare namespace Cypress {
    interface Chainable {
        clickOnElement(element: string, fr?: boolean): Chainable<Element>;
    }
}