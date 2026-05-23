import React from "react";

export default function CartItem({ item, cart, setCart }) {
  const increment = () =>
    setCart(
      cart.map((i) => (i.id === item.id ? { ...i, amount: i.amount + 1 } : i))
    );
  const decrement = () =>
    item.amount === 1
      ? setCart(cart.filter((i) => i.id !== item.id))
      : setCart(
          cart.map((i) =>
            i.id === item.id ? { ...i, amount: i.amount - 1 } : i
          )
        );
  const removeItem = () => setCart(cart.filter((i) => i.id !== item.id));

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <h5>{item.price}¢</h5>
        <span className="remove-item" onClick={removeItem}>
          remove
        </span>
      </div>
      <div>
        <i className="fas fa-chevron-up" onClick={increment}></i>
        <p className="item-amount">{item.amount}</p>
        <i className="fas fa-chevron-down" onClick={decrement}></i>
      </div>
    </div>
  );
}
