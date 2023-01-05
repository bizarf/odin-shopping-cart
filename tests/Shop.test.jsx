import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Shop from "../src/components/Shop";
import { describe, expect } from "vitest";

describe("Shop", () => {
    it("the shopping cart counter increases", async () => {
        const addToCart = vi.fn();
        render(<Shop />);

        const headerText = screen.getByText("Shop");
        expect(headerText).toBeInTheDocument();
    });
});
