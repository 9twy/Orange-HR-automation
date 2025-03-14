context("Personal detial", () => {
  it("should clear all the input and update the info", () => {
    cy.get(":nth-child(6) > .oxd-main-menu-item").click();
    cy.get(".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input")
      .clear()
      .type("saeed");
    cy.get(":nth-child(2) > :nth-child(2) > .oxd-input")
      .clear()
      .type("abdullah");
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input")
      .clear()
      .type("alghamdi");
    cy.get(
      ":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("9999");
    cy.get(
      ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("88888");
    cy.get(
      ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("00000");

    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    ).click(); //license date
    cy.get(".oxd-calendar-selector-year").click(); // click on year
    cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
    cy.get(".oxd-calendar-dropdown--option").contains("2004").click(); // click on 2022
    cy.get(".oxd-calendar-selector-month-selected").click(); // click on month
    cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
    cy.get(".oxd-calendar-dropdown--option").contains("October").click(); // click on 2022
    cy.get(".oxd-calendar-dates-grid").contains("1").click();

    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon"
    ).click(); // Click on Calander icon

    cy.get(".oxd-calendar-selector-year").click(); // click on year
    cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
    cy.get(".oxd-calendar-dropdown--option").contains("2004").click(); // click on 2022
    cy.get(".oxd-calendar-selector-month-selected").click(); // click on month
    cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
    cy.get(".oxd-calendar-dropdown--option").contains("October").click(); // click on 2022
    cy.get(".oxd-calendar-dates-grid").contains("1").click(); // Select Day
    cy.get(
      ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click(); //click natioanlty dropdown
    cy.get(".oxd-select-dropdown > :nth-child(5)").click(); //select other nationallty
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click(); //click drop down button
    cy.get(".oxd-select-dropdown > :nth-child(3)").click(); //select married status
    cy.get(
      ":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input"
    ).click(); //click on radio female

    cy.get(
      ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"
    ).click(); // save changes button
    cy.get(
      ".orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("success");

    cy.get(
      ".orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click(); //click on drop down blood type
    cy.get(".oxd-select-dropdown > :nth-child(4)").click(); //click on  the type blood
    cy.get(
      ".orangehrm-custom-fields > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button"
    ).click(); //save changes on blood type
    cy.get(".orangehrm-action-header > .oxd-button").click(); //click the option to add attachment
    cy.wait(2000);
    cy.get('[type="file"]').selectFile("cypress/fixtures/sample_file.pdf", {
      force: true,
    }); //attach file
  });
});
