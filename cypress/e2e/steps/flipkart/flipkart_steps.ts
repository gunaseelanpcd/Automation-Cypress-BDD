import { DataTable, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Flipkart_Home } from "../../page objects/flipkart/Flipkart_Home";

const flipkartHome= new Flipkart_Home();
When('User click {string}', (text:string) => {
     flipkartHome.clickOnCard(text);
})
Then('User validate {string} label in mobiles section', (text:string) => {
     flipkartHome.validateSpecificText(text);
})
When('User select first card under top deals of the sales', () => {
    flipkartHome.selectFirstCard();
})
Then('User check on first smartphone within the range {string}',(range:string)=>{
     flipkartHome.selectSmartphoneBasedOnRange(range);
})
Then('User print name of the smartphone',()=>{
     flipkartHome.printDetailsOfSmartphone();
})
