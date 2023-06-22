import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DialogLogin from "@/components/dialogLogin/Index";

afterEach(cleanup);

describe("Test dialogLogin", () => {
  it("should open dialog", () => {
    const { getByText } = render(<DialogLogin />);

    expect(getByText("Entrar")).toBeInTheDocument();

    expect(screen.getByRole("button", { value: false })).toBeInTheDocument();

    fireEvent.click(getByText("Entrar"));

    expect(screen.getByRole("button", { value: true })).toBeInTheDocument();
  });
});
