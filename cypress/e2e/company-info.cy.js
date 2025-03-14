context("validate company info element appearing", () => {
  it("about page should disply the info recoreded", () => {
    cy.get(".oxd-userdropdown-tab > .oxd-icon").click(); //click drop down top mune
    cy.wait(2000);
    cy.get(":nth-child(1) > .oxd-userdropdown-link").click(); //click about button
    cy.get(".oxd-grid-2 > :nth-child(1) > .oxd-text")
      .should("be.visible")
      .contains("Company Name:");
    cy.get(".oxd-grid-2 > :nth-child(5) > .oxd-text")
      .should("be.visible")
      .contains("Active Employees:");
    cy.get(".oxd-grid-2 > :nth-child(3) > .oxd-text")
      .should("be.visible")
      .contains("Version:");
    cy.get(".oxd-dialog-close-button").click(); //close the popup window
  });
});
