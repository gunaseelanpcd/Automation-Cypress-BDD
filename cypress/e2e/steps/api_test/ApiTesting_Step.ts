import { DataTable, Given, When } from "@badeball/cypress-cucumber-preprocessor";



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
                id: data.ID
            }
        }).its('status')
            .should('equal', stCode);
    })
})
When('User perform DETELE request', (data: DataTable) => {
    data.hashes().forEach(data => {
        const stCode = +data.Status;
        cy.request({
            method: data.Method,
            url: data.URL
        })
            .its('status')
            .should('equal', 201)
    })
})

Given('User perform POST request hardcode method', () => {
    const dataBody = {
        name: "Apple MacBook Pro 16",
        data: {
            year: 2019,
            price: 1849.99,
            CPU: "Intel Core i9",
            Harddisk: "1 TB"
        }
    }
    cy.request({
        method: 'POST',
        url: 'https://api.restful-api.dev/objects',
        body: dataBody

    })
        .then((response) => {
            expect(response.body.name).to.eq("Apple MacBook Pro 16");
            expect(response.body.data.year).to.eq(2019);
            expect(response.body.data.price).to.eq(1849.99);
            expect(response.body.data.CPU).to.eq("Intel Core i9");
            expect(response.body.data.Harddisk).to.eq("1 TB");
        })

})
When('User perform POST request with dynamically gerated data', () => {
    const dataBody = {
        name: Math.random().toString(5).substring(2),
        data: {
            year: Math.random(),
            price: Math.random(),
            CPU: "Intel Core i9",
            Harddisk: "1 TB"
        }
    }
    cy.request({
        method: 'POST',
        url: 'https://api.restful-api.dev/objects',
        body: dataBody

    })
        .then((response) => {
            expect(response.body.name).to.eq(dataBody.name);
            expect(response.body.data.year).to.eq(dataBody.data.year);
            expect(response.body.data.price).to.eq(dataBody.data.price);
            expect(response.body.data.CPU).to.eq("Intel Core i9");
            expect(response.body.data.Harddisk).to.eq("1 TB");
        })
})
When('User permorm POST request using fixture file', () => {
    cy.fixture('laptop.json').then(dataBody => {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: dataBody

        })
            .then((response) => {
                expect(response.body.name).to.eq(dataBody.name);
                expect(response.body.data.year).to.eq(dataBody.data.year);
                expect(response.body.data.price).to.eq(dataBody.data.price);
                expect(response.body.data.CPU).to.eq("Intel Core i9");
                expect(response.body.data.Harddisk).to.eq("1 TB");

                //validate property
                expect(response.body).has.property('name', dataBody.name)
                expect(response.body.data).has.property('year', dataBody.data.year)
                //another way to validate property
                expect(response.body).to.have.property('name', dataBody.name)
            })
    })

})
Given('User perform Query PARAMS in API', () => {
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users',
        qs: { page: 2 }
    }).then((response)=>{
        expect(response.status).to.equal(200);
        expect(response.status).equal(200);
    })
})