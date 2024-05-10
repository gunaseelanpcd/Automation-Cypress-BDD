const dummyValue:string="$?"
const defaultTimeout:number=30000;

export class Sample_Loc{
    sample={
        loginAuto: () => "//a[text()='Login automation']",
        welcomeMsg:()=>cy.xpath("//h2[normalize-space(text())='Welcome Back!']",{timeout:defaultTimeout}),
        email:()=>cy.xpath("//input[@id='user[email]']",{timeout:defaultTimeout}),
        pass:()=>cy.xpath("//input[@id='user[password]']",{timeout:defaultTimeout}),
        invldCredError:()=>cy.xpath("//li[normalize-space(text())='Invalid email or password.']",{timeout:defaultTimeout}),
        signInBtn:()=>cy.xpath("//button[@type='submit']",{timeout:defaultTimeout}),
        firstCard:()=>cy.xpath("(//div[@class='X8l5DD']//..//img[@class='xTaogf _3iTqAS'])[1]",{timeout:defaultTimeout}),
        smartphonePrice:()=>"(//div[@class='hl05eU']//div[1])[$?]",
        smartPhoneDynamic:()=>"//..//..//..//..//div[@class='KzDlHZ']",
        popularity:()=>cy.xpath("//div[text()='Popularity']",{timeout:defaultTimeout}),
        smartphoneTitle:()=>cy.xpath("//span[@class='VU-ZEz']",{timeout:defaultTimeout}),
        buyNowBtn:()=>cy.xpath("//button[text()='Buy Now']",{timeout:defaultTimeout})
    }
    
}