import React from "react";

import ProductGrid from "./ProductGrid";

import PlaceholderImage from "stories/assets/carro.jpeg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      { image: PlaceholderImage, id: 1, title: "Título 1", summary: "Texto" },
      { image: PlaceholderImage, id: 2, title: "Título 2", summary: "Texto" },
      { image: PlaceholderImage, id: 3, title: "Título 3", summary: "Texto" },
      { image: PlaceholderImage, id: 4, title: "Título 4", summary: "Texto" },
      { image: PlaceholderImage, id: 5, title: "Título 5", summary: "Texto" },
      { image: PlaceholderImage, id: 6, title: "Título 6", summary: "Texto" },
    ]}
  />
);
