context("Add User", () => {
  it("should add a new user", function () {
    cy.get(":nth-child(1) > .oxd-main-menu-item").click(); // click admin button

    cy.wait(2000);
    cy.get(".orangehrm-header-container > .oxd-button").click(); // click add button
    cy.wait(3000);

    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click(""); // click User Role button
    cy.wait(3000);

    cy.get(".oxd-select-dropdown > :nth-child(2)").click(""); // click Status button

    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click(""); // click Status button
    cy.wait(3000);

    cy.get(".oxd-select-dropdown > :nth-child(2)").click(""); // choose Enabled
    cy.wait(3000);

    cy.get(".oxd-autocomplete-text-input > input").type("Timothy Amiano"); // Write name on Employee Name
    cy.wait(3000);

    cy.get(".oxd-autocomplete-option").click(""); // choose Enabled
    cy.wait(4000);

    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("sae22sed");
    cy.wait(3000);

    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("As500600700");
    cy.wait(3000);

    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("As500600700");
    cy.wait(3000);

    cy.get(".oxd-button--secondary").click("");
    cy.wait(3000);
  });
});
context("delete a user", () => {
  it("should delete a user successfully", () => {
    cy.get(":nth-child(1) > .oxd-main-menu-item").click(); // click admin button
    cy.wait(1000);
    // assertion
    cy.get(".oxd-table-body")
      .should("contain", "sae22sed")
      .then(() => cy.log("Job title verified"));
    cy.wait(4000); // First find the exact row containing your job title and scrollview
    cy.contains(".oxd-table-row", "sae22sed")
      .scrollIntoView({ duration: 3000 })
      .should("exist")
      .within(() => {
        // checkbox click
        cy.get(":nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon").click(
          { force: true }
        ); // click trash
        cy.get(":nth-child(1) > .oxd-icon")
          .should("be.visible")
          .click({ force: true, multiple: true });
      });
    cy.wait(4000);
    cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click(); // confirm delete
  });
});
