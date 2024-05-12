// LeaveYearStartPage.js
class LeaveYearStartPage {


    // Verify Leave Year Start Page is displayed
    assertLeaveYearStartPage() {
      cy.get('.govuk-fieldset__heading').should('include.text', 'When does the leave year start?')
      cy.log('Visited the Leave Year Start Page');
    }
      
    // Eenter the day for Leave Year Start Date
    enterleaveYearStartDay(day) {
        cy.get('#response-0').type(day)
    }

    // Eenter the month for Leave Year Start Date
    enterleaveYearStartMonth(month) {
        //this.leaveYearStartMonthInput.type(month)
        cy.get('#response-1').type(month)
    }
      
    // Eenter the year for Leave Year Start Date
    enterleaveYearStartYear(year) {
        cy.get('#response-2').type(year)
    }

    // Click on 'Continue' button
    submit() {
      cy.get('div#current-question > .gem-c-button.gem-c-button--bottom-margin.govuk-button').click();
    }

    // Error validation when emplyment start date is earlier than leave year start date
    errorValidationWhenEarlyEmplymentStartDateThanLeaveYearStartDate(expectedErrorMessage) {
        cy.get('.govuk-form-group.govuk-form-group--error > .gem-c-error-message.govuk-error-message').should('include.text', expectedErrorMessage)
    }

  }
  
  export default new LeaveYearStartPage();