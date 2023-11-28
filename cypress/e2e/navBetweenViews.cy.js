describe("Navigation between views", () => {
  it("should navigate from message view to post message view and back", () => {
    cy.visit("/");
    cy.get(".write-msg-icon").click();
    cy.get(".message-form").should("be.visible");
    cy.get(".toggle-view").click();
    cy.get(".message-board").should("be.visible");
  });
});
