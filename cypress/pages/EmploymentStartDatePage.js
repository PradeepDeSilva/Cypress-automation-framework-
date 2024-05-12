// EmploymentStartDatePage.js
class EmploymentStartDatePage {


    // Verify Employment Start Date Page is displayed
    assertEmploymentStartDatePage() {
      cy.get('.govuk-fieldset__heading').should('include.text', 'What was the employment start date?')
      cy.log('Visited the Employment Start Date Page');
    }
      
    // Eenter the day for Employment Start Date
    enterEmploymentStartDay(day) {
        cy.get('#response-0').type(day)
    }

    // Eenter the month for Employment Start Date
    enterEmploymentStartMonth(month) {
        cy.get('#response-1').type(month)
    }
      
    // Eenter the year for Employment Start Date
    enterEmploymentStartYear(year) {
        cy.get('#response-2').type(year)
    }

    // Click on 'Continue' button
    submit() {
      cy.get('div#current-question > .gem-c-button.gem-c-button--bottom-margin.govuk-button').click();
    }

  }
  
  export default new EmploymentStartDatePage();