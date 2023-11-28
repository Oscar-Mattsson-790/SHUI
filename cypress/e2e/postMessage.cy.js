describe("Post Message Test", () => {
  it("should allow a user to post a message", () => {
    cy.visit("/");
    cy.get(".write-msg-icon").click();
    cy.get(".username-input").type("TestUser");
    cy.get(".text-input").type("This is a test message");
    cy.get(".submit-button").click();
    cy.get(".message")
      .last()
      .should("contain", "This is a test message")
      .and("contain", "TestUser");
  });
});
