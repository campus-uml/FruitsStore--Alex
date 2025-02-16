import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeAll } from "vitest";
import { useIsMobile } from "../hooks/use-mobile";

beforeAll(() => {
  vi.stubGlobal("matchMedia", (query: string | string[]) => ({
    matches: query.includes(`${MOBILE_BREAKPOINT - 1}px`),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
});

const MOBILE_BREAKPOINT = 768;

describe("useIsMobile", () => {
  it("debería devolver verdadero cuando el ancho de la pantalla es menor que el punto de interrupción móvil", () => {
    vi.stubGlobal("innerWidth", MOBILE_BREAKPOINT - 1);

    const TestComponent = () => {
      const isMobile = useIsMobile();
      return <div>{isMobile ? "Mobile" : "Desktop"}</div>;
    };

    render(<TestComponent />);

    expect(screen.getByText("Mobile")).toBeInTheDocument();
  });

  it("debería devolver falso cuando el ancho de la pantalla es mayor que el punto de interrupción móvil", () => {
    vi.stubGlobal("innerWidth", MOBILE_BREAKPOINT + 1);

    const TestComponent = () => {
      const isMobile = useIsMobile();
      return <div>{isMobile ? "Mobile" : "Desktop"}</div>;
    };

    render(<TestComponent />);

    expect(screen.getByText("Desktop")).toBeInTheDocument();
  });
});
