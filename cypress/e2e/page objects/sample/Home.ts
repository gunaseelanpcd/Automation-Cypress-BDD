import { Sample_Loc } from "../../locators/sample_locators/Sample_Loc";

const loc = new Sample_Loc();
export class Home {
    verifyErrorMsg(text: string) {
        loc.sample.invldCredError().contains(text);
    }
    enterCred(email: string, pass: string) {
        loc.sample.email().clear().type(email);
        loc.sample.pass().clear().type(pass);
        loc.sample.signInBtn().click();
    }
    verifyWelcomeText(text: string) {
        loc.sample.welcomeMsg().contains(text);
    }

    clickOnElement() {
        cy.clickOnElement(loc.sample.loginAuto(), true);
    }

    launchUrl(url: string) {
        cy.viewport(1920, 1080)
        cy.visit(Cypress.env(url));

    }
}