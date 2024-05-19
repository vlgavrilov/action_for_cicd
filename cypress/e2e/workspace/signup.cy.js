describe("App", () => {
  it("displays the logo", () => {
    cy.visit("/");
    cy.get('[data-cy="App-logo"]').should("exist");
    cy.get('[data-cy="App-logo"]').should("be.visible");
  });
});
