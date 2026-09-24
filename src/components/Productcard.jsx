import React from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>
      <p className="product-name">{product.name}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart-btn" onClick={() => addItem(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;