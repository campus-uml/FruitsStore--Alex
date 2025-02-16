import { render, screen } from "@testing-library/react"
import { describe, it, vi, Mock, expect } from "vitest"
import "@testing-library/jest-dom"
import { Toaster } from "../../../components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

vi.mock("@/hooks/use-toast")

describe("Toaster component", () => {
    it("renders without crashing", () => {
        (useToast as Mock).mockReturnValue({ toasts: [] })
        render(<Toaster />)
        const region = screen.getByRole("region");
        expect(region).toBeInTheDocument();
        expect(region).toMatchSnapshot();

    })

    it("renders toast messages", () => {
        (useToast as Mock).mockReturnValue({
            toasts: [
                { id: 1, title: "Toast 1", description: "Description 1" },
                { id: 2, title: "Toast 2", description: "Description 2" },
            ],
        })
        render(<Toaster />)
        expect(screen.getByText("Toast 1")).toBeInTheDocument()
        expect(screen.getByText("Description 1")).toBeInTheDocument()
        expect(screen.getByText("Toast 2")).toBeInTheDocument()
        expect(screen.getByText("Description 2")).toBeInTheDocument()
        expect(screen.getByText("Description 2")).toMatchSnapshot()

    })

    it("renders toast with action", () => {
        (useToast as Mock).mockReturnValue({
            toasts: [
                {
                    id: 1,
                    title: "Toast with Action",
                    description: "Description with Action",
                    action: <button>Action</button>,
                },
            ],
        })
        render(<Toaster />)
        expect(screen.getByText("Toast with Action")).toBeInTheDocument()
        expect(screen.getByText("Description with Action")).toBeInTheDocument()
        expect(screen.getByRole("button", { name: /action/i })).toBeInTheDocument()
        expect(screen.getByRole("button", { name: /action/i })).toMatchSnapshot()
    })
})
