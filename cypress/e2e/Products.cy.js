describe("Pruebas en la card de frutas", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("debería mostrar la insignia 'FRESCO' si el producto es fresco", () => {
    cy.get(".relative.aspect-square .absolute.right-2.bottom-2")
      .should("contain.text", "FRESCO")
      .and("have.class", "bg-sky-500");
  });

  it("debería mostrar la insignia 'TOP' si el producto es el mejor", () => {
    cy.get(".relative.aspect-square .absolute.right-2.bottom-2")
      .should("contain.text", "TOP")
      .and("have.class", "bg-orange-500");
  });

  it("debería mostrar el precio del producto", () => {
    cy.get("span.text-lg.font-bold.text-green-500").should("exist");
  });

  it("debería mostrar el nombre del producto", () => {
    cy.get(".font-medium.line-clamp-1").should("exist");
  });

  it("debería mostrar la imagen del producto", () => {
    cy.get("img.h-full.w-full.object-cover").should("exist");
  });

  it("debería mostrar el botón de agregar al carrito", () => {
    cy.get(
      "button.h-8.w-8.rounded-lg.bg-green-500.p-0.hover\\:bg-green-600.transition-colors"
    )
      .should("exist")
      .and(
        "have.class",
        "h-8 w-8 rounded-lg bg-green-500 p-0 hover:bg-green-600 transition-colors"
      );
  });
});
