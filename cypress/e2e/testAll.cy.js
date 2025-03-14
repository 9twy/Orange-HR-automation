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

import "./sidebar-componet.cy";
import "./dashboard-element.cy";
import "./Membership.cy";
import "./company-info.cy";
import "./contact-detailes.cy";
import "./dependancy.cy";
import "./emergancy-contact.cy";
import "./immigration.cy";
import "./personal-detaile.cy";
import "./qualifications.cy";
import "./user-crud.cy";
