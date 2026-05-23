import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

export default function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  // Load items from JSON (Removed the absolute leading slash for GitHub Pages compatibility)
  useEffect(() => {
    fetch("library_item_names.json")
      .then((res) => res.json())
      .then((data) => {
        // Fallback checks to catch array-only or object-wrapped data structures
        setItems(data.items || data || []);
      })
      .catch((err) => console.error("Error fetching library data:", err));
  }, []);

  // Load cart from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const total = cart.reduce((sum, item) => sum + item.price * item.amount, 0);

  return (
    <>
      <Navbar
        cartCount={cart.reduce((sum, i) => sum + i.amount, 0)}
        onCartClick={() => setCartVisible(true)}
      />
      <ProductsList items={items} cart={cart} setCart={setCart} />
      <Cart
        cart={cart}
        setCart={setCart}
        visible={cartVisible}
        onClose={() => setCartVisible(false)}
        total={total}
      />
    </>
  );
}