import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import { describe, expect } from "vitest";

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
        render(<App />);
        const shopLink = screen.getByText("Shop");
        await userEvent.click(shopLink);
        const shopHeader = screen.getByRole("heading", { level: 1 });
        expect(shopHeader).toHaveTextContent("Shop");
    });

    it("The app goes from the homepage to the cart page", async () => {
        render(<App />);
        const cartLink = screen.getByText("Shopping Cart (0)");
        await userEvent.click(cartLink);
        const cartHeader = screen.getByRole("heading", { level: 1 });
        expect(cartHeader).toHaveTextContent("Shopping cart goes here");
    });

    it("The app goes back to the homepage from the shop page", async () => {
        render(<App />);
        const homeLink = screen.getByText("Home");
        const shopLink = screen.getByText("Shop");
        await userEvent.click(shopLink);
        await userEvent.click(homeLink);
        const homePageText = screen.getByText("Home page goes here");
        expect(homePageText).toBeInTheDocument();
    });
});
