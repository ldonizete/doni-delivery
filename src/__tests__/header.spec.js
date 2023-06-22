import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/header/Header";

afterEach(cleanup);

describe("Header", () => {
  it("should render Header", () => {
    render(<Header bagValue={0} />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should alt img sacolinha de compra", () => {
    render(<Header bagValue={0} />);
    expect(screen.getByAltText("sacolinha de compra")).toBeInTheDocument();
  });

  it("should alt img logo do ze", () => {
    render(<Header bagValue={0} />);
    expect(screen.getByAltText("lodo do ze delivery")).toBeInTheDocument();
  });
});
