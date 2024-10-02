import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product, quantity) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
      setCartItems([...cartItems]); // Mettre à jour les items
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const onRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const onClearCart = () => {
    setCartItems([]);
  };

  const onUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Empêcher les quantités négatives
    const updatedItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
    );
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, onAddToCart, onRemoveFromCart, onClearCart, onUpdateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
