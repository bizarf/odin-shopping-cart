import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "../src/App";

describe("Shop", () => {
    it("the shopping cart counter increases by 1", async () => {
        const user = userEvent.setup();
        render(<App />);

        const shopLink = screen.getByRole("link", { name: "Shop" });
        await user.click(shopLink);
        const addBtn = screen.getAllByRole("button");
        await user.click(addBtn[0]);
        const cartCounter = screen.getByText("Shopping Cart (1)");
        expect(cartCounter).toBeInTheDocument();
    });

    it("the shopping cart counter increases by 2", async () => {
        const user = userEvent.setup();
        render(<App />);

        const shopLink = screen.getByRole("link", { name: "Shop" });
        await user.click(shopLink);
        const addBtn = screen.getAllByRole("button");
        await user.click(addBtn[0]);
        await user.click(addBtn[1]);
        const cartCounter = screen.getByText("Shopping Cart (2)");
        expect(cartCounter).toBeInTheDocument();
    });

    it("user increases the quantity of a single item in the cart", async () => {
        const user = userEvent.setup();
        render(<App />);

        const shopLink = screen.getByRole("link", { name: "Shop" });
        await user.click(shopLink);
        const addBtn = screen.getAllByRole("button");
        await user.click(addBtn[0]);
        const cart = screen.getByRole("link", { name: "Shopping Cart (1)" });
        await user.click(cart);
        const increaseQuantity = screen.getByRole("button", { name: "+" });
        await user.click(increaseQuantity);
        expect(screen.getByText("Total: £27.98")).toBeInTheDocument();
    });

    it("user increases the quantity of a single item in the cart and then decreases it", async () => {
        const user = userEvent.setup();
        render(<App />);

        const shopLink = screen.getByRole("link", { name: "Shop" });
        await user.click(shopLink);
        const addBtn = screen.getAllByRole("button");
        await user.click(addBtn[0]);
        const cart = screen.getByRole("link", { name: "Shopping Cart (1)" });
        await user.click(cart);
        const increaseQuantity = screen.getByRole("button", { name: "+" });
        await user.click(increaseQuantity);
        expect(screen.getByText("Total: £27.98")).toBeInTheDocument();
        const decreaseQuantity = screen.getByRole("button", { name: "-" });
        await user.click(decreaseQuantity);
        expect(screen.getByText("Total: £13.99")).toBeInTheDocument();
    });

    it("user puts an item in the cart and then removes it from the cart", async () => {
        const user = userEvent.setup();
        render(<App />);

        const shopLink = screen.getByRole("link", { name: "Shop" });
        await user.click(shopLink);
        const addBtn = screen.getAllByRole("button");
        await user.click(addBtn[0]);
        const cart = screen.getByRole("link", { name: "Shopping Cart (1)" });
        await user.click(cart);
        const removeBtn = screen.getByRole("button", { name: "Remove item" });
        await user.click(removeBtn);
        expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
    });
});
