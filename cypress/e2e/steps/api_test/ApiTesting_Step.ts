import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

let authToken = null;

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
    const queryParam = { page: 2 }
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users',
        qs: queryParam
    }).then((response) => {
        expect(response.status).to.equal(200);
        //another way to validate status
        expect(response.status).equal(200);
        //to validate page value
        expect(response.body.page).to.eq(2);
        //to find how many records are there in the data
        expect(response.body.data).has.length(6);
        //to validate first record property and values in data
        expect(response.body.data[0]).have.property('id', 7);
        expect(response.body.data[0]).has.property('first_name', 'Michael');
    })
})

Given('User Generate API Token from simple books', () => {
    cy.request({
        method: 'POST',
        url: '/api-clients/',
        headers: { 'Content-Type': 'application/json' },
        body: {
            clientName: "Test",
            clientEmail: Math.random().toString(5).substring(2) + "@gmail.com"
        }
    }).then((response) => {
        authToken = response.body.accessToken;
        cy.log("API Token : " + authToken);
    })
})
When('User submit an order with gerated API Token', () => {
    cy.request({
        method: 'POST',
        url: '/orders/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: {
            "bookId": 1,
            "customerName": 'Gowtham Elumalai'
        }
    }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.created).to.eq(true);
        cy.log(response.body);
    })
})
Then('User fetch orders from the database', () => {
    cy.request({
        method: 'GET',
        url: '/orders',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body[0].customerName).to.eq('Gowtham Elumalai');
        expect(response.body).has.length(1);
    })
})

Given('User parsing simple json response', () => {
    cy.request({
        method: 'GET',
        url: 'https://fakestoreapi.com/products'
    }).then((response) => {
        expect(response.body[0].id).to.eq(1);
        expect(response.body[0].title).to.eq('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
        expect(response.body[0].rating.rate).to.eq(3.9)
    })
})
When('User get total price for 5 objects and it should be {string}', (total: string) => {
    let actualTotal = 0;
    let expectedTotal: number = +total;
    cy.request({
        method: 'GET',
        url: 'https://fakestoreapi.com/products',
        qs: { limit: 5 }
    }).then((response) => {
        expect(response.status).to.eq(200);
        response.body.forEach(element => {
            actualTotal = actualTotal + element.price;
        })
        expect(actualTotal).to.eq(expectedTotal)
    })

})
Given('User perform Schema validation', () => {
    const Ajv = require('ajv');
    const ajv = new Ajv();

    cy.request({
        method: 'GET',
        url: 'https://fakestoreapi.com/products'
    }).then((response) => {
        cy.fixture('testSchema.json').then(sch=>{
            const  validate=ajv.compile(sch);
            const result=validate(response.body);
            expect(result).to.be.true
        })
    })
})
Given('User perform basic authentication',()=>{
    cy.request({
        method:'GET',
        url:'https://postman-echo.com/basic-auth',
        auth:{
            user:'postman',
            pass:'password'
        }
    }).then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body.authenticated).to.be.true
    })
})
When('User perform digest authentication',()=>{
    cy.request({
        method:'GET',
        url:'https://postman-echo.com/basic-auth',
        auth:{
            username:'postman',
            password:'password',
            method:'digest'
        }
    }).then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body.authenticated).to.be.true
    })
    })
 When('User perform bearer token authentication',()=>{
    //Github personal token
    let token="";
     cy.request({
        method:'GET',
        url:'https://api.github.com/user/repos',
        headers:{
            Authorization:'Bearer '+token
        }
     }).then((response)=>{
        expect(response.status).to.eq(200);
     })
 })   
When('User perform API key authentication',()=>{
    cy.request({
        method:'GET',
        url:'https://api.openweathermap.org/data/2.5/forecast/daily?q=Delhi',
        qs:{
            appid:'fe9c5cddb7e01d747b4611c3fc9eaf2c'
        }
    }).then((response)=>{
        expect(response.status).to.eq(200);
    })
})