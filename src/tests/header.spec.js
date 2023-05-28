import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/header/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("should render Header", () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
