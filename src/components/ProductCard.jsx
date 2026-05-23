import React from "react";

export default function ProductCard({ item, inCart, cart, setCart }) {
  const { sys, fields } = item;
  const { title, price, image } = fields;
  const imgURL = image.fields.file.url;

  const addToCart = () => {
    if (inCart) return;
    setCart([...cart, { id: sys.id, title, price, image: imgURL, amount: 1 }]);
  };

  return (
    <article className={`product ${inCart ? "in-cart" : ""}`}>
      <div className="img-container">
        <img src={imgURL} alt={title} className="product-img" />
        <button className="bag-btn" onClick={addToCart} disabled={inCart}>
          {inCart ? (
            "In Cart"
          ) : (
            <>
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </>
          )}
        </button>
      </div>
      <h3>{title}</h3>
      <h4>{price}¢</h4>
    </article>
  );
}
