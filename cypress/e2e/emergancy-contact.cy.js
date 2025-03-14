context("Emergancy Contact", () => {
  it("emergancy contact should update correctlly", () => {
    cy.get(":nth-child(6) > .oxd-main-menu-item").click(); //click my info button
    cy.get(":nth-child(3) > .orangehrm-tabs-item").click(); //click emergancy contact
    cy.get(":nth-child(1) > .orangehrm-action-header > .oxd-button").click(); //add button assigned emergancy contact
    cy.get(
      ":nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("saeed"); //name
    cy.get(
      ":nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("father"); //relationship
    cy.get(
      ":nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("055698"); //home number
    cy.get(
      ":nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("04565468"); //mobile number
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("06565685"); //work telephone
    cy.get(".oxd-button--secondary").click(); //save changes to assigned emergancy contact
    cy.get(".oxd-table-body > :nth-child(1) > .oxd-table-row").should("exist");
    cy.get(":nth-child(1) > .oxd-table-row > :nth-child(2) > div").contains(
      "saeed"
    );
    cy.wait(1000); // checks if the data already exists.
    cy.get(":nth-child(2) > .orangehrm-action-header > .oxd-button").click(); //attach button
    cy.wait(1000);
    cy.get('[type="file"]').selectFile("cypress/fixtures/sample_file.pdf", {
      force: true,
    });
    cy.wait(1000);
    cy.get(".oxd-button--secondary").click(); //save the attach file
  });
});
context("delete emergancy contact and attach files", () => {
  it("should deleted successfully", () => {
    cy.get(":nth-child(6) > .oxd-main-menu-item").click(); //click my info button
    cy.get(":nth-child(3) > .orangehrm-tabs-item").click(); //click emergancy contact
    cy.get(
      ":nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)"
    ).click(); //delete a specific contact
    cy.get(".oxd-button--label-danger").click(); //confirm deletion
  });
});
