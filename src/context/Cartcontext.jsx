import React, { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer, initialCartState } from "./Cartreducer";

const STORAGE_KEY = "shopping-cart.items";

const CartContext = createContext(null);

//called once on first
function loadInitialCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialCartState;
  } catch {
    return initialCartState;
  }
}

export function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialCartState, loadInitialCart);

  // Save any time the cart changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  // Derived values, recalculated from cartItems on every render.
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // components call addItem(product)
  const addItem = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const increaseQty = (id) => dispatch({ type: "INCREASE_QTY", payload: id });
  const decreaseQty = (id) => dispatch({ type: "DECREASE_QTY", payload: id });

  const value = {
    cartItems,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    increaseQty,
    decreaseQty,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook
export function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}