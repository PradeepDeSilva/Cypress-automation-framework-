// SelectIrregularHoursPage.js
class SelectIrregularHoursPage {


    // Verify Select Irregular Hours page is loaded
    assertSelectIrregularHoursPage() {
      cy.get('#response-0').should('exist');
      cy.log('Visited the Select Irregular Hours page');
    }
  
    // Select employee has worked on irregular hours/ part of the year as 'Yes'
    selectIrregularHours() {
      cy.get('#response-0').check();
    }
  
    // Select employee has worked on irregular hours/ part of the year as 'YNo'
    selectRegularHours() {
      cy.get('#response-1').check(); 
    }
  
    // Click on 'Continue' button
    submit() {
      cy.get('button.gem-c-button.govuk-button.gem-c-button--bottom-margin').click();
    }
  }
  
  export default new SelectIrregularHoursPage();