import React from "react";
import { render, screen, fireEvent } from "test-utils";

import ProductGrid from "./ProductGrid";

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({ id: i, title: `Title ${i}` });
  }

  return result;
};

describe.each([
  [2, 2],
  [3, 3],
  [4, 3],
  [6, 3],
  [1, 1],
])("with %i products", (size, showOnly) => {
  test(`show ${showOnly} items`, () => {
    render(<ProductGrid products={buildProducts(size)} />);

    expect(screen.getAllByRole("heading").length).toBe(showOnly);
  });

  test("show all products as button is clicked", async () => {
    render(<ProductGrid products={buildProducts(size)} />);

    await fireEvent.click(screen.getByText("Lista completa de serviços"));

    expect(screen.getAllByRole("heading").length).toBe(size);
  });
});