import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { describe, expect } from "vitest";
import App from "../src/App";

describe("Shop", () => {
    it("the shopping cart counter increases", async () => {
        render(<App />);

        const shopLink = screen.getByText("Shop");
        await userEvent.click(shopLink);
        const addBtn = screen.getAllByRole("button");
        await userEvent.click(addBtn[0]);
        const cartCounter = screen.getByText("Shopping Cart (1)");
        expect(cartCounter).toBeInTheDocument();
    });
});
