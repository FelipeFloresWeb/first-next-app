describe("When rendering a home page component", () => {
  it("have a title and swith to change theme", () => {
    cy.visit("/");

    const title = cy
      .get("h2[data-testid='main-title']")
      .contains("Battle Game!");

    cy.get('label[data-testid="color-mode-switch"]').click();

    expect(title).to.exist;
  });
});
