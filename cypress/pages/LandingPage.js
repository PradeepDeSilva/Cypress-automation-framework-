// LandingPage.js
class LandingPage {
  visit() {
    cy.visit('https://www.gov.uk/calculate-your-holiday-entitlement');
    cy.log('Visited the Calculate holiday entitlement landing page');
  }

  // Click Start button
  clickStartNow() {
    cy.contains('Start now').click();
  }
}

export default new LandingPage();