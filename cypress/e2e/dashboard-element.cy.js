context("validate dashboard element appear correctlly", () => {
  it("all dashboard element should appear on the interface", () => {
    cy.get(
      ":nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text"
    )
      .should("be.visible")
      .invoke("css", "border", "2px solid red") // Highlight the element
      .contains("Time at Work");
    cy.wait(200);
    cy.get(".orangehrm-attendance-card-profile")
      .should("be.visible")
      .invoke("css", "border", "2px solid red"); // Highlight the element
    cy.wait(200);
    cy.get(".orangehrm-attendance-card-bar")
      .should("be.visible")
      .invoke("css", "border", "2px solid red"); // Highlight the element
    cy.wait(200);
    cy.get(".orangehrm-attendance-card-summary")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");
    cy.wait(500);
    cy.get(".emp-attendance-chart > canvas")
      .should("be.visible")
      .invoke("css", "border", "2px solid red"); // Highlight the element
    cy.wait(200);
    cy.get(
      ":nth-child(2) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text"
    )
      .scrollIntoView({ duration: 3000 })
      .should("be.visible")
      .invoke("css", "border", "2px solid red") // Highlight the element
      .contains("My Action");
    cy.wait(700);
    cy.get(
      ":nth-child(2) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-icon"
    )
      .should("be.visible")
      .invoke("css", "border", "2px solid red"); // Highlight the element

    cy.wait(700);

    cy.get(":nth-child(2) > .oxd-sheet")
      .should("be.visible")
      .invoke("css", "border", "2px solid red"); // Highlight the element
    cy.wait(500);
    cy.get(
      ":nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text"
    )
      .scrollIntoView({ duration: 3000 })
      .should("be.visible")
      .invoke("css", "border", "2px solid red") // Highlight the element
      .contains("Quick Launch");

    cy.wait(500);
    cy.get(
      ":nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-icon"
    )
      .should("be.visible")
      .invoke("css", "border", "2px solid red"); // Highlight the element
    cy.get(".orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(1)")
      .should("be.visible")
      .invoke("css", "border", "2px solid red") // Highlight the element
      .contains("Assign Leave");
    cy.wait(200);

    cy.get(".orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(2)")
      .should("be.visible")
      .invoke("css", "border", "2px solid red") // Highlight the element
      .contains("Leave List");
    cy.wait(200);
    cy.get(".orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(3)")
      .should("be.visible")
      .invoke("css", "border", "2px solid red") // Highlight the element
      .contains("Timesheets");
    cy.wait(200);
    cy.get(".orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(4)")
      .should("be.visible")
      .invoke("css", "border", "2px solid red") // Highlight the element
      .contains("Apply Leave");
    cy.wait(200);
    cy.get(".orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(5)")
      .should("be.visible")
      .invoke("css", "border", "2px solid red") // Highlight the element
      .contains("My Leave");
    cy.wait(200);
    cy.get(".orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(6)")
      .should("be.visible")
      .invoke("css", "border", "2px solid red") // Highlight the element
      .contains("My Timesheet");
    cy.wait(200);
    cy.get(":nth-child(3) > .oxd-sheet")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");
    cy.wait(200);
    cy.get(
      ":nth-child(4) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text"
    )
      .scrollIntoView({ duration: 3000 })
      .should("be.visible")
      .invoke("css", "border", "2px solid red") // Highlight the element
      .contains("Buzz Latest Posts");

    cy.wait(200);
    cy.get(
      ":nth-child(4) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-icon"
    )
      .should("be.visible")
      .invoke("css", "border", "2px solid red");

    cy.wait(200);
    cy.get(":nth-child(4) > .oxd-sheet")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");
    cy.wait(200);

    cy.get(":nth-child(5) > .oxd-sheet > .orangehrm-dashboard-widget-header")
      .scrollIntoView({ duration: 3000 })
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Employees on Leave Today");

    cy.wait(200);
    cy.get(".bi-gear-fill")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");

    cy.wait(200);

    cy.get(":nth-child(5) > .oxd-sheet")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");
    cy.wait(200);
    cy.get(":nth-child(6) > .oxd-sheet > .orangehrm-dashboard-widget-header")
      .scrollIntoView({ duration: 3000 })
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Employee Distribution by Sub Unit");

    cy.wait(200);
    cy.get(":nth-child(6) > .oxd-sheet")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");

    cy.wait(200);
    cy.get(".oxd-pie-chart")
      .find("canvas")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .should(($canvas) => {
        const canvas = $canvas[0];
        expect(canvas.width).to.be.greaterThan(0);
        expect(canvas.height).to.be.greaterThan(0);
      });

    cy.wait(200);
    cy.get(":nth-child(7) > .oxd-sheet > .orangehrm-dashboard-widget-header")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("Employee Distribution by Location");

    cy.wait(200);
    cy.get(":nth-child(7) > .oxd-sheet")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");
    cy.wait(200);

    cy.get(".oxd-layout-footer")
      .should("be.visible")
      .invoke("css", "border", "2px solid red");
    cy.wait(200);

    cy.get(".oxd-layout-footer > :nth-child(1)")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("OrangeHRM OS 5.7");
    cy.wait(200);

    cy.get(".oxd-layout-footer > :nth-child(2)")
      .should("be.visible")
      .invoke("css", "border", "2px solid red")
      .contains("© 2005 - 2025 OrangeHRM, Inc. All rights reserved.");
  });
});
