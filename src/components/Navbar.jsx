import React from "react";
import { useCart } from "../context/CartContext";

function Navbar({ onToggleCart }) {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <p className="navbar-title">ShopReact</p>
      <button className="cart-toggle-btn" onClick={onToggleCart} aria-label="Toggle cart">
        🛒 Cart
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </button>
    </header>
  );
}

export default Navbar;