## Introduction

This repository contains the Cypress automation framework scripts for testing the public facing UK Government webpage 'Calculate your holiday entitlement'. 
Url: https://www.gov.uk/calculate-your-holiday-entitlement

The automation framework has been created using Cypress, JavaScript and Mochawesome reports. Below are the prerequisites, set up and execution instructions.

## Prerequisites
Following should be available in your local machine
1.Node.js 
2.Git
3.Web browser such as Chrome

## Set up
To set up the cypress framework follow these steps.
1.Clone this repository to your local machine using Git:
2.Open Terminal and navigate to the cloned repository directory
3.Install Cypress using following command
npm install cypress --save-dev

4.Install Mochawesome using following commands
npm install --save-dev mochawesome

5.Install Mochawesome Reporter for Cypress using following command
npm install --save-dev mochawesome-reporter

6.Update cypress.config.js with following code to support mochawesome reports

    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": true,
      "json": true
    },


## Automation Framework Folder Structure
Following folders are available.

#### cypress/pages
This framework follows page object model design patten and separate class has been created for each page which encapsulates the locators and methods related to that specific page
e.g., EmploymentEndDatePage.js

#### cypress/fixtures
Test data for each test case has been stored separately in TestData.json file under this folder.

#### cypress/e2e
Main test suite available as TestSuite.cy.js under this folder this file can be run via cypress test runner or command prompt

#### cypress/reports
Once the test suite file (TestSuite.cy.js) is run via terminal a mochawesome report will be created under this folder in .html and .json formats for each test run. You can open .html via a web browser.
Command for run the test 

## Test Execution
### Run via Cypress Test Runner
1.On terminal navigate to local repository folder and run following command
npx cypress open

2.Once Cypress Test Runner is opened select ‘E2E Testing option’

3.Choose a browser from the available list (e.g., Chrome) and click ‘Start E2E Testing in Chrome’ button (Specs will be selected by default)

4.Click on TestSuite.cy.js (tests will start to run)

5.Test Results will be available on Test Runner once completed

### Run via Terminal
1.On terminal navigate to local repository folder and run following command
npx cypress run --spec "cypress/e2e/TestSuite.cy.js"

Test will run in headless mode

2.You can run the tests on headed mode via following command
npx cypress run --spec "cypress/e2e/TestSuite.cy.js" –headed

This will run the test in the selected browser

3.Summary of the test run will be displayed in terminal once completed.
4.In addition you can view the mochawesome test reports which are stored under ‘cypress/reports’ folder (as .html and .json formats) via a web browser.
