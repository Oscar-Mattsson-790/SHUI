describe("View all messages", () => {
  it("should display all messages", () => {
    cy.visit("/");
    cy.get(".message-board .message").should("have.length", 5); //
  });
});
