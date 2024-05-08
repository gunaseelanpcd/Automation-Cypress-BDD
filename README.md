# Cypress framework with Cucumber and Typescript

You can perform your automation test in Cucumber gherkin format and
This framework is easy to use and maintain.

## Prerequisites

Step 1 - Install **NodeJS** latest and **NPM**

Step 2 - Install **VS Code**

## Framework Installation

Step 1- Create new project folder in your **local machine**

Step 2- **Clone** Framework repo into that folder

Step 3- Open terminal from project folder then run [ **npm install** ]

Step 4- All dependency from "**package.json**" will be installed

## Project Folder Structure

Inside Cypress folder:

1) **e2e/features**:
   Inside this you can create folders and .feature files using ghrikin format
2) **e2e/steps**:
   Inside this you can create folders and step files for your feature file as **.ts**
3) **e2e/page objects**:
   This is where we write our functions for pages in single or multiple files. Please use sample file for reference.
4) **/locators**:
   We can store all our locators in single or multiple files inside this locators folder then use it where ever you want. Please reffer sample locator file.
5) **/fixtures**:
   We can store all our test data inside this folder (Eg. example.json,sample.txt) then we can use it in our code by calling [**cy.fixture(filename.extention)**]
6) **/support**:
   You can write all your custom commands in commands.ts and declare it as chainable in index.d.ts then in all the places we can call by ref. (Eg. **cy.checkElementVisible()**)
7) **/cypress: cypress.config.ts**
   In this file we can do all our configurations (Eg. BaseURL, Spec Pattern)
8) **/cypress: cypress.env.json**
   This is the file we keep our credentials and env information which we can retrive in our code later by calling  **cy.visit(Cypress.env('testURL'))**
9) **/cypress: tsconfig.json**
   We can do all typescript related configuration in this file
   (Eg.  "**noImplicitAny**": true,"**noUnusedLocals**": true)
10) **/cypress: pakage.json**
    In this file we maintain all our dependencies,custom scripts and cypress-cucumber-preprocessor configurations
11) **/cypress: cucumber-report.html**
    After every executions this report file will be generated in our root directory and it will contains detail reports with screenshot for failed cases
12) **/steps: Hooks.ts**
    Inside this Hooks.ts you can mention your before and after functions that will run before and after every scenarios

## Executions

1. You can execute your test case by running [npx cypress open] this will open test runner where you can choose feature file and run
2. Use this to execute scenario or feature tags - [npx cypress run --env tags='@reg']
