describe("Viewing All Messages", () => {
  it("should display all posted messages", () => {
    cy.visit("http://localhost:5173/SHUI");

    const initialMessageCount = 5;
    cy.get(".Message").should("have.length", initialMessageCount);

    cy.get(".Message").each(($message) => {
      cy.wrap($message).invoke("text").should("not.be.empty");
    });
  });
});
