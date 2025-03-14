context("validate the side bar and the header element/component", () => {
  it("should all element exists", () => {
    cy.wait(200);
    cy.get(".oxd-brand-banner > img")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");
    cy.wait(200);

    cy.get(".oxd-main-menu-search > .oxd-icon-button")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");
    cy.wait(200);

    cy.get(".oxd-main-menu-search")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");
    cy.wait(200);

    cy.get(".oxd-main-menu-search")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");
    cy.wait(200);

    cy.get(":nth-child(1) > .oxd-main-menu-item")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Admin");
    cy.wait(200);

    cy.get(":nth-child(2) > .oxd-main-menu-item")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("PIM");
    cy.wait(200);

    cy.get(":nth-child(3) > .oxd-main-menu-item")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Leave");
    cy.wait(200);

    cy.get(":nth-child(4) > .oxd-main-menu-item")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Time");
    cy.wait(200);

    cy.get(":nth-child(5) > .oxd-main-menu-item")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Recruitment");
    cy.wait(200);

    cy.get(":nth-child(6) > .oxd-main-menu-item")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("My Info");
    cy.wait(200);

    cy.get(":nth-child(7) > .oxd-main-menu-item")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Performance");
    cy.wait(200);

    cy.get(":nth-child(8) > .oxd-main-menu-item")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Dashboard");
    cy.wait(200);

    cy.get(":nth-child(9) > .oxd-main-menu-item")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Directory");
    cy.wait(200);

    cy.get(":nth-child(10) > .oxd-main-menu-item")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Maintenance");
    cy.wait(200);

    cy.get(":nth-child(11) > .oxd-main-menu-item")
      .scrollIntoView({ duration: 3000 })
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Claim");
    cy.wait(200);

    cy.get(":nth-child(12) > .oxd-main-menu-item")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Buzz");
    cy.wait(200);

    cy.get(".oxd-glass-button")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Upgrade");
    cy.wait(200);

    cy.get(".oxd-userdropdown")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");

    cy.wait(200);

    cy.get(".oxd-userdropdown-img")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");

    cy.wait(200);

    cy.get(".oxd-userdropdown-name")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");

    cy.wait(200);

    cy.get(".oxd-userdropdown-tab > .oxd-icon")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");

    cy.wait(200);
  });
});
