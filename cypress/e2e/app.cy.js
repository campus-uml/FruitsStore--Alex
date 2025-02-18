describe("Pruebas en la tienda de frutas", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Debería mostrar productos correctamente", () => {
    cy.get("h1").should("contain", "Frutas");
  });

  it("Debería mostrar el flecha correctamente", () => {
    cy.get("button.rounded-full.p-1.hover\\:bg-gray-100.lg\\:hidden").should(
      "exist"
    );
    cy.get("button.rounded-full.p-1.hover\\:bg-gray-100.lg\\:hidden")
      .find("svg.h-6.w-6")
      .should("exist");
  });

  it("Debería mostrar el botón de búsqueda correctamente", () => {
    cy.get("button.rounded-full.p-1.hover\\:bg-gray-100").should("exist");
    cy.get("button.rounded-full.p-1.hover\\:bg-gray-100")
      .find("svg.h-6.w-6")
      .should("exist");
  });
});
