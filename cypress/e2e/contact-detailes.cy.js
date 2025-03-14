context("contact detailes", () => {
  it("should be updated successfuly", () => {
    cy.get(":nth-child(6) > .oxd-main-menu-item").click();
    cy.get(":nth-child(2) > .orangehrm-tabs-item").click(); //click on the contact detaile button
    cy.get(
      ":nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("1500");
    cy.get(
      ":nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("2500"); // street 2
    cy.get(
      ":nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("riyadh"); //city
    cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input")
      .clear()
      .type("riyadh"); //state
    cy.get(":nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input")
      .clear()
      .type("5120"); // postal code
    cy.get(".oxd-select-text--after > .oxd-icon").click(); //click on drop down mune country
    cy.get(".oxd-select-dropdown > :nth-child(4)").click(); //click on the country name
    cy.get(
      ":nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("0555688"); //home
    cy.get(
      ":nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("05555555555");
    cy.get(
      ":nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("8465631"); //work
    cy.get(
      ":nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("me@gmail.com"); //email
    cy.get(
      ":nth-child(9) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("work@gmail.com"); // writing the email work
    cy.get(".oxd-form-actions > .oxd-button").click(); // save
    cy.get(".orangehrm-action-header > .oxd-button").click(); //click attachment
    cy.get('[type="file"]').selectFile("cypress/fixtures/sample_file.pdf", {
      force: true,
    });
    cy.get(
      ".orangehrm-horizontal-padding > .oxd-form > .oxd-form-actions > .oxd-button"
    ).click(); //save changes
  });
});
