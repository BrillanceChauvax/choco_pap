import React, { useContext } from 'react';
import { CartContext } from './CartContext.js';
import './CartPopup.css';

const CartPopup = ({ isOpen, onClose }) => {
  const { cartItems, onRemoveFromCart, onClearCart, onUpdateQuantity } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className={`cart-popup ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2 className="title-panier">PANIER</h2>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Votre panier est vide.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <button className="remove-item" onClick={() => onRemoveFromCart(item.id)}>✖</button>
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-details">
                <span className="item-title">{item.title}</span><br></br>
                <span className="item-price">{item.price} €</span>
                <select className="quantity-select" value={item.quantity} onChange={(e) => onUpdateQuantity(item.id, e.target.value)}>
                  {[...Array(99).keys()].map(num => (
                    <option key={num} value={num + 1}>{num + 1}</option>
                  ))}
                </select>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <h3 className="total-cart">Total: {total} €</h3>
        <button className="clear-cart" onClick={onClearCart}>RÉINITIALISER LE PANIER</button>
        <button className="validate-cart" disabled>VALIDER LE PANIER</button>
      </div>
    </div>
  );
};

export default CartPopup;


