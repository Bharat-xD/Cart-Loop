import React from "react";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  // Each item's own contribution to the total.
  const subtotal = item.price * item.quantity;

  return (
    <li className="cart-item">
      <div className="cart-item-image">{item.image}</div>

      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">${item.price.toFixed(2)} each</p>

        <div className="qty-controls">
          <button
            className="qty-btn"
            onClick={() => decreaseQty(item.id)}
            aria-label={`Decrease quantity of ${item.name}`}
          >
            −
          </button>
          <span className="qty-value">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => increaseQty(item.id)}
            aria-label={`Increase quantity of ${item.name}`}
          >
            +
          </button>
        </div>
      </div>

      <div className="cart-item-right">
        <p className="cart-item-subtotal">${subtotal.toFixed(2)}</p>
        <button
          className="remove-btn"
          onClick={() => removeItem(item.id)}
          aria-label={`Remove ${item.name} from cart`}
        >
          ✕
        </button>
      </div>
    </li>
  );
}

export default CartItem;