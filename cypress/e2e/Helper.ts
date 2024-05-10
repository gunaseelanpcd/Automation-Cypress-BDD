
const defaultTimeout=60000;
export class Helper {
    locXpath(loc: string) {
        return cy.xpath(loc, { timeout: defaultTimeout });
    }
    spanTextClick(text:string,fr?:boolean){
        return cy.xpath("//span[normalize-space(text())='"+text+"']",{timeout:60000}).click({force:fr});
    }
    validateSpecificText(text:string){
        cy.xpath("//*[text()='"+text+"']",{timeout:60000}).then($el=>{
            if($el.length>1){
                cy.log('Text is not unique');
            }else{
                cy.log('Text found as expected')
            }
        })
    }
    
}