import { Helper } from "../../Helper";
import { Sample_Loc } from "../../locators/sample_locators/Sample_Loc";

const helper= new Helper();
const loc=new Sample_Loc();
export class Flipkart_Home{

    clickOnCard(text:string){
        helper.spanTextClick(text,true);
    }
    validateSpecificText(text:string){
        helper.validateSpecificText(text)
    }
    selectFirstCard(){
        loc.sample.firstCard().click();
    }
}