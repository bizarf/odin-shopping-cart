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

    it("The shop link goes to the shop page", () => {
        render(<App />);
    });
});
