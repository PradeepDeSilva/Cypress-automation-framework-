class HolidayEntitlementBasedOnPage{
  

    // Verify Holiday Entitlement Based On Page is displayed
    assertHolidayEntitlementBasedOnPage() {
      cy.get('.gem-c-radio__heading-text.govuk-fieldset__heading').should('include.text', 'Is the holiday entitlement based on:')
      cy.log('Visited the Holiday Entitlement Based On Page');
    }

    // Select the option 'days work per week'
    selectDaysWorkPerWeek(){
      cy.get('#response-0').check();
    }
  
     // Select the option 'hours worked per week'
    selectHoursWorkedPerWeek() {
      cy.get('#response-1').check();
    }

    // Select the option 'annualised hours'
    selectAnnualisedHours() {
      cy.get('#response-2').check();
    }

    // Select the option 'compressed hours'
    selectCompressedHours() {
      cy.get('#response-3').check();
    }
  
    // Select the option 'shifts'
    selectShifts() {
      cy.get('#response-4').check();
    }

    // Click on 'Continue' button
    submit() {
      cy.get('button.gem-c-button.govuk-button.gem-c-button--bottom-margin').click();
    }
  }
  
  export default new HolidayEntitlementBasedOnPage();