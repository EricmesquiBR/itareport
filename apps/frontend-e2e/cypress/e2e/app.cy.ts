import { getHeroTitle, getLoginTitle, getRegisterTitle } from "../support/app.po";

describe("frontend-e2e", () => {
  beforeEach(() => cy.visit("/"));

  it("shows the landing page hero section", () => {
    getHeroTitle().should("be.visible");
    cy.contains("Collaborate with other citizens and help make our city a better place.").should(
      "be.visible",
    );
  });

  it("navigates to login from the header", () => {
    cy.contains("a", "Login").click();
    cy.url().should("include", "/login");
    getLoginTitle().should("be.visible");
    cy.get("input#email").should("be.visible");
    cy.get("input#password").should("be.visible");
  });

  it("navigates to register from the header", () => {
    cy.contains("a", "Sign Up").click();
    cy.url().should("include", "/register");
    getRegisterTitle().should("be.visible");
    cy.get("input#name").should("be.visible");
    cy.get("input#cpf").should("be.visible");
    cy.get("input#email").should("be.visible");
  });

  it("opens the map page from the CTA", () => {
    cy.contains("a", "View Issue Map").click();
    cy.url().should("include", "/map");
    cy.contains("a", "ItaReport").should("be.visible");
  });
});
