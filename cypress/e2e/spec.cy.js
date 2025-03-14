//starting
beforeEach(() => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.wait(2500);
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "Admin"
  );
  cy.wait(1500);

  cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "admin123"
  );

  cy.get(".oxd-button").click(); // click login button
  cy.wait(500);
});
after(() => {
  cy.wait(3000);
  cy.get(".oxd-userdropdown-tab > .oxd-icon").click(); //click dropdown mune
  cy.wait(2000);
  cy.get(":nth-child(4) > .oxd-userdropdown-link").click(); //click logout button
});
context("login", () => {
  it("should login correctlly", () => {});

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
        .invoke("css", "border", "2px solid red")
        .contains("Upgrade");
      cy.wait(200);

      cy.get(".oxd-userdropdown-img")
        .should("be.visible")
        .invoke("css", "border", "2px solid red")
        .contains("Upgrade");
      cy.wait(200);

      cy.get(".oxd-userdropdown-name")
        .should("be.visible")
        .invoke("css", "border", "2px solid red")
        .contains("Upgrade");
      cy.wait(200);

      cy.get(".oxd-userdropdown-tab > .oxd-icon")
        .should("be.visible")
        .invoke("css", "border", "2px solid red")
        .contains("Upgrade");
      cy.wait(200);
    });
  });
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
          cy.get(
            ":nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon"
          ).click({ force: true }); // click trash
          cy.get(":nth-child(1) > .oxd-icon")
            .should("be.visible")
            .click({ force: true, multiple: true });
        });
      cy.wait(4000);
      cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click(); // confirm delete
    });
  });
  context("Personal detial", () => {
    it("should clear all the input and update the info", () => {
      cy.get(":nth-child(6) > .oxd-main-menu-item").click();
      cy.get(
        ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
      )
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
      cy.get(".oxd-table-body > :nth-child(1) > .oxd-table-row").should(
        "exist"
      );
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
      cy.get(":nth-child(7) > .oxd-table-cell-actions > :nth-child(1)").click();
      cy.get(".oxd-button--label-danger").click(); //confirm deletion
    });
  });
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
      cy.get(".oxd-calendar-dropdown--option").contains("2011").click(); // click on 2022
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
  context("ADD Membership", () => {
    it("should add membership successfully", () => {
      cy.get(":nth-child(6) > .oxd-main-menu-item").click(); // my info button
      cy.get(":nth-child(10) > .orangehrm-tabs-item").click(); //membership button
      cy.get(":nth-child(1) > .orangehrm-action-header > .oxd-button").click(); // add membership
      cy.get(
        ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ).click(); //drop down munemebership
      cy.get(".oxd-select-dropdown > :nth-child(2)").click(); //click specific membership
      cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ).click(); //dropdown 2
      cy.get(".oxd-select-dropdown > :nth-child(3)").click(); // select indivduall
      cy.get(
        ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ).click(); //dropdown 3
      cy.get(".oxd-select-dropdown > :nth-child(2)").click(); //currncy selection
      cy.get(":nth-child(2) > .oxd-input").type("2600"); //subscription amount
      // sub from date
      cy.get(
        ":nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon"
      ).click();
      cy.get(".oxd-calendar-selector-year").click(); // click on year
      cy.wait(1000);
      cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
      cy.wait(1000);
      cy.get(".oxd-calendar-dropdown--option").contains("2011").click(); // click on 2022
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
        ":nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon"
      ).click();
      cy.get(".oxd-calendar-selector-year").click(); // click on year
      cy.wait(1000);
      cy.get(".oxd-calendar-dropdown--option").should("be.visible"); // make sure it's visible
      cy.wait(1000);
      cy.get(".oxd-calendar-dropdown--option").contains("2012").click(); // click on 2022
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
});
