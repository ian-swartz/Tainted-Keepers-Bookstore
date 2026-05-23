import React from "react";
import CartItem from "./CartItem";

export default function Cart({ cart, setCart, visible, onClose, total }) {
  const clearCart = () => setCart([]);

  return (
    <div className={`cart-overlay ${visible ? "transparentBcg" : ""}`}>
      <div className={`cart ${visible ? "showCart" : ""}`}>
        <span className="close-cart" onClick={onClose}>
          <i className="fas fa-window-close"></i>
        </span>
        <h2>Your Cart</h2>
        <div className="cart-content">
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                cart={cart}
                setCart={setCart}
              />
            ))
          )}
        </div>
        <div className="cart-footer">
          <h3>
            Your Total: <span className="cart-total">{total}¢</span>
          </h3>
          <button className="clear-cart banner-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
