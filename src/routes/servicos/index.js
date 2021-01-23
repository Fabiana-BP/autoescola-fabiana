import React from "react";

import ProductDetailPage from "components/pages/ProductDetail";

import { useScroolToTop } from "hooks/scroll";

const ProductDetail = () => {
  useScroolToTop();
  return <ProductDetailPage />;
};

export default ProductDetail;
