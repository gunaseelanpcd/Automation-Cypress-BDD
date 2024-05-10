import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("This is Before hook")
});

After(() => {
    cy.log("This is After hook")
    if (Cypress.config('isInteractive')) {
        // Save screenshot only when running in interactive mode (not in headless mode)
        cy.screenshot({ capture: 'runner' });
    }
});