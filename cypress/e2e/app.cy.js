describe("Pruebas en la tienda de frutas", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Debería mostrar productos correctamente", () => {
    cy.get("h1").should("contain", "Frutas"); // Verifica el título
  });
});
