// EmploymentEndDatePage.js
class EmploymentEndDatePage {


    // Verify Employment End Date Page is displayed
    assertEmploymentEndDatePage() {
      cy.get('.govuk-fieldset__heading').should('include.text', 'What was the employment end date?')
      cy.log('Visited the Employment End Date Page');
    }
    
    // Eenter the day for Employment End Date
    enterEmploymentEndDay(day) {
        cy.get('#response-0').type(day)
    }
      
    // Eenter the month for Employment End Date
    enterEmploymentEndMonth(month) {
        cy.get('#response-1').type(month)
    }

    // Eenter the year for Employment End Date
    enterEmploymentEndYear(year) {
        cy.get('#response-2').type(year)
    }

    // Click on 'Continue' button
    submit() {
      cy.get('div#current-question > .gem-c-button.gem-c-button--bottom-margin.govuk-button').click();
    }

  }
  
  export default new EmploymentEndDatePage();