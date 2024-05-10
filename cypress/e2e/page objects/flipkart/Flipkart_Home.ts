import { Helper } from "../../Helper";
import { Sample_Loc } from "../../locators/sample_locators/Sample_Loc";

const dummyValue: string = "$?"
const defaultTimeout: number = 30000;

const helper = new Helper();
const loc = new Sample_Loc();
export class Flipkart_Home {

    clickOnCard(text: string) {
        helper.spanTextClick(text, true);
    }
    validateSpecificText(text: string) {
        helper.validateSpecificText(text)
    }
    selectFirstCard() {
        loc.sample.firstCard().click();
        loc.sample.popularity().should('be.visible');
    }
    selectSmartphoneBasedOnRange(value: string) {
        const range: number = +value;
        cy.log(range.toString());
        const totalEl = loc.sample.smartphonePrice().replace(dummyValue, "").replace("[]", "");
        cy.xpath(totalEl).then(el => {
            const elLength = el.length.toString();
            const elLengthNum: number = +elLength;
            cy.log(elLengthNum.toString());
            for (let i = 1; i < elLengthNum; i++) {
                const path = loc.sample.smartphonePrice().replace(dummyValue, i.toString());
                cy.log(path);
                cy.xpath(path, { timeout: 10000 }).invoke('text').then(txt => {
                    const priceSymbolRemoved = txt.replace("₹", "").replace(",", "");
                    const finalPrice: number = +priceSymbolRemoved;
                    cy.log(finalPrice.toString())
                    if (finalPrice < range) {
                        cy.xpath("(//div[@class='hl05eU']//div[1])[1]//..//..//..//..//..//..//..//a[@target='_blank']").invoke('removeAttr', 'target');
                        cy.xpath(path + loc.sample.smartPhoneDynamic(), { timeout: defaultTimeout }).click();
                    }
                })
                break;
            }
        })

    }
    printDetailsOfSmartphone() {
        loc.sample.smartphoneTitle().invoke('text').then(text => {
            let model: string = text.replace(/ .*/, "");
            cy.log(model);

        })
    }
}