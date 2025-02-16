import { describe, test, it, expect } from "vitest";
import { render } from "@testing-library/react";

import App from "../../src/App";

describe("Testing de App.tsx", () => {
  it("componente renderizado correctamente", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });

  test('Deberia renderizar la palabra Frutas "', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText(/Frutas/i)).toBeTruthy();
  });


});
