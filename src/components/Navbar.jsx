import React from "react";

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="nav-icon">
          <i className="fas fa-bars"></i>
        </span>
        <img src="public/images/logo.jpg" alt="Logo" height="60" width="250" />
        <div className="cart-btn" onClick={onCartClick}>
          <span className="nav-icon">
            <i className="fas fa-shopping-cart"></i>
          </span>
          <div className="cart-items">{cartCount}</div>
        </div>
      </div>
    </nav>
  );
}
