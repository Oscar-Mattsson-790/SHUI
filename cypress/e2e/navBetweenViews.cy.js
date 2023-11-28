describe("Navigation Between Views", () => {
  it("should navigate to the post message view and back to home", () => {
    cy.visit("http://localhost:5173/SHUI");
    cy.get('a[href="/SHUI/post"]').click();
    cy.url().should("include", "/SHUI/post");
    cy.get('a[href="/SHUI"]').click();
    cy.url().should("eq", "http://localhost:5173/SHUI");
  });
});
