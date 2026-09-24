import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./Cartitem";

function Cart({ isOpen, onClose }) {
  const { cartItems, totalItems, totalPrice } = useCart();

  return (
    <aside className={`cart-panel ${isOpen ? "cart-panel-open" : ""}`}>
      <div className="cart-header">
        <h2 className="cart-title">Your Cart ({totalItems})</h2>
        <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
          ✕
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-item-list">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          <div className="cart-total">
            <span>Total</span>
            <span className="cart-total-value">${totalPrice.toFixed(2)}</span>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;