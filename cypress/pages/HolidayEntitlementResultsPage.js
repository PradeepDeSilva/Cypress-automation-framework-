class HolidayEntitlementResultsPage{

    // Verify Holiday Entitlement Results Page is displayed
    assertHolidayEntitlementResultsPage() {
        cy.get('.gem-c-title__text.govuk-heading-xl').should('include.text', 'Information based on your answers')
        cy.log('Visited the Holiday Entitlement Summary Page');
    }
  
    // Verify expected holiday entitlement is displayed
    assertExpactedHolidayEntitlement(expectedHolidayEntitlement) {
        cy.get('.summary').should('include.text', expectedHolidayEntitlement)
      }
  
  }
  
  export default new HolidayEntitlementResultsPage();