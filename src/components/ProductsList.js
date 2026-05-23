import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList({ items, cart, setCart }) {
  return (
    <div className="products-center">
      {items.map((item) => (
        <ProductCard
          key={item.sys.id}
          item={item}
          cart={cart}
          setCart={setCart}
          inCart={cart.some((i) => i.id === item.sys.id)}
        />
      ))}
    </div>
  );
}
