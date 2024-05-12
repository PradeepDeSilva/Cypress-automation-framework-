// NumberOfHoursWorkedPerWeekPage.js
class NumberOfHoursWorkedPerWeekPage {


    // Verify Number Of Hours Worked Per Week Page is displayed
    assertNumberOfHoursWorkedPerWeekPage() {
      cy.get('.gem-c-label.govuk-label.govuk-label--l').should('include.text', 'Number of hours worked per week?')
      cy.log('Visited the Number Of Hours Worked Per Week Page');
    }

    // Eenter the number of hours worked per week
    enterHoursWorkedPerWeek(hours) {
        cy.get('#response').type(hours)
    }

    // Click on 'Continue' button
    submit() {
      cy.get('button.gem-c-button.govuk-button.gem-c-button--bottom-margin').click();
    }

  }
  
  export default new NumberOfHoursWorkedPerWeekPage();