import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Home } from "../../page objects/sample/Home";

const home = new Home();
Given('User open {string}', (text: string) => {
    home.launchUrl(text);
})

Then('User verify {string} message', (text:string) => {
    home.verifyWelcomeText(text);
})
When('User enter invalid creds', (data: DataTable) => {
    data.hashes().forEach(dataT=>{
    home.enterCred(dataT.Email,dataT.Password);
    })
})
Then('User validate error message {string}', (text:string) => {
    home.verifyErrorMsg(text);
})