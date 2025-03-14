context(" add dependancy", () => {
  it("should add denpendancy successfully", () => {
    cy.get(":nth-child(6) > .oxd-main-menu-item").click(); //click my info button
    cy.wait(1000);
    cy.get(":nth-child(4) > .orangehrm-tabs-item").click(); //click depemdamcy contact
    cy.wait(1000);
    cy.get(":nth-child(1) > .orangehrm-action-header > .oxd-button").click();
    cy.wait(1000);
    cy.get(":nth-child(2) > .oxd-input").type("ABC"); //name
    cy.wait(1000);
    cy.get(".oxd-select-text--after > .oxd-icon").click(); //type

    cy.wait(1000);
    cy.get(".oxd-select-dropdown > :nth-child(2)").click(); //select type
    cy.wait(1000);
    cy.get(".oxd-date-input > .oxd-icon").click(); //select date
    cy.wait(1000);
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
    cy.get(".oxd-calendar-dates-grid").contains("1").click(); // Select Day
    cy.wait(1000);
    cy.get(".oxd-button--secondary", { force: true }).click(); //save depndancy
  });
});
context("delete depnadncy", () => {
  it("delete successfully ", () => {
    cy.get(":nth-child(6) > .oxd-main-menu-item").click(); //click my info button
    cy.wait(1000);
    cy.get(":nth-child(4) > .orangehrm-tabs-item").click(); //click depemdamcy contact
    cy.get(
      ':nth-child(1) > .oxd-table-row > [style="flex: 0.5 1 0%;"] > .oxd-table-cell-actions > :nth-child(1)'
    ).click();
    cy.get(".oxd-button--label-danger").click(); //confirm deletion
  });
});
