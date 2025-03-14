context("add immigration", () => {
  it("added successfully ", () => {
    cy.get(":nth-child(6) > .oxd-main-menu-item").click(); //click my info button
    cy.wait(1000);
    cy.get(":nth-child(5) > .orangehrm-tabs-item").click(); //click immigration contact
    cy.get(":nth-child(1) > .orangehrm-action-header > .oxd-button").click(); //add button
    cy.get(
      ":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label"
    ).click(); // click on visa radio button
    cy.get(":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label").type(
      "05654"
    );
    //issuse date
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    ).click();
    cy.get(".oxd-calendar-selector-year").click(); // click on year
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").contains("2004").click(); // click on 2022
    cy.wait(1000);
    cy.get(".oxd-calendar-selector-month-selected").click(); // click on month
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
    cy.wait(1000);
    cy.get(".oxd-calendar-dropdown--option").contains("October").click(); // click on 2022
    cy.wait(1000);
    cy.get(".oxd-calendar-dates-grid").contains("2").click(); // Select Day
    cy.wait(1000);

    // end date
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
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

    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("None");
    //eligable review date
    cy.get(
      ":nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
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
    cy.get(".oxd-select-text--after > .oxd-icon").click(); // click on dropmune
    cy.get(".oxd-select-dropdown > :nth-child(2)").click(); //click on the issue by
    cy.get(".oxd-button--secondary").click(); //save changes
  });
});
context("delete immigration", () => {
  it("should delete immigration successfully", () => {
    cy.get(":nth-child(6) > .oxd-main-menu-item").click(); //click my info button
    cy.wait(1000);
    cy.get(":nth-child(5) > .orangehrm-tabs-item").click(); //click immigration contact
    cy.get(".oxd-table-cell-actions > :nth-child(2)").click();
    cy.get(".oxd-button--label-danger").click(); //confirm deletion
  });
});
