import React from "react";
import products from "../data/products";
import ProductCard from "./Productcard";

function ProductList() {
  return (
    <div className="product-grid">
      {/* map() turns each product object into a rendered ProductCard */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;