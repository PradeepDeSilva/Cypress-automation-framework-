// NumberOfDaysWorkedPerWeekPage.js
class NumberOfDaysWorkedPerWeekPage {


    // Verify Number Of Days Worked Per Week Page is displayed
    assertNumberOfDaysWorkedPerWeekPage() {
      cy.get('.gem-c-label.govuk-label.govuk-label--l').should('include.text', 'Number of days worked per week?')
      cy.log('Visited the Number Of Days Worked Per Week Page');
    }

    // Eenter the number of days worked per week
    enterDaysWorkedPerWeek(days) {
      cy.get('#response').type(days)
    }

    // Click on 'Continue' button
    submit() {
      cy.get('button.gem-c-button.govuk-button.gem-c-button--bottom-margin').click();
    }

  }
  
  export default new NumberOfDaysWorkedPerWeekPage();