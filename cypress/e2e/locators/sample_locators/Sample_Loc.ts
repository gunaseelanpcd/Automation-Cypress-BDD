
export class Sample_Loc{
    sample={
        loginAuto: () => "//a[text()='Login automation']",
        welcomeMsg:()=>cy.xpath("//h2[normalize-space(text())='Welcome Back!']"),
        email:()=>cy.xpath("//input[@id='user[email]']"),
        pass:()=>cy.xpath("//input[@id='user[password]']"),
        invldCredError:()=>cy.xpath("//li[normalize-space(text())='Invalid email or password.']"),
        signInBtn:()=>cy.xpath("//button[@type='submit']")
    }
}