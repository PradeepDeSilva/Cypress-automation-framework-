// Scenario1
import LandingPage from '../pages/LandingPage';
import SelectIrregularHoursPage from '../pages/SelectIrregularHoursPage';
import HolidayEntitlementBasedOnPage from '../pages/HolidayEntitlementBasedOnPage';
import SelectFullOrPartOfYearForCalculationPage from '../pages/SelectFullOrPartOfYearForCalculationPage';
import NumberOfDaysWorkedPerWeekPage from '../pages/NumberOfDaysWorkedPerWeekPage';
import HolidayEntitlementResultsPage from '../pages/HolidayEntitlementResultsPage';
import LeaveYearStartPage from '../pages/LeaveYearStartPage';
import EmploymentStartDatePage from '../pages/EmploymentStartDatePage';
import EmploymentEndDatePage from '../pages/EmploymentEndDatePage';
import NumberOfHoursWorkedPerWeekPage from '../pages/NumberOfHoursWorkedPerWeekPage';


describe('Calculate Holiday Entitlement', () => {
  let Data; // Variable to hold the loaded test data from  ../fixures/TestData.json

  beforeEach(() => {
    
    LandingPage.visit();
    LandingPage.clickStartNow();
    SelectIrregularHoursPage.assertSelectIrregularHoursPage();
    cy.fixture('TestData').then((data) => {
      Data = data;
    });
  });

 // *********************************************************************************************************************
  // Test001 - Calculate Holiday Entitlement for Full Year with follwing options:
  // Does the employee work irregular hours or for part of the year? No
  // Is the holiday entitlement based on: days work per week
  // Do you want to work out holiday: for a full leave year
  // And entering number of days worked per week 
  // *********************************************************************************************************************

  it('Test001 - Calculate Holiday Entitlement for a full leave year', () => {
    cy.wrap(null).then(() => {

      // Select irregular hours as "No"
      SelectIrregularHoursPage.selectRegularHours();
      SelectIrregularHoursPage.submit();
      HolidayEntitlementBasedOnPage.assertHolidayEntitlementBasedOnPage();
      
      // Select 'days work per week'
      HolidayEntitlementBasedOnPage.selectDaysWorkPerWeek();
      HolidayEntitlementBasedOnPage.submit();
      SelectFullOrPartOfYearForCalculationPage.assertSelectFullOrPartOfYearForCalculationPage();

      // Select the option 'for a full leave year'
      SelectFullOrPartOfYearForCalculationPage.selectForAFullLeaveYear();
      SelectFullOrPartOfYearForCalculationPage.submit(); 
      NumberOfDaysWorkedPerWeekPage.assertNumberOfDaysWorkedPerWeekPage();
      
      // Enter number of days worked per week
      NumberOfDaysWorkedPerWeekPage.enterDaysWorkedPerWeek(Data.Test001NumberOfDaysWorkedPerWeek);
      NumberOfDaysWorkedPerWeekPage.submit();
      HolidayEntitlementResultsPage.assertHolidayEntitlementResultsPage();

      //Assertion: Check if the page shows the expected holiday entitlement after continuing
      HolidayEntitlementResultsPage.assertExpactedHolidayEntitlement(Data.Test001ExpactedHolidays);
    })
  });

  // *********************************************************************************************************************
  // Test002 - Calculate Holiday Entitlement for someone starting part way through a leave year with follwing options:
  // Does the employee work irregular hours or for part of the year? Yes
  // When does the leave year start? (enter value)
  // Is the holiday entitlement based on: days work per week
  // Do you want to work out holiday: for someone starting part way through a leave year
  // What was the employment start date? (enter value)
  // Number of days worked per week? (enter value)
  // **********************************************************************************************************************

  it('Test002 - Calculate Holiday Entitlement for someone starting part way through a leave year', () => {
    cy.wrap(null).then(() => {

      // Select irregular hours as "Yes"
      SelectIrregularHoursPage.selectIrregularHours();
      SelectIrregularHoursPage.submit();
      LeaveYearStartPage.assertLeaveYearStartPage();

      //Enter leave year start date and click on 'Continue'
      LeaveYearStartPage.enterleaveYearStartDay(Data.Test002LeaveYearStartDay); 
      LeaveYearStartPage.enterleaveYearStartMonth(Data.Test002LeaveYearStartMonth); 
      LeaveYearStartPage.enterleaveYearStartYear(Data.Test002LeaveYearStartYear); 
      LeaveYearStartPage.submit(); 
      HolidayEntitlementBasedOnPage.assertHolidayEntitlementBasedOnPage();
      
      // Select 'days work per week'
      HolidayEntitlementBasedOnPage.selectDaysWorkPerWeek();
      HolidayEntitlementBasedOnPage.submit();
      SelectFullOrPartOfYearForCalculationPage.assertSelectFullOrPartOfYearForCalculationPage();

      // Select the option 'for someone starting part way through a leave year'
      SelectFullOrPartOfYearForCalculationPage.selectStartingPartWayThrough();
      SelectFullOrPartOfYearForCalculationPage.submit(); 
      EmploymentStartDatePage.assertEmploymentStartDatePage();

       //Enter emplyment year start date and click on 'Continue'
      EmploymentStartDatePage.enterEmploymentStartDay(Data.Test002EymplomentYearStartDay); 
      EmploymentStartDatePage.enterEmploymentStartMonth(Data.Test002EmploymentYearStartMonth); 
      EmploymentStartDatePage.enterEmploymentStartYear(Data.Test002EmploymentYearStartYear); 
      EmploymentStartDatePage.submit(); 
      NumberOfDaysWorkedPerWeekPage.assertNumberOfDaysWorkedPerWeekPage();
      
      // Enter number of days worked per week
      NumberOfDaysWorkedPerWeekPage.enterDaysWorkedPerWeek(Data.Test002NumberOfDaysWorkedPerWeek);
      NumberOfDaysWorkedPerWeekPage.submit();
      HolidayEntitlementResultsPage.assertHolidayEntitlementResultsPage();

      //Assertion: Check if the page shows the expected holiday entitlement after continuing
      HolidayEntitlementResultsPage.assertExpactedHolidayEntitlement(Data.Test002ExpactedHolidays);
    })
  });


  // *********************************************************************************************************************
  // Test003 - Calculate Holiday Entitlement for someone leaving part way through a leave year with follwing options:
  // Does the employee work irregular hours or for part of the year? No
  // Is the holiday entitlement based on: hours worked per week
  // Do you want to work out holiday: for someone leaving part way through a leave year
  // What was the employment end date? (enter value)
  // When does the leave year start? (enter value)
  // Number of hours worked per week? (enter value)
  // Number of days worked per week? (enter value)
  // **********************************************************************************************************************

  it('Test003 - Calculate Holiday Entitlement for someone leaving part way through a leave year', () => {
    cy.wrap(null).then(() => {

      // Select irregular hours as "No"
      SelectIrregularHoursPage.selectRegularHours();
      SelectIrregularHoursPage.submit();
      HolidayEntitlementBasedOnPage.assertHolidayEntitlementBasedOnPage();

      // Select '	hours worked per week'
      HolidayEntitlementBasedOnPage.selectHoursWorkedPerWeek();
      HolidayEntitlementBasedOnPage.submit();
      SelectFullOrPartOfYearForCalculationPage.assertSelectFullOrPartOfYearForCalculationPage();

      // Select the option 'for someone leaving part way through a leave year'
      SelectFullOrPartOfYearForCalculationPage.selectLeavingPartWayThrough();
      SelectFullOrPartOfYearForCalculationPage.submit(); 
      EmploymentEndDatePage.assertEmploymentEndDatePage();
  
      // Enter emplyment end date and click on 'Continue'
      EmploymentEndDatePage.enterEmploymentEndDay(Data.Test003EymplomentEndDay); 
      EmploymentEndDatePage.enterEmploymentEndMonth(Data.Test003EmploymentEndMonth); 
      EmploymentEndDatePage.enterEmploymentEndYear(Data.Test003EmploymentEndYear); 
      EmploymentEndDatePage.submit(); 
      LeaveYearStartPage.assertLeaveYearStartPage();

      //Enter leave year start date and click on 'Continue'
      LeaveYearStartPage.enterleaveYearStartDay(Data.Test003LeaveYearStartDay); 
      LeaveYearStartPage.enterleaveYearStartMonth(Data.Test003LeaveYearStartMonth); 
      LeaveYearStartPage.enterleaveYearStartYear(Data.Test003LeaveYearStartYear); 
      LeaveYearStartPage.submit(); 
      NumberOfHoursWorkedPerWeekPage.assertNumberOfHoursWorkedPerWeekPage();

      //Enter Number of hours worked per week
      NumberOfHoursWorkedPerWeekPage.enterHoursWorkedPerWeek(Data.Test003NumberOfHoursWorkedPerWeek);
      NumberOfHoursWorkedPerWeekPage.submit();
      NumberOfDaysWorkedPerWeekPage.assertNumberOfDaysWorkedPerWeekPage();

      // Enter number of days worked per week
      NumberOfDaysWorkedPerWeekPage.enterDaysWorkedPerWeek(Data.Test003NumberOfDaysWorkedPerWeek);
      NumberOfDaysWorkedPerWeekPage.submit();
      HolidayEntitlementResultsPage.assertHolidayEntitlementResultsPage();

      //Assertion: Check if the page shows the expected holiday entitlement after continuing
      HolidayEntitlementResultsPage.assertExpactedHolidayEntitlement(Data.Test003ExpactedHolidays)

    })
  });


  // *********************************************************************************************************************
  // Test004 - Calculate Holiday Entitlement for someone starting and leaving part way through a leave year with follwing options:
  // Does the employee work irregular hours or for part of the year? No
  // Is the holiday entitlement based on: days worked per week
  // Do you want to work out holiday: for someone starting and leaving part way through a leave year
  // What was the employment start date? (enter value)
  // What was the employment end date? (enter value)
  // Number of days worked per week? (enter value)
  // **********************************************************************************************************************

  it('Test004 - Calculate Holiday Entitlement for someone starting and leaving part way through a leave year', () => {
    cy.wrap(null).then(() => {

      // Select irregular hours as "No"
      SelectIrregularHoursPage.selectRegularHours();
      SelectIrregularHoursPage.submit();
      HolidayEntitlementBasedOnPage.assertHolidayEntitlementBasedOnPage();

      // Select '	annualised hours'
      HolidayEntitlementBasedOnPage.selectDaysWorkPerWeek();
      HolidayEntitlementBasedOnPage.submit();
      SelectFullOrPartOfYearForCalculationPage.assertSelectFullOrPartOfYearForCalculationPage();

      // Select the option 'ffor someone starting and leaving part way through a leave year'
      SelectFullOrPartOfYearForCalculationPage.selectStartingAndLeavingPartWayThrough();
      SelectFullOrPartOfYearForCalculationPage.submit(); 
      EmploymentStartDatePage.assertEmploymentStartDatePage();

      //Enter emplyment year start date and click on 'Continue'
      EmploymentStartDatePage.enterEmploymentStartDay(Data.Test004EymplomentYearStartDay); 
      EmploymentStartDatePage.enterEmploymentStartMonth(Data.Test004EmploymentYearStartMonth); 
      EmploymentStartDatePage.enterEmploymentStartYear(Data.Test004EmploymentYearStartYear); 
      EmploymentStartDatePage.submit(); 
      EmploymentEndDatePage.assertEmploymentEndDatePage();
  
      // Enter emplyment end date and click on 'Continue'
      EmploymentEndDatePage.enterEmploymentEndDay(Data.Test004EymplomentEndDay); 
      EmploymentEndDatePage.enterEmploymentEndMonth(Data.Test004EmploymentEndMonth); 
      EmploymentEndDatePage.enterEmploymentEndYear(Data.Test004EmploymentEndYear); 
      EmploymentEndDatePage.submit(); 

      // Enter number of days worked per week
      NumberOfDaysWorkedPerWeekPage.enterDaysWorkedPerWeek(Data.Test004NumberOfDaysWorkedPerWeek);
      NumberOfDaysWorkedPerWeekPage.submit();
      HolidayEntitlementResultsPage.assertHolidayEntitlementResultsPage();

      //Assertion: Check if the page shows the expected holiday entitlement after continuing
      HolidayEntitlementResultsPage.assertExpactedHolidayEntitlement(Data.Test004ExpactedHolidays)

    })
  });


 // *********************************************************************************************************************
  // Test005 - Calculate Holiday Entitlement by entering earlier emplyment start date than leave year start date
  // Following options has been selected
  // Does the employee work irregular hours or for part of the year? No
  // Is the holiday entitlement based on: days worked per week
  // Do you want to work out holiday: for someone starting part way through a leave year
  // What was the employment start date? (enter a date)
  // When does the leave year start?(enter a date less than employment start date)
  // **********************************************************************************************************************

  it('Test005 - Calculate Holiday Entitlement by entering earlier emplyment start date than leave year start date (Negative test)', () => {
    cy.wrap(null).then(() => {

      // Select irregular hours as "No"
      SelectIrregularHoursPage.selectRegularHours();
      SelectIrregularHoursPage.submit();
      HolidayEntitlementBasedOnPage.assertHolidayEntitlementBasedOnPage();

      // Select '	annualised hours'
      HolidayEntitlementBasedOnPage.selectDaysWorkPerWeek();
      HolidayEntitlementBasedOnPage.submit();
      SelectFullOrPartOfYearForCalculationPage.assertSelectFullOrPartOfYearForCalculationPage();

      // Select the option 'ffor someone starting and leaving part way through a leave year'
      SelectFullOrPartOfYearForCalculationPage.selectStartingPartWayThrough();
      SelectFullOrPartOfYearForCalculationPage.submit(); 
      EmploymentStartDatePage.assertEmploymentStartDatePage();

      //Enter emplyment year start date and click on 'Continue'
      EmploymentStartDatePage.enterEmploymentStartDay(Data.Test005EymplomentYearStartDay); 
      EmploymentStartDatePage.enterEmploymentStartMonth(Data.Test005EmploymentYearStartMonth); 
      EmploymentStartDatePage.enterEmploymentStartYear(Data.Test005EmploymentYearStartYear); 
      EmploymentStartDatePage.submit(); 
      LeaveYearStartPage.assertLeaveYearStartPage();
  
      //Enter leave year start date and click on 'Continue'
      LeaveYearStartPage.enterleaveYearStartDay(Data.Test005LeaveYearStartDay); 
      LeaveYearStartPage.enterleaveYearStartMonth(Data.Test005LeaveYearStartMonth); 
      LeaveYearStartPage.enterleaveYearStartYear(Data.Test005LeaveYearStartYear); 
      LeaveYearStartPage.submit(); 
      //Validate error message
      LeaveYearStartPage.errorValidationWhenEarlyEmplymentStartDateThanLeaveYearStartDate(Data.Test005ErrorMessageValidation);
  
    })
  });


  // *********************************************************************************************************************
  // Test006 - Calculate Holiday Entitlement for a full leave year with annualised hours and other options:
  // Does the employee work irregular hours or for part of the year? Yes
  // When does the leave year start? (enter value)
  // Is the holiday entitlement based on: annualised hours
  // Do you want to work out holiday: for a full leave year
  // **********************************************************************************************************************

  //it('Test006 - Calculate Holiday Entitlement for a full leave year with annualised hours and other options:', () => {
    //cy.wrap(null).then(() => {

    // Code to be added

    //})
  //});


  // *********************************************************************************************************************
  // Test007 - Calculate Holiday Entitlement for a full leave year with compressed hours and other options:
  // Does the employee work irregular hours or for part of the year? Yes
  // When does the leave year start? (enter value)
  // Is the holiday entitlement based on: compressed hours
  // Do you want to work out holiday: for a full leave year
  // **********************************************************************************************************************

  //it('Test007 - Calculate Holiday Entitlement for a full leave year with compressed hours and other options:', () => {
    //cy.wrap(null).then(() => {

    // Code to be added

    //})
  //});


  // *********************************************************************************************************************
  // Test008 - Calculate Holiday Entitlement for a full leave year with shifts and other options:
  // Does the employee work irregular hours or for part of the year? Yes
  // When does the leave year start? (enter value)
  // Is the holiday entitlement based on: shifts
  // Do you want to work out holiday: for a full leave year
  // How many hours in each shift? (enter value)
  // How many shifts will be worked per shift pattern? (enter value)
  // How many days in the shift pattern? (enter value)
  // **********************************************************************************************************************

  //it('Test008 - Calculate Holiday Entitlement for a full leave year with shifts and other options:', () => {
    //cy.wrap(null).then(() => {

    // Code to be added

    //})
  //});


  // *********************************************************************************************************************
  // Test009 - Calculate Holiday Entitlement for someone starting and leaving part way through a leave year with shifts and other options:
  // Does the employee work irregular hours or for part of the year? Yes
  // When does the leave year start? (enter value)
  // Is the holiday entitlement based on: shifts
  // Do you want to work out holiday: for someone starting and leaving part way through a leave year
  // What was the employment start date? (enter value)
  // What was the employment end date? (enter value)
  // How many hours in each shift? (enter value)
  // How many shifts will be worked per shift pattern? (enter value)
  // How many days in the shift pattern? (enter value)
  // **********************************************************************************************************************

  //it('Test009 - Calculate Holiday Entitlement for someone starting and leaving part way through a leave year with shifts and other options:', () => {
    //cy.wrap(null).then(() => {

    // Code to be added

    //})
  //});


  // *********************************************************************************************************************
  // Test010 - Calculate Holiday Entitlement for someone starting part way through a leave year with compressed hours and other options:
  // Does the employee work irregular hours or for part of the year? No
  // Is the holiday entitlement based on: compressed hours
  // Do you want to work out holiday: for someone starting and leaving part way through a leave year
  // What was the employment start date? (enter value)
  // When does the leave year start? (enter value)
  // Number of hours worked per week? (enter value)
  // Number of days worked per week? (enter value)
  // **********************************************************************************************************************

  //it('Test010 - Calculate Holiday Entitlement for someone starting part way through a leave year with compressed hours and other options:', () => {
    //cy.wrap(null).then(() => {

    // Code to be added

    //})
  //});

});