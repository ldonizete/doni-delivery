import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "@/components/productCard/Index";

afterEach(cleanup);

describe("Test Product Card", () => {
  it("should title in the card", () => {
    const { getByText } = render(<ProductCard title="Produto" price={1.99} />);

    expect(getByText("Produto")).toBeInTheDocument();
  });

  fit("should price in the card", () => {
    const { getByText } = render(<ProductCard price="1,99" />);

    expect(getByText("1,99")).toBeInTheDocument();
  });
});
