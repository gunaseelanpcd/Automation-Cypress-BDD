import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("This is Before hook")
});

After(() => {
    cy.log("This is After hook")
});