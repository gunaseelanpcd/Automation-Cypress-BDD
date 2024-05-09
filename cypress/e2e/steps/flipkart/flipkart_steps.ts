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
Then('User check on first smartphone within the range',(data:DataTable)=>{

})
Then('User check first smartphone is comes under the brands',(data:DataTable)=>{

})
When('User select the smartphone based on criteria',()=>{

})
Then('User print name and model of the smartphone',()=>{

})
When('User click buy now button',()=>[

])
Then('User validate {string} label',(text:string)=>{

})