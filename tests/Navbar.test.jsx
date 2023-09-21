import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import { describe, expect, it } from "vitest";

describe("Navbar tests", () => {
    it("The Navbar renders", () => {
        render(<App />);
        const homeLink = screen.getByText("Home");
        const shopLink = screen.getByText("Shop");
        const cartLink = screen.getByText("Shopping Cart (0)");
        expect(homeLink).toMatchSnapshot();
        expect(shopLink).toMatchSnapshot();
        expect(cartLink).toMatchSnapshot();
    });
});

describe("Router tests", () => {
    it("The app goes from the homepage to the shop page", async () => {
        const user = userEvent.setup();
        render(<App />);
        const shopLink = screen.getByRole("link", { name: "Shop" });
        await user.click(shopLink);
        const shopHeader = screen.getByRole("heading", { name: "Shop" });
        expect(shopHeader).toBeInTheDocument();
    });

    it("The app goes from the homepage to the cart page", async () => {
        const user = userEvent.setup();
        render(<App />);
        const cartLink = screen.getByRole("link", {
            name: "Shopping Cart (0)",
        });
        await user.click(cartLink);
        const cartHeader = screen.getByRole("heading", {
            name: "My Shopping Cart",
        });
        expect(cartHeader).toBeInTheDocument();
    });

    it("The app goes back to the homepage from the shop page", async () => {
        const user = userEvent.setup();
        render(<App />);
        const homeLink = screen.getByRole("link", { name: "Home" });
        const shopLink = screen.getByRole("link", { name: "Shop" });
        await user.click(shopLink);
        await user.click(homeLink);
        const homePageText = screen.getByText("Welcome to Computer World!");
        expect(homePageText).toBeInTheDocument();
    });
});
