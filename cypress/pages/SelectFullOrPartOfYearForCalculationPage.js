// SelectFullOrPartOfYearForCalculationPage.js
class SelectFullOrPartOfYearForCalculationPage {
    
    // Verify Select Full Or Part Of Year For Calculation Page is displayed
    assertSelectFullOrPartOfYearForCalculationPage() {
      cy.get('.gem-c-radio__heading-text.govuk-fieldset__heading').should('include.text', 'Do you want to work out holiday:')
      cy.log('Visited the page to select full Or part of year for calculation');
    }
  
    // Select the option 'for a full leave year'
    selectForAFullLeaveYear() {
      cy.get('#response-0').check();
    }

    // Select the option 'for someone starting part way through leave year'
    selectStartingPartWayThrough() {
      cy.get('#response-1').check(); 
    }
  
    // Select the option 'for someone leaving part way through leave year'
    selectLeavingPartWayThrough() {
        cy.get('#response-2').check(); 
    }

    // Select the option 'for someone starting and leaving part way through a leave year'
    selectStartingAndLeavingPartWayThrough() {
        cy.get('#response-3').check(); 
    }

    // Click on 'Continue' button
    submit() {
      cy.get('button.gem-c-button.govuk-button.gem-c-button--bottom-margin').click();
    }
  }
  
  export default new SelectFullOrPartOfYearForCalculationPage();