import { DataTable, Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { title } from "process";



Given('User perfrom GET request', (data: DataTable) => {
    data.hashes().forEach(data => {
        const stCode = +data.Status;
        cy.request(data.Method, data.URL)
            .its('status')
            .should('equal', stCode)
    })

})
When('User perform POST request', (data: DataTable) => {
    data.hashes().forEach(data => {
        const stCode = +data.Status;
        cy.request({
            method: data.Method,
            url: data.URL,
            body: {
                title: data.Title,
                body: data.Body,
                userId: data.UserID
            }
        }).its('status')
            .should('equal', stCode);
    })
})
When('User perform PUT request', (data: DataTable) => {
    data.hashes().forEach(data => {
        const stCode = +data.Status;
        cy.request({
            method: data.Method,
            url: data.URL,
            body: {
                title: data.Title,
                body: data.Body,
                userId: data.UserID,
                id:data.ID
            }
        }).its('status')
            .should('equal', stCode);
    })
})
When('User perform DETELE request',(data:DataTable)=>{
    data.hashes().forEach(data => {
        const stCode = +data.Status;
        cy.request({
            method:data.Method,
            url:data.URL
        })
        .its('status')
        .should('equal',201)
    })
})