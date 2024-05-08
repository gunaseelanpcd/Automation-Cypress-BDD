const defaultTimeout=60000;
export class Helper {
    locXpath(loc: string) {
        return cy.xpath(loc, { timeout: defaultTimeout });
    }
}