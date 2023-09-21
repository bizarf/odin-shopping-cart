import React from "react";
import { render } from "@testing-library/react";
import App from "../src/App";
import { describe, expect } from "vitest";

describe("App tests", () => {
    it("The app opens onto the homepage", () => {
        const { app } = render(<App />);

        expect(app).toMatchSnapshot();
    });
});
