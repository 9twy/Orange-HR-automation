context("ADD Membership", () => {
  it("should add membership successfully", () => {
    cy.get(":nth-child(6) > .oxd-main-menu-item").click(); // my info button
    cy.get(":nth-child(10) > .orangehrm-tabs-item").click(); //membership button
    cy.get(":nth-child(1) > .orangehrm-action-header > .oxd-button").click(); // add membership
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click(); //drop down munemebership
    cy.get(".oxd-select-dropdown > :nth-child(2)").click(); //click specific membership
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click(); //dropdown 2
    cy.get(".oxd-select-dropdown > :nth-child(3)").click(); // select indivduall
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click(); //dropdown 3
    cy.get(".oxd-select-dropdown > :nth-child(2)").click(); //currncy selection
    cy.get(":nth-child(2) > .oxd-input").type("2600"); //subscription amount
    // sub from date
    cy.get(
      ":nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon"
    ).click();
    cy.get(".oxd-calendar-selector-year").click(); // click on year
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").contains("2011").click(); // click on 2022
    cy.wait(1000);
    cy.get(".oxd-calendar-selector-month-selected").click(); // click on month
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").contains("October").click(); // click on 2022
    cy.wait(1000);
    cy.get(".oxd-calendar-dates-grid").contains("20").click(); // Select Day
    cy.wait(1000);
    // to date
    cy.get(
      ":nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon"
    ).click();
    cy.get(".oxd-calendar-selector-year").click(); // click on year
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").contains("2012").click(); // click on 2022
    cy.wait(1000);
    cy.get(".oxd-calendar-selector-month-selected").click(); // click on month
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").contains("October").click(); // click on 2022
    cy.wait(1000);
    cy.get(".oxd-calendar-dates-grid").contains("20").click(); // Select Day
    cy.wait(1000);
    cy.get(".oxd-button--secondary").click(); // save changes
    cy.wait(2000);
    cy.get(".oxd-toast").should("be.visible"); //success messages
  });
});
