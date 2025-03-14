context("adding qualifications", () => {
  it("should add qulification successfully", () => {
    cy.get(":nth-child(6) > .oxd-main-menu-item").click(); // click my info
    cy.get(":nth-child(9) > .orangehrm-tabs-item").click(); //click qulification button
    cy.get(
      ":nth-child(2) > :nth-child(1) > .orangehrm-action-header > .oxd-button"
    ).click(); //click add qulification button
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Oumla");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("backend engineer");
    /// from date
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon"
    ).click();
    cy.get(".oxd-calendar-selector-year").click(); // click on year
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").contains("2009").click(); // click on 2022
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
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon"
    ).click();
    cy.get(".oxd-calendar-selector-year").click(); // click on year
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").contains("2010").click(); // click on 2022
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
