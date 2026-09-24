import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  // Purely a UI concern (is the cart panel visible on small screens). this stays as local useState rather than going into the cart's Context, since no other component needs to know about it.
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    // Everything inside CartProvider can call useCart() to read the cart or dispatch changes Navbar, ProductCard, Cart, and CartItem all reach in independently, with no props passed between them.
    <CartProvider>
      <Navbar onToggleCart={() => setIsCartOpen((prev) => !prev)} />

      <div className="page">
        <main className="main-content">
          <h1 className="page-title">Shop</h1>
          <ProductList />
        </main>

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;