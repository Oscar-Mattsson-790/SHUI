describe("Posting a Message", () => {
  it("should allow a user to post a new message and display it", () => {
    const testMessage = "This is a test message";
    const testAuthor = "TestUser";

    cy.visit("http://localhost:5173/SHUI/post");
    cy.get('input[placeholder="Användarnamn"]').type(testAuthor);
    cy.get('input[placeholder="Skriv ett meddelande"]').type(testMessage);
    cy.get("form").submit();

    cy.get(".Message").should("contain", testMessage);
    cy.get(".Message").should("contain", testAuthor);
  });
});
