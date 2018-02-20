describe("Page content", () => {
  it("shows correct content", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("have.text", "MVCI Character Guide");
    cy.get(".description").should("have.text", "Moves");
    cy.get(".combos").should("have.text", "Combos");
    cy.get(".add").should("contain", "Add a Combo");

    cy.get("body > header nav > ul > li").as("listItems");
    cy
      .get("@listItems")
      .eq(0)
      .find("a")
      .should("have.text", "Demo");
    cy
      .get("@listItems")
      .eq(1)
      .find("a")
      .should("have.text", "Order");

    cy
      .get(".nested")
      .eq(0)
      .should("contain", "Product");

    cy
      .get("@listItems")
      .eq(2)
      .find("ul > li")
      .as("dropDown");

    cy
      .get("@dropDown")
      .eq(0)
      .should("have.text", "Product");

    cy
      .get("@dropDown")
      .eq(1)
      .should("have.text", "Documentation");
    cy
      .get("@dropDown")
      .eq(2)
      .should("have.text", "Features");
    cy
      .get("@dropDown")
      .eq(3)
      .should("have.text", "Technology");

    cy
      .get("body > section")
      .eq(2)
      .find("h4")
      .should("have.length", 6);

    cy.get("button").click();
    cy
      .get("a")
      .contains("Order")
      .click();
    cy.url().should("be", "/order");
  });
});
