describe("Pruebas en la pestaña de categorías", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

it("Debería mostrar tab de categorias", () => {
    cy.get("button.rounded-full.px-6.py-2.text-sm.font-medium.transition-colors").should("exist");
    cy.get("button.rounded-full.px-6.py-2.text-sm.font-medium.transition-colors")
        .should("have.class", "hover:bg-gray-100")
        .and("have.class", "hover:text-gray-900");
});
});
